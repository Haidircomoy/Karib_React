import fb from '../assets/image/Icon/fb.png'
import wa from '../assets/image/Icon/wa.png'
import yt from '../assets/image/Icon/yt.png'
import gmail from '../assets/image/Icon/gmail.png'
import ig from '../assets/image/Icon/ig.png'

const hubungiKami = () => {
    return(
        <div className='icon-section flex-wrap'>   
            <div className='icon'>
                <a href="https://www.facebook.com/karib.fmmb.7">
                    <img src={fb} alt="fb" />
                </a>
            </div>   
            <div className='icon'>
                <a href="https://www.instagram.com/sahabat.karib/">
                    <img src={ig} alt="ig" />
                </a>
            </div>   
            <div className='icon'>
                <a href="https://www.youtube.com/c/KARIBChannel">
                    <img src={yt} alt="yt" />
                </a>
            </div>   
            <div className='icon'>
                <a href="https://wa.me/6288211191599">
                    <img src={wa} alt="wa" />
                </a>
            </div>   
            <div className='icon'>
                <a href="mailto:sahabatkarib104@gmail.com">
                    <img src={gmail} alt="gmail" />
                </a>
            </div>
        </div>
    )
}

export default hubungiKami