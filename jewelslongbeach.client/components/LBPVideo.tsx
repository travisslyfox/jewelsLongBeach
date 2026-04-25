import '../public/css/tooplate-style.css'


function LBPVideo() {
    
    return (
        <div className="tm-bg-video">
            <div className="overlay">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/p_p5kTSPJKY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </div>   
    )
} 


export default LBPVideo;