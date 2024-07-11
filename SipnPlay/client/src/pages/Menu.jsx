import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import MenuItems from '../components/menu_items/MenuItems.jsx'
import Loader from '../components/Loader'
function Menu() {
  return (
    <>
        Menu
        <div className='container'>
          <div classname = "row">
          /* settng up the camera view */
                  <Canvas camera={{near: 0.1, far: 1000}}>
                    <Suspense fallback={<Loader/>}>
                    <directionalLight />
                    <ambientLight />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight />
                    <MenuItems />
                    </Suspense>
                  </Canvas>
            </div> 
        </div>
       
       
    </>
  )
}

export default Menu