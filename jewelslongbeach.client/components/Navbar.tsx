import { Link } from "react-router-dom"

function Navbar() {


    return (
        <div className="tm-top-bar" id="tm-top-bar">
            <div className="container" style={{backgroundColor: '#bd17af'}}>
                <div className="row">
                                
                    <nav className="navbar navbar-expand-lg narbar-light">
                        <a className="navbar-brand mr-auto" href="/" style={{fontFamily: 'Satisfy'}}>
                            Jewels
                        </a>

                            <div id="mainNav" className="collapse navbar-collapse tm-bg-white" style={{ backgroundColor: '#bd17af' }}>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="">HOME </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">CONTACT</Link>
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