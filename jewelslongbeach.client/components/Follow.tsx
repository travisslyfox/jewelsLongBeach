import Arrows from '../src/assets/components/Arrows'
import InstagramIcon from '../src/assets/images/InstagramIcon.png'
import XIcon from '../src/assets/images/XIcon.png'
import FacebookIcon from '../src/assets/images/FacebookIcon.png'
import CameoIcon from '../src/assets/images/CameoIcon.png'





function Follow() {

    
    return (
        <div className="tm-section tm-section-pad tm-bg-img" id="tm-section-5">                                                        
            <div className="container ie-h-align-center-fix">
                <div className="row tm-flex-align-center">
                        

                    <div className="col-xs-12 col-md-12 col-lg-3 col-xl-3 tm-media-title-container">
                        <h2 className="text-uppercase tm-section-title-2">Follow</h2>
                        <h3 className="tm-color-primary tm-font-semibold tm-section-subtitle-2">JEWELS Long Beach</h3>
                    </div>
                        
                    <Arrows/>
                        
                    <div className="col-xs-12 col-md-12 col-lg-3 col-xl-3 mt-0 mt-sm-3">
                        <div className="ml-auto tm-bg-white-shadow tm-pad tm-media-container">

                            <a href="https://www.instagram.com/jewelslongbeach/">
                                <article className="media tm-margin-b-20 tm-media-1">
                                    <img src={InstagramIcon} alt="Image" style={{ height: '50px', width: '50px', marginLeft: "auto", marginRight: "auto"}}/>
                                    <div className="media-body tm-media-body-1 tm-media-body-v-center">
                                        <h3 className="tm-font-semibold tm-color-primary tm-article-title-3">Instagram</h3>
                                        <p>Watch JEWELS LIVE over on Instagram!</p>
                                    </div>                                
                                </article>
                            </a>

                            <a href="https://x.com/JewelsLongBeach">   
                                <article className="media tm-margin-b-20 tm-media-1">
                                    <img src={XIcon} alt="Image" style={{ height: '50px', width: '50px', marginLeft: "auto", marginRight: "auto"}}/>
                                    <div className="media-body tm-media-body-1 tm-media-body-v-center">
                                        <h3 className="tm-font-semibold tm-color-primary tm-article-title-3">Twitter</h3>
                                        <p>Follow JEWELS' latest rants and raves!</p>
                                    </div>                                
                                </article>
                            </a>
                                        
                            <a href="https://www.facebook.com/profile.php?id=1070942867">   
                                <article className="media tm-margin-b-20 tm-media-1">
                                    <img src={FacebookIcon} alt="Image" style={{ height: '50px', width: '50px', marginLeft: "auto", marginRight: "auto"}}/>
                                    <div className="media-body tm-media-body-1 tm-media-body-v-center">
                                        <h3 className="tm-font-semibold tm-color-primary tm-article-title-3">Facebook</h3>
                                        <p>Friend and follow JEWELS for LIVE events and more!</p>
                                    </div>                                
                                </article>
                            </a>

                            <a href="https://www.cameo.com/jewelslongbeach">   
                                <article className="media tm-margin-b-20 tm-media-1">
                                    <img src={CameoIcon} alt="Image" style={{ height: '50px', width: '50px', marginLeft: "auto", marginRight: "auto"}}/>
                                    <div className="media-body tm-media-body-1 tm-media-body-v-center">
                                        <h3 className="tm-font-semibold tm-color-primary tm-article-title-3">Cameo</h3>     
                                        <p>Get a personalized message from JEWELS!</p>
                                    </div>                                
                                </article>
                            </a>
                                
                        </div>                            
                    </div>           
                </div>
            </div>
        </div>
    )
}



export default Follow;