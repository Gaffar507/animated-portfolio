import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination'
import "swiper/css";
import './testimonials.css';
import { motion } from 'framer-motion';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonials = () => {
    const clients = [
        { image: profilePic1,
            info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem amet dicta quod alias fugit beatae numquam repudiandae eius, molestias, dignissimos soluta veritatis similique assumenda sit doloribus? Iusto suscipit quod rem'
        },
        { image: profilePic2,
            info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem amet dicta quod alias fugit beatae numquam repudiandae eius, molestias, dignissimos soluta veritatis similique assumenda sit doloribus? Iusto suscipit quod rem'
        },
        { image: profilePic3,
            info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem amet dicta quod alias fugit beatae numquam repudiandae eius, molestias, dignissimos soluta veritatis similique assumenda sit doloribus? Iusto suscipit quod rem'
        },
        { image: profilePic4,
            info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem amet dicta quod alias fugit beatae numquam repudiandae eius, molestias, dignissimos soluta veritatis similique assumenda sit doloribus? Iusto suscipit quod rem'
        }
    ]

  return (
    <div className='testimonial-container' id='testimonial'>
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable:true}}
                className='testimonials'
            >
                {clients.map((item, index)=>{
                    return( <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={item.image} alt="image" />
                            <span>{item.info}</span>
                        </div>
                    </SwiperSlide>)
                })}
            </Swiper>
    </div>
  )
}

export default Testimonials
