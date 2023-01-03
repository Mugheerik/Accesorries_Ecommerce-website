import { Link } from "react-router-dom";
import "./home.css";
const Carousel = () => {


    return ( 

        <div id="carouselExampleCaptions" className="carousel slide carousel-dark" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item  " data-bs-interval="1000">
    <img src="https://cdn.shopify.com/s/files/1/0010/5083/7047/files/Men_s_and_Women_s_3_f_300x300.jpg?v=1600120665" className="d-block carimg" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      <Link className="Link2" to="/jewel"><h2> Jewellery</h2></Link>
      </div>
    </div>
    <div className="carousel-item "  data-bs-interval="2000">
    <img src="https://i.pinimg.com/originals/6b/3a/7c/6b3a7c4d02c8a28ccf87a5163e38220a.jpg " alt="..." className="d-block carimg"/>
    
      <div className="carousel-caption d-none d-md-block">
        
        <Link className="Link2" to='/glass'><h2>Glasses</h2></Link>
      </div>
    </div>
    <div className="carousel-item"  data-bs-interval="3000">
    <img src="https://th.bing.com/th/id/R.5269f4349a934167690a5fd80f2d88d1?rik=YUaRANHckmPq7w&riu=http%3a%2f%2fwww.cottonandcurls.com%2fwp-content%2fuploads%2f2012%2f04%2fDSC_03891.jpg&ehk=sM9j8sIn6lvtkTdvG7KDdIqsucq1ZeGpkuPazfMBEq0%3d&risl=&pid=ImgRaw&r=0 " alt="..." className="d-block carimg"/>
    
      <div className="carousel-caption d-none d-md-block">
        
        <Link className="Link2" to='/Lips'><h2>LipStick</h2></Link>
      </div>
    </div>
    <div className="carousel-item active "  data-bs-interval="4000">
      <img src="https://th.bing.com/th/id/R.d8b706dc5188f3f3ec21582351e15a29?rik=kx3VizhWABNS9w&pid=ImgRaw&r=0" className="d-block carimg" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
       
        <Link className="Link2 justify-content-center align-item-center"to="/watch" > <h2>Watches</h2></Link>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

     );
}
 
export default Carousel;
