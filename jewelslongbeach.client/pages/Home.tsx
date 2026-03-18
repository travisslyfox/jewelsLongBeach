import '../public/css/bootstrap.min.css'
import '../public/css/datepicker.css'
import '../public/css/font-awesome.css'
import '../public/css/font-awesome.min.css'
import '../public/css/tooplate-style.css'
import Dragula from '../src/assets/images/Dragula.jfif'
import About from '../components/About'
import Follow from '../components/Follow'
import LBPVideo from '../src/assets/components/LBPVideo'
import GlobeIcon from '../src/assets/images/GlobeIcon.svg'
import MicIcon from '../src/assets/images/MicIcon.png'
import DiscoIcon from '../src/assets/images/DiscoIcon.png'




function Home() {


    return (
        <>
            
            <div className="tm-main-content" id="top" style={{paddingTop: '45px'}}>
                <div className="tm-top-bar-bg">
                    <img src={Dragula} className='dragula-img' style={{ boxShadow: '0 0 200px 10px #fff' }}></img>
                </div>

                <div className="tm-section tm-bg-img" id="tm-section-1">
                    <div className="tm-bg-white ie-container-width-fix-2">
                        <div className="container ie-h-align-center-fix">
                            <div className="row">
                                <div className="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                                    
                                </div>                        
                            </div>      
                        </div>
                    </div>                  
                </div>
                
                <div className="tm-section-2">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h2 className="tm-section-title">JEWELS Long Beach</h2>
                                <p className="tm-color-white tm-section-subtitle">Life of the Party</p>
                                <a href="/contact" className="tm-color-white tm-btn-white-bordered">See her Live</a>
                            </div>                
                        </div>
                    </div>        
                </div>
                
                <div className="tm-section tm-position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="tm-section-down-arrow">
                        <polygon fill="#bd17af" points="0,0  100,0  50,60"></polygon>                   
                    </svg> 
                    <div className="container tm-pt-5 tm-pb-4">
                        <div className="row text-center">
                            <article className="col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article">                            
                                <img src={GlobeIcon} className="fa tm-fa-6x fa-legal tm-color-primary tm-margin-b-20" style={{height: "75px", width: "75px"}}></img>
                                <h3 className="tm-color-primary tm-article-title-1">Global Brands</h3>
                                <p>Check out global brands JEWELS Productions has worked with previously, like Google and Netflix</p>
                                <a href="#tm-section-4" className="text-uppercase tm-color-primary tm-font-semibold">Learn More</a>
                            </article>
                            <article className="col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article">                            
                                <img src={MicIcon} className="fa tm-fa-6x fa-plane tm-color-primary tm-margin-b-20" style={{height: "75px", width: "75px"}}></img>
                                <h3 className="tm-color-primary tm-article-title-1">Community Engagement</h3>
                                <p>As the Mother of Long Beach, JEWELS is an active member of the Southern California queer cominuty</p>
                                <a href="#tm-section-4" className="text-uppercase tm-color-primary tm-font-semibold">Learn More</a>                            
                            </article>
                            <article className="col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article">                           
                                <img src={DiscoIcon} className="fa tm-fa-6x fa-life-saver tm-color-primary tm-margin-b-20" style={{height: "75px", width: "75px"}}></img>
                                <h3 className="tm-color-primary tm-article-title-1">Private Bookings</h3>
                                <p>JEWELS' Productions is avaible for your next fabulous engagement or event</p>
                                <a href="#tm-section-4" className="text-uppercase tm-color-primary tm-font-semibold">Learn More</a>                           
                            </article>
                        </div>        
                    </div>
                </div>
                
                <About/>  
                
                <LBPVideo/>
                
                <Follow />


            </div>
        </>
    )
}


export default Home;