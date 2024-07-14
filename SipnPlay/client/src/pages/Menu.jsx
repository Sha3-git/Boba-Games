import { Canvas } from '@react-three/fiber'
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
      screenScale = [12, 12, 12];
      screenPosition = [0, -50.5, -73.4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();


  return (
    <>
      <Header />
      <div className='container-fluid ms-lg-5'>
        <div className='container-fluid w-75'>
          <div className="row mt-5 mb-5 pt-lg-5 pb-lg-5">
            <div className="col-lg-4 d-flex align-items-center">
              <hr className='w-100' />
            </div>
            <div className="col-lg-4 ">
              <p className="fs-1 m-title fw-bold text-center ">MENU</p>
            </div>
            <div className="col-lg-4  d-flex align-items-center">
              <hr className='w-100' />
            </div>
          </div>
          <div className="row">
            <div className=" col-lg-6 d-flex align-items-start text-start pt-lg-5 mt-lg-4">
              <div className="row">
                <div className="fs-1 menu fw-bold">Boba Tea</div>
                <div className="mt-5">
                  <span className="fa fa-star checked "></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa  fa-star checked"></span>
                  <span className="fa  fa-star-half-o"></span>
                  <span className="fs-4 ps-lg-5 fw-bold">23</span>
                </div>
                <div className='mt-5 fs-4'>
                  <p>A boba pearl latte is a delightful beverage that combines rich, creamy milk tea with chewy tapioca pearls, also known as boba. This refreshing drink features the perfect balance of sweet and smooth flavors, with the pearls adding a fun, unique texture to each sip. Often enjoyed chilled, the boba pearl latte is a popular choice for both tea enthusiasts and those seeking a delicious, trendy treat.</p>

                </div>
              </div>
            </div>
            <div className=" col-lg-6 mt-sm-5 d-flex justify-contents-end" >
              <Suspense fallback={<Loader />}>
                <Canvas shadows camera={{ near: 0.1, far: 1000 }} style={{ width: '100%', height: '500px' }}>
                  <directionalLight
                    position={[-20, 10, 0]} // Position the light to the left
                    intensity={15}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-5}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                  />
                  <ambientLight intensity={2} />
                  <pointLight />
                  <spotLight />
                  <hemisphereLight />
                  <Boba
                    setCurrentStage={setCurrentStage}
                    position={islandPosition}
                    rotation={[0, 0, -0.3]}
                    scale={islandScale}
                  />
                </Canvas>
              </Suspense>
            </div>
          </div>

          <div className="row mt-5">
            <div className=" col-lg-6 d-flex align-items-start text-start pt-lg-5 mt-lg-4">
              <div className="row">
                <div className="fs-1 menu fw-bold">Mocha Latte</div>
                <div className="mt-5">
                  <span className="fa fa-star checked "></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fs-4 ps-lg-5 fw-bold">24</span>
                </div>
                <div className='mt-5 fs-4'>
                  <p>A mocha latte at sip n' play is a luxurious blend of bold espresso, creamy steamed milk, and rich chocolate, finished with a light foam topping. This indulgent beverage combines the deep flavors of coffee and cocoa, offering a perfect balance of sweetness and richness. Ideal for any time of day, our mocha latte is a comforting and invigorating treat that will satisfy both coffee and chocolate lovers.</p>

                </div>
              </div>
            </div>
            <div className=" col-lg-6 mt-sm-5 d-flex justify-contents-end" >
              <Suspense fallback={<Loader />}>
                <Canvas shadows camera={{ near: 0.1, far: 1000 }} style={{ width: '100%', height: '500px' }}>
                  <directionalLight
                    position={[-20, 10, 0]} // Position the light to the left
                    intensity={15}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-5}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                  />
                  <ambientLight intensity={2} />
                  <pointLight />
                  <spotLight />
                  <hemisphereLight />
                  <Latte
                    setCurrentStage={setCurrentStage}
                    position={islandPosition}
                    rotation={[0, 0, 0]}
                    scale={islandScale}
                  />
                </Canvas>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
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
              <Canvas shadows camera={{ near: 0.1, far: 1000 }} style={{ width: '100%', height: '500px' }}>
                <directionalLight
                  position={[-20, 10, 0]} // Position the light to the left
                  intensity={15}
                  castShadow
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                  shadow-camera-far={50}
                  shadow-camera-left={-5}
                  shadow-camera-right={10}
                  shadow-camera-top={10}
                  shadow-camera-bottom={-10}
                />
                <ambientLight intensity={2} />
                <pointLight />
                <spotLight />
                <hemisphereLight />
                <Boba
                  setCurrentStage={setCurrentStage}
                  position={islandPosition}
                  rotation={[0, 0, -0.3]}
                  scale={islandScale}
                />
              </Canvas>
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Suspense fallback={<Loader />}>
              <Canvas camera={{ near: 0.1, far: 1000 }} style={{ width: '100%', height: '300px' }}>
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
              <Canvas camera={{ near: 0.1, far: 1000 }} style={{ width: '100%', height: '300px' }}>
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