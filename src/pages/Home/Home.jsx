import React from 'react'
import "./Home.css"
import Banner from '../../Components/Banner/Banner'

const Home = () => {
  return (
    <div className='home'>
      <Banner/>
{/*Section 2*/}
<section className='section'>
  
</section>
      {/*best collection*/}
      <section className='section'>
        <p style={{fontSize:"100px",marginBottom:"100px"}} className='text-center'>Best collection</p>
        <div className="row row-cols-1 row-cols-md-3 g-3">
  <div className="col">
    <div className="card border-0 h-100">
      <img src="/assets/card1.jpg" className="card-img-top cardImage img-fluid" alt="..."/>
      
    </div>
  </div>
  <div className="col">
    <div className="card border-0 h-100">
      <img src="/assets/card2.jpg" className="card-img-top cardImage img-fluid" alt="..."/>
     
    </div>
  </div>
  <div className="col">
    <div className="card border-0 h-100">
      <img src="/assets/card3.jpg" className="card-img-top cardImage image-fluid" alt="..."/>

    </div>
  </div>
 
</div>
      </section>
    </div>
  )
}

export default Home