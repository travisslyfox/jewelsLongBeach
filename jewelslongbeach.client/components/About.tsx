import '../public/css/tooplate-style.css'
import GoLongBeach from '../src/assets/images/Go Long Beach.jfif'
import EatDrinkBeMary from '../src/assets/images/Eat Drink Be Mary.jfif'
import JAGC from '../src/assets/images/JAGC.jfif'
import Pride from '../src/assets/images/Pride.jfif'




function About() {
    
    return (
        <div className="tm-section tm-section-pad tm-bg-gray" id="tm-section-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">

                            <h2>About JEWELS</h2>    
                            <p>For over 21 years, wildly popular entertainer and personality JEWELS has been proud to call Long Beach her home. Jewels produces and hosts dozens of events, shows, and fundraisers throughout all of Southern California, but her heart belongs to Long Beach.</p>
                            <p>Since the beginning, Jewels’ mission has always been to ensure that everyone who visits Long Beach feels welcome, loved, and entertained, and her enchanting work has not gone unnoticed. In 2008, Jewels was the cover girl on the District’s LB Pride “Especially Gay Issue. By 2011, Jewels was recognized by Council member Suja Lowenthal as a “Steward of the Second District.” Then, in 2012, Jewels had the distinct honor of being named one of LB Post’s “40 Under 40.” In 2013, Jewels was nominated as one of the top “Movers and Shakers” of Long Beach’s LGBT community, all of whom are featured in GetOutLB's “Out Faces LB” project. As 2013 dawned, Jewels was honored by the International Imperial Court of Long Beach, with the 2013 "Rick Ford Humanitarian Award" for her consistent dedication to charitable causes in the Southern California Region and also Crowned Empress of the International Imperial Court of Long Beach with an Honorary title. The Long Beach Gay & Lesbian Pride organization selected Jewels as their 30th anniversary Community Grand Marshal, an honor she truly enjoyed. In 2014 the awards kept coming. Jewels has been named a "Community Icon" and was honored at the CENTER Long Beach's Black & White Gala. The Los Angeles Sisters of Perpetual Indulgence organization sainted her as “Saint Jewels, the real Queen Mary” in March 2014, and Jewels was also honored in the California State Capitol, Senate Chambers, by Senator Ricardo Lara in June of 2014. California Families in Focus awarded Jewels a special recognition in 2017 for her continued work to support their vital efforts. Long Beach Mayor, Dr. Robert Garcia, awarded Jewels with a special “Go Long Beach” honor in March of 2018. </p>
                            <p>When she’s not hosting charity fundraisers (if you’ve never seen Jewels lead a parade of drag queens down Broadway on Easter Sunday to benefit St. Mary’s C.A.R.E. Center, you haven’t really lived) or attending local community events all over Long Beach, you can find Jewels literally every night of the week at either Hamburger Mary’s, The Eagle 562 or The World Famous Falcon. She has hosted Stand Up Comedy shows in Hollywood and Long Beach at the Laugh Factory, as well as countless television appearances. Jewels  also produces events and clubs in West Hollywood, Orange County, and San Francisco. Every Saturday and Sunday morning her "Brunchette" troup entertains sold out crowds in several cities, with a exuberant Drag Queen Brunch. Whether she’s hosting a show, performing her own comedy routines, raising thousands of dollars for charity, or just laughing with friends, Long Beach can always count on Jewels to be there, brightening and enriching the city with her charm, wit, and love.</p>

                        </div>
                        
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-recommended-container">
                            <div className="tm-bg-white">
                                <div className="tm-bg-primary tm-sidebar-pad">
                                    <h3 className="tm-color-white tm-sidebar-title">More JEWELS</h3>
                                    <p className="tm-color-white tm-margin-b-0 tm-font-light">Refactore to carousel and height to text</p>
                                </div>
                                <div className="tm-sidebar-pad-2 carousel">
                                        <div className='carousel-slide'>
                                            <a href="#" className="media tm-media tm-recommended-item">
                                                <img src={GoLongBeach} style={{ width: '100%', maxHeight: '300px'}} alt="Image"/>                                     
                                            </a>
                                            <a href="#" className="media tm-media tm-recommended-item">
                                                <img src={EatDrinkBeMary} style={{ width: '100%', maxHeight: '300px'}} alt="Image"/>
                                            </a>
                                            <a href="#" className="media tm-media tm-recommended-item">
                                                <img src={JAGC} style={{ width: '100%', maxHeight: '300px'}} alt="Image"/>
                                            </a>
                                            <a href="#" className="media tm-media tm-recommended-item">
                                                <img src={Pride} style={{ width: '100%', maxHeight: '300px'}} alt="Image"/>
                                    </a>
                                                                                <a href="#" className="media tm-media tm-recommended-item">
                                                <img src={GoLongBeach} style={{ width: '100%', maxHeight: '300px'}} alt="Image"/>                                     
                                    </a>
                                                                                <a href="#" className="media tm-media tm-recommended-item">
                                                <img src={GoLongBeach} style={{ width: '100%', maxHeight: '300px'}} alt="Image"/>                                     
                                    </a>
                                                                                <a href="#" className="media tm-media tm-recommended-item">
                                                <img src={GoLongBeach} style={{ width: '100%', maxHeight: '300px'}} alt="Image"/>                                     
                                            </a>
                                        </div>
                                    </div>
                                </div>                            
                        </div>
                    </div>
                </div>
            </div>
    )
}



export default About;