import React from 'react'
import { Image, Video, Transformation } from 'cloudinary-react';
import { Section1Images, Section2Images, Section3Images, Section4Images, cloudName } from '../cloudImages/cloud';
import './Home.css' 

const Home = () => {
  return (
    <div>
        <div className='navDiv'>
          <div className='navinner'>
            <div className='navinner1'>
              <p className='p1'>New Arrival</p>
              <h2 className='h2'>Discover Our <br></br> New Collection</h2>
              <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
              <button>Buy Now</button>
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
              <p>Syltherine</p>
              <p><span>Stylish cafe chair</span></p>
              <p>Rp 2.500.000 <span>Rp 3.500.000</span></p>
            </div>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.leviosa}></Image>
              <p>Laviosa</p>
              <p><span>Stylish cafe chair</span></p>
              <p>Rp 2.500.000</p>
            </div>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.lolito}></Image>
              <p>Lolito</p>
              <p><span>Luxury big sofa</span></p>
              <p>Rp 7.000.000 <span>Rp 14.000.000</span></p>
            </div>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.respira}></Image>
              <p>Respira</p>
              <p><span>Outdoor bar table and stool</span></p>
              <p>Rp 500.000</p>
            </div>
          </div>
          <div className='galleryimage'>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.grifo}></Image>
              <p>Grifo</p>
              <p><span>Night lamp</span></p>
              <p>Rp 1.500.000</p>
            </div>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.muggo}></Image>
              <p>Muggo</p>
              <p><span>Small mug</span></p>
              <p>Rp 150.000</p>
            </div>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.pingky}></Image>
              <p>Pingky</p>
              <p><span>Cute bed set</span></p>
              <p>Rp 7.000.000 <span>Rp 14.000.000</span></p>
            </div>
            <div className='img2'>
              <Image cloudName={cloudName} publicId={Section2Images.potty}></Image>
              <p>Potty</p>
              <p><span>Minimalist flower pot</span></p>
              <p>Rp 500.000</p>
            </div>
          </div>
          <button>Show More</button>
        </section>
        <section>
          <div>

          </div>
          <div>
          <Image cloudName={cloudName} publicId={Section3Images.innerPeace}></Image>
          <Image cloudName={cloudName} publicId={Section3Images.innerPeace1}></Image>
          </div>
        </section>
        <section>
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