import { Swiper } from "swiper/react"

import styled from 'styled-components'

export const Container = styled.div`
  max-width:800px;
  margin:auto;
`

export const MySwiper = styled(Swiper)`
.swiper {
  width: 100%;
  height: 430px;

  @media screen and (max-width:800px) {
    height: 300px;
  }
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height:430px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  @media screen and (max-width:800px) {
    height: 300px;
  }
}

.swiper-slide img {
  display: block;
  width: 90%;
  height: 90%;
  object-fit: cover;
  margin-bottom:10px;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}

/* target the active bullet */
span.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #7f1083;
}

span.swiper-pagination-bullet {
  width:10px;
  height:10px;
}

.swiper-button-next {
  right:0px;
  @media screen and (max-width:600px) {
    right:0px;
    --swiper-navigation-size: 22px;
  }
}

.swiper-button-prev {
  left:0px;
  @media screen and (max-width:600px) {
    left:0px;
    --swiper-navigation-size: 22px;
  }
}

.swiper-button-next:after,
.swiper-button-prev:after {
  color: #7f1083;
}

.swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom, .swiper-pagination-fraction {
  bottom: -9px;
  margin-bottom:8px;
}

`
