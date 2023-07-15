import { Fragment } from 'react'
import Images from '../Images/Images'
import img1 from '../../img/tasks1.jpg'
import img2 from '../../img/tasks2.jpg'
import img3 from '../../img/tasks3.jpg'
import img4 from '../../img/tasks4.jpg'
import img5 from '../../img/tasks5.jpg'
import img6 from '../../img/tasks6.jpg'
import img7 from '../../img/tasks7.jpg'
import img8 from '../../img/tasks8.jpg'
import img9 from '../../img/tasks9.jpg'
import "./Home.css"


const Home = () => {
    return (
        <Fragment>
            <Images />

            <div className="marquee">
                <ul className="marquee__content">
                    <li className="marquee__item"><img src={img1}  alt="text algo"/></li>
                    <li className="marquee__item"><img src={img2} alt="text algo"/></li>
                    <li className="marquee__item"><img src={img3} alt="text algo"/></li>
                    <li className="marquee__item"><img src={img4} alt="text algo"/></li>
                    <li className="marquee__item"><img src={img5} alt="text algo"/></li>
                    <li className="marquee__item"><img src={img6} alt="text algo"/></li>
                    <li className="marquee__item"><img src={img7} alt="text algo"/></li>
                    <li className="marquee__item"><img src={img8} alt="text algo"/></li>
                    <li className="marquee__item"><img src={img9} alt="text algo"/></li>
                </ul>
            </div>
        </Fragment>
    )
}


export default Home