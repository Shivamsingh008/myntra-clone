import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    banner01,
    banner02,
    banner03,
} from "./assets/index"


const Banner = () => {
    // const [dotActive, setDocActive] = useState(0);
    const settings = { 
        dots: true,
      infinite: true,
      autoplay: true,
       speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    
      
    };

    


  return (
    <div className='mt-[30px] S md:text-sm md:w-full  w-[472px]'>
    
    <Slider {...settings}>
  <div >
    <img  className="w-full md:h-[460px] h-[320px]  border " src={banner01} alt="banner01" />
  </div>
  <div>
    <img className="w-full md:h-[460px] h-[320px]  border " src={banner02} alt="banner02" />
  </div>
  <div>
  <img className="w-full md:h-[460px] h-[320px] border " src={banner03} alt="banner03" />
</div>

</Slider>
    
</div>
  )
}

export default Banner
