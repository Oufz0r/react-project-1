import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div id="Header">
            <div className="logo-box">
                <img src='/images/logo.jpg' alt='logo' />
                <h1>P<span>RETTY</span> P<span>RINT</span></h1>
            </div>
            <div className="nav-box">
                <ul>
                <Link to="/"><li><span>Accueil</span><div className='bar'></div></li></Link>
                <Link to="/products"><li><span>Produits</span><div className='bar'></div></li></Link>
                <Link to="/contact"><li><span>Contact</span><div className='bar'></div></li></Link>
                <Link to="/about"><li><span>A propos</span><div className='bar'></div></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Banner