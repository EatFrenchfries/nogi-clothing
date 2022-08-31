import {Key, useState} from 'react'
// Import Swiper React components
import { SwiperSlide} from "swiper/react"
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Container,MySwiper } from "./home-swiper.styles"

// import required modules
import { Pagination, Navigation } from "swiper";

type SwiperImageUrl = {
  id:Key
  imageUrl:string
  name:string
  goods:string
}

const images:SwiperImageUrl[] = [
  {
    id:1,
    imageUrl:"https://www.nogizaka46.com/images/46/217/ae6434a94edb62be3e2bf4f6c6955.jpg",
    name:"9th_Birthday_Live",
    goods:"birthday"

  },
  {
    id:2,
    imageUrl:"https://www.nogizaka46.com/images/46/c2a/ee314c22e6f9822d950fd9a10fc22.jpg",
    name:"2022_Summer_Tour_Live",
    goods:"summer"
  },
  {
    id:3,
    imageUrl:"https://www.nogizaka46.com/images/46/0b0/78d5bd87d42d71d7a0ed278187e04.jpg",
    name:"5th_Members",
    goods:"5th Members"
  }
]

const HomeSwiper = () => {
  const [youtubeID] = useState("DEV6OLtbqVc")

  return (
    <Container>
      <MySwiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        lazy={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        >
        {images.map((image)=>
          (<SwiperSlide key={image.id}>
              <Link className='img'  to={`event/${image.goods}`} style={{
                  backgroundImage: `url(${image.imageUrl})`}}>
              </Link>
            </SwiperSlide>
          ))}
        <SwiperSlide>
            <ReactPlayer controls={true} width='90%' height='85%' url={`https://www.youtube.com/watch?v=${youtubeID}`}
            config={{
              youtube: {
                playerVars: {
                  autoplay: 0,  
                    enablejsapi: 1,
                    host: `${window.parent.location.protocol}//www.youtube.com`,
                    origin: window.parent.location.origin
                }
              }  
            }}
            />
            </SwiperSlide>        
      </MySwiper>
    </Container>
  );
}

export default HomeSwiper