


function Navbar() {

return (
<div className="tm-top-bar" id="tm-top-bar">
    <div className="container" style={{backgroundColor: '#bd17af'}}>
        <div className="row">
                        
            <nav className="navbar navbar-expand-lg narbar-light">
                <a className="navbar-brand mr-auto" href="" style={{fontFamily: 'Satisfy'}}>
                    Jewels
                </a>

                    <div id="mainNav" className="collapse navbar-collapse tm-bg-white" style={{ backgroundColor: '#bd17af' }}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#top">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tm-section-4">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tm-section-5">Follow</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    </div>


)

}


export default Navbar