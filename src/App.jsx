import { useState } from 'react'
import './App.css'
import Navitem from './components/Navitem/Navitem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="box">
        <div className="nav">
          <div className="navi">
            <div className="dove">
              <img src=".\src\assets\dove 1.png" alt="" />
              <h2 className='cyan'>Traveloo</h2>
            </div>
            <Navitem link=".\src\assets\Frame.png" text="Home"></Navitem>
            <Navitem link=".\src\assets\wallet-2.png" text="Booking"></Navitem>
            <Navitem link=".\src\assets\global-search.png" text="Explore"></Navitem>
            <Navitem link=".\src\assets\message.png" text="Message"></Navitem>
            <Navitem link=".\src\assets\message-question.png" text="Support"></Navitem>
            <Navitem link=".\src\assets\category-2.png" text="Setting"></Navitem>
          </div>
          <Navitem link=".\src\assets\logout.png" text="Logout"></Navitem>
        </div>
        <div className="most">
          <section>
            <div className="greet">
              <div className="fir">
                <h2>Hello Valera!</h2>
                <p>Welcome back and explore new trips</p>
              </div>
              <div className="avat">
                <img src=".\src\assets\Notification.png" alt="" />
                <img src=".\src\assets\Ellipse 2.png" alt="" />
              </div>
            </div>
            <div className="countries"></div>
            <div className="sort"></div>
          </section>
          <main></main>
        </div>
      </div>
    </>
  )
}
export default App