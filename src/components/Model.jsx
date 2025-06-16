import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { exp } from 'three/tsl'

function IphoneScene() {
    const { scene, cameras, nodes, materials } = useGLTF('/iphone.glb')

    return (
        <>
            <primitive object={scene} position={[0, -0.7, 0]} />
        </>
    )
}

function Model(){
    return(
        <>
         <Canvas className='' camera={{ position: [0, 0, 5], fov: 30 }}>
                                {/* <ambientLight intensity={3} /> */}
                                {/* <directionalLight position={[2, -2, 6]} intensity={20} /> */}
                                <pointLight position={[-1.02247, 0.82668, 1.61848]} intensity={10} />
                                <pointLight position={[0.843872, 1.00545, 1.61848]} intensity={10} />
                                <pointLight position={[-1.02247, -0.979184, 1.61848]} intensity={10} />
                                <pointLight position={[0.843872, -0.979184, 1.61848]} intensity={10} />
                                <IphoneScene />
                                {/* <directionalLight position={[2, 5, -10]} intensity={20} /> */}
                                <OrbitControls enableZoom={false} />
                            </Canvas>
        </>
    )
}
export default Model;