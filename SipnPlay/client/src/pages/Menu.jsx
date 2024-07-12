import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react';
import { useState } from 'react';
import MenuItems from '../components/menu_items/MenuItems.jsx'
import Loader from '../components/Loader'
import Boba from '../3d_models/Boba.jsx'
import Latte from '../3d_models/Latte.jsx';
import Coco from '../3d_models/Coco.jsx';

function Menu() {

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [6, 6, 6];
      screenPosition = [0, -10.5, -44.4];
    } else {
      screenScale = [15, 15, 15];
      screenPosition = [0, -50.5, -73.4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();


  return (
    <>
        <div className='container-fluid my-5 width=' >
          <div className = "row">
          {/* settng up the camera view */}
          <Suspense fallback={<Loader/>}>
          {/*currentStage && <HomeInfo currentStage={currentStage} />*/}
          
                  <Canvas camera={{near: 0.1, far: 1000}}  style={{ width: '100%', height: '400px' }}>
                    <directionalLight />
                    <ambientLight />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight />
                    <Boba 
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                    position={islandPosition}
                    rotation={[0, 0, 0]}
                    scale={islandScale}
                    />
                  </Canvas>
                  </Suspense>
            </div> 
        </div>
        <div className='container-fluid my-5width='>
          <div className = "row">
          {/* settng up the camera view */}
          <Suspense fallback={<Loader/>}>
          {/*currentStage && <HomeInfo currentStage={currentStage} />*/}
          
                  <Canvas camera={{near: 0.1, far: 1000}}  style={{ width: '100%', height: '400px' }}>
                    <directionalLight />
                    <ambientLight />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight />
                    <Latte 
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                    position={islandPosition}
                    rotation={[0, 0, 0]}
                    scale={islandScale}
                    />
                  </Canvas>
                  </Suspense>
            </div> 
        </div>
        <div className='container-fluid my-5width='>
          <div className = "row">
          {/* settng up the camera view */}
          <Suspense fallback={<Loader/>}>
          {/*currentStage && <HomeInfo currentStage={currentStage} />*/}
          
                  <Canvas camera={{near: 0.1, far: 1000}}  style={{ width: '100%', height: '400px' }}>
                    <directionalLight />
                    <ambientLight />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight />
                    <Coco 
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                    position={islandPosition}
                    rotation={[0, 0, 0]}
                    scale={islandScale}
                    />
                  </Canvas>
                  </Suspense>
            </div> 
        </div>
    </>
  )
}

export default Menu