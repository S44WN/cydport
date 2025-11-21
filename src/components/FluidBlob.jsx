import { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { shaderMaterial, useScroll } from '@react-three/drei'
import * as THREE from 'three'

const FluidMaterial = shaderMaterial(
  { 
    uTime: 0, 
    uColorStart: new THREE.Color('#0000ff'), 
    uColorEnd: new THREE.Color('#00ffff') 
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    varying float vDisplacement;
    uniform float uTime;

    // Simplex 3D Noise 
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    float snoise(vec3 v) {
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute( permute( permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 0.142857142857;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                    dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
      vUv = uv;
      float noise = snoise(position * 0.8 + uTime * 0.2);
      vDisplacement = noise;
      // Displace vertices along normal
      vec3 newPos = position + normal * noise * 0.08;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
  `,
  // Fragment Shader
  `
    varying vec2 vUv;
    varying float vDisplacement;
    uniform vec3 uColorStart;
    uniform vec3 uColorEnd;

    void main() {
      // Mix colors based on displacement
      float mixStrength = smoothstep(-0.2, 0.5, vDisplacement);
      vec3 color = mix(uColorStart, uColorEnd, mixStrength);
      
      // Add shadows/black areas for depth
      color = mix(vec3(0.0), color, smoothstep(-0.6, 0.1, vDisplacement));
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
)

extend({ FluidMaterial })

export default function FluidBlob() {
  const materialRef = useRef()
  const meshRef = useRef()
  const scroll = useScroll()

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime()
    }
    if (meshRef.current && scroll) {
      // Rotate based on scroll offset
      // scroll.offset is 0 to 1
      const rotation = scroll.offset * Math.PI * 2
      meshRef.current.rotation.y = rotation
      meshRef.current.rotation.z = rotation * 0.5
    }
  })

  return (
    <mesh ref={meshRef} scale={[1.2, 1.2, 1.2]}>
      <sphereGeometry args={[1, 64, 64]} />
      <fluidMaterial ref={materialRef} />
    </mesh>
  )
}
