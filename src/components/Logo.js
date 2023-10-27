import logo from '../assets/logoDecathlon.jpg';
import './Logo.css';

function Logo() {''
    return (
        <div>
             <img src={logo} alt="dec" className='imageLogo'/>
        </div>
    );
}

export default Logo;