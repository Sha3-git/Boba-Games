import {Canvas} from '@react-three/fiber'
import { Container, Row, Col } from 'react-bootstrap';
import { Suspense } from 'react';
import { useState } from 'react';
import MenuItems from '../components/menu_items/MenuItems.jsx'
import Loader from '../components/Loader'
import Boba from '../3d_models/Boba.jsx'
import Latte from '../3d_models/Latte.jsx';
import Coco from '../3d_models/Coco.jsx';
import Header from "../components/Header"

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
       <Header />
      <Container fluid className='my-5'>
      <Row>
        <Col md={6} className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: '50vh' }}>
          <div>
            <h3>Boba Tea</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque est odio impedit quaerat ipsa fugit dicta a deleniti! Dolore minima ut fugiat omnis ea quo voluptate suscipit obcaecati iste. Numquam?</p>
          </div>
        </Col>
          <Col md={6}>
          <Suspense fallback={<Loader />}>
            <Canvas camera={{ near: 0.1, far: 1000 }} style={{ width: '100%', height: '300px' }}>
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
        </Col>
      </Row>
      <Row>
          <Col md={6}>
          <Suspense fallback={<Loader />}>
          <Canvas camera={{near: 0.1, far: 1000}}  style={{ width: '100%', height: '300px' }}>
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
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: '50vh' }}>
          <div>
            <h3>Coffee Latte </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque est odio impedit quaerat ipsa fugit dicta a deleniti! Dolore minima ut fugiat omnis ea quo voluptate suscipit obcaecati iste. Numquam?</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: '50vh' }}>
          <div>
            <h3>Coconut Drink</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque est odio impedit quaerat ipsa fugit dicta a deleniti! Dolore minima ut fugiat omnis ea quo voluptate suscipit obcaecati iste. Numquam?</p>
          </div>
        </Col>
          <Col md={6}>
          <Suspense fallback={<Loader />}>
          <Canvas camera={{near: 0.1, far: 1000}}  style={{ width: '100%', height: '300px' }}>
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
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Menu