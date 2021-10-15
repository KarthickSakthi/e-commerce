import React from 'react'
import '../BannerSlide/BannerSlide.css'
import Slider from 'react-slick'
import img1 from './BannerImgSlider/Bannerimg1.jpg'
import img2 from './BannerImgSlider/Bannerimg2.jpg'
import img3 from './BannerImgSlider/Bannerimg3.jpg'
import img4 from './BannerImgSlider/Bannerimg4.jpg'
import img5 from './BannerImgSlider/Bannerimg5.jpg'

const BannerSlide = () => {
    return (
        <div style={{margin:'2%'}}>
            <Slider>
                <div >
                    <img src={img1} style={{width:'100%',height:'50vh'}}></img>
                </div>
                <div>
                    <img src={img2} style={{width:'100%',height:'50vh'}}></img>
                </div>
                <div>
                    <img src={img3} style={{width:'100%',height:'50vh'}}></img>
                </div>
                <div>
                    <img src={img4} style={{width:'100%',height:'50vh'}}></img>
                </div>
                <div>
                    <img src={img5} style={{width:'100%',height:'50vh'}}></img>
                </div>
            </Slider>
        </div>
    )
}

export default BannerSlide
