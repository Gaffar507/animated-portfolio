import React from 'react'
import './portfolio.css'
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { useGlobalContext } from '../../Context';
const Portfolio = () => {
    const {state} =useGlobalContext()
    const {darkMode}=state
  return (
    <div className='portfolio' id='portfolio'>
              {/* heading */}
      <span style={darkMode? {color:'white'}:{}}> Recent Projects </span>
      <span> Portfolio </span>
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="side bar" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="Ecommerce" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="hooks" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="music app" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
