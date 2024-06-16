import React from 'react'
import { Image, Video, Transformation } from 'cloudinary-react';
import { Section1Images, Section2Images, Section3Images, Section4Images, cloudName } from '../cloudImages/cloud';
import './Home.css' 



const Home = () => {
  return (
    <div>
        <div className='navDiv'>
          <div className='navinner'>
            <div>
              <p className='p1'>New Arrival</p>
              <h2 className='h2'>Discover Our <br></br> New Collection</h2>
              <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br></br> elit tellus, luctus nec ullamcorper mattis</p>
              <button className='bt'>Buy Now</button>
            </div> 
          </div>
        </div>
        <section className='section1'>
          <h3>Browse The Range</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className='browse'>
            <Image cloudName={cloudName} publicId={Section1Images.dining}></Image>
            <Image cloudName={cloudName} publicId={Section1Images.living}></Image>
            <Image cloudName={cloudName} publicId={Section1Images.bedroom}></Image>
          </div>
          <div className='section1p'>
            <p>Dining</p>
            <p>Living</p>
            <p>Bedroom</p>
          </div>
        </section>
        <section className='gallery'>
          <h2>Our Products</h2>
          <div className='galleryimage'>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.syltherine}></Image>
              <p className='img2name'>Syltherine</p>
              <p><span span className='span1'>Stylish cafe chair</span></p>
              <p className='img2price'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
            </div>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.leviosa}></Image>
              <p className='img2name'>Laviosa</p>
              <p><span className='span1'>Stylish cafe chair</span></p>
              <p className='img2price'>Rp 2.500.000</p>
            </div>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.lolito}></Image>
              <p className='img2name'>Lolito</p>
              <p><span className='span1'>Luxury big sofa</span></p>
              <p className='img2price'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
            </div>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.respira}></Image>
              <p className='img2name'>Respira</p>
              <p><span className='span1'>Outdoor bar table and stool</span></p>
              <p className='img2price'>Rp 500.000</p>
            </div>
          </div>
          <div className='galleryimage'>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.grifo}></Image>
              <p className='img2name'>Grifo</p>
              <p><span className='span1'>Night lamp</span></p>
              <p className='img2price'>Rp 1.500.000</p>
            </div>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.muggo}></Image>
              <p className='img2name'>Muggo</p>
              <p><span className='span1'>Small mug</span></p>
              <p className='img2price'>Rp 150.000</p>
            </div>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.pingky}></Image>
              <p className='img2name'>Pingky</p>
              <p><span className='span1'>Cute bed set</span></p>
              <p className='img2price'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
            </div>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.potty}></Image>
              <p className='img2name'>Potty</p>
              <p><span className='span1'>Minimalist flower pot</span></p>
              <p className='img2price'>Rp 500.000</p>
            </div>
          </div>
          <button className='bt2'>Show More</button>
        </section>
        <section className='carousel'>
          <div className='carousel1'>
            <p>50+ Beautiful rooms inspiration</p>
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button>Explore More</button>
          </div>
          <div className='carousel2'>
          <Image cloudName={cloudName} publicId={Section3Images.innerPeace}></Image>
          <Image cloudName={cloudName} publicId={Section3Images.innerPeace1}></Image>
          <Image cloudName={cloudName} publicId={Section3Images.innerPreace3}></Image>
          </div>
        </section>
        <section className='sect3'>
          <p>share your setup with</p>
          <h2>#FuniroFurniture</h2>
          <div>
          <Image cloudName={cloudName} publicId={Section4Images.img1}></Image>
          <Image cloudName={cloudName} publicId={Section4Images.img2}></Image>
          <Image cloudName={cloudName} publicId={Section4Images.img3}></Image>
          <Image cloudName={cloudName} publicId={Section4Images.img4}></Image>
          <Image cloudName={cloudName} publicId={Section4Images.img5}></Image>
          <Image cloudName={cloudName} publicId={Section4Images.img6}></Image>
          <Image cloudName={cloudName} publicId={Section4Images.img7}></Image>
          <Image cloudName={cloudName} publicId={Section4Images.img8}></Image>
          <Image cloudName={cloudName} publicId={Section4Images.img9}></Image>
          </div>
        </section>
    </div>
  )
}

export default Home