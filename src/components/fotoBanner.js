import banner from '../assets/Foto.jpg';
import './fotoBanner.css';

function Banner() {''
    return (
        <div className="imageBanner-container">
             <img src={banner} alt="foto" className='imageBanner'/>
        </div>
    );
}

export default Banner;