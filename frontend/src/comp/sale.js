import { Link } from "react-router-dom";

const Sale = () => {
    return ( 
        <div className="container p-5">
            <div className="row ">

            
                <div className="col-md-3 ">
                        <div className="card cardd text-bg-dark ">
                           
                                <img className="img-fluid" src="https://i.etsystatic.com/19563679/r/il/9d0e11/2751440510/il_fullxfull.2751440510_eedl.jpg" alt=""/>
                        <span class="position-absolute top-20 start-100 translate-middle p-2 bg-secondary border border-light rounded-pill">20% off </span>
                                <div className="card-img-overlay">
                                <Link className="Link"to='/jewel'> <h3> Men Jewellery</h3></Link>
                             
                            </div>
                        </div>
                </div>
                <div className="col-md-3 ">
                <div className="card cardd text-bg-dark ">
                           <img className="img-fluid" src="https://th.bing.com/th/id/R.d5325c2c98afffd61c0d7bd8a0eceaa6?rik=%2bZaMLvRTK2YtOQ&pid=ImgRaw&r=0" alt=""/>
                   <span class="position-absolute top-20 start-100 translate-middle p-2 bg-secondary border border-light rounded-pill">10% off </span>
                    
                           <div className="card-img-overlay">
                             
                              <Link className="Link"to='/jewel'> <h3> Women Jewellery</h3></Link>
                        
                       
                    </div>
                   </div>
                </div>
                <div className="col-md-3 ps-10">
                <div className="card cardd text-bg-dark ">
                           
                           <img className="img-fluid" src="https://th.bing.com/th/id/R.486aabada630a89a51de99aa8b01dfcd?rik=akYDA9vN3P0Pqg&pid=ImgRaw&r=0" alt=""/>
                   <span class="position-absolute top-20 start-100 translate-middle p-2 bg-secondary border border-light rounded-pill">40% off </span>
                           <div className="card-img-overlay">
                           <Link className="Link"to='/watch'> <h3> Watches</h3></Link>
                        
                       </div>
                   </div>
                </div>
                <div className="col-md-3 ps-10">
                <div className="card  cardd text-bg-dark ">
                           
                           <img className="img-fluid" src="https://i2.pickpik.com/photos/138/438/556/lipstick-cosmetics-make-up-face-preview.jpg" alt=""/>
                   <span class="position-absolute top-20 start-100 translate-middle p-2 bg-secondary border border-light rounded-pill">30% off </span>
                           <div className="card-img-overlay">
                           <Link className="Link"to='/lipstck'> <h3> LipStick</h3></Link>
                        
                       </div>
                   </div>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-12">
                <div className="card cardd text-bg-dark ">
                           
                           <img className="img-fluid" style={{height:"35vh"}} src="https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1" alt=""/>
                   <span class="position-absolute top-20 start-100 translate-middle p-2 bg-secondary border border-light rounded-pill">40% off </span>
                           <div className="card-img-overlay">
                           <Link className="Link"to='/watch'> <h3> Glasses</h3></Link>
                        
                       </div>
                   </div>
                </div>
            </div>
            </div>
        
     );
}
 
export default Sale;