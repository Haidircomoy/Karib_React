import Carousel from 'react-bootstrap/Carousel';
import home1 from '../assets/image/Home/home1.jpeg';
import home2 from '../assets/image/Home/home2.jpeg';
import home3 from '../assets/image/Home/home3.jpg';
import home4 from '../assets/image/Home/home4.jpg';
import home5 from '../assets/image/Home/home5.jpg';


const slideShow = () => {
return (
    <Carousel variant="dark">
    <Carousel.Item className='photoslideshow'>
      <img
        className="d-block w-100"
        src={home1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item className='photoslideshow'>
      <img
        className="d-block w-100"
        src={home2}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item className='photoslideshow'>
      <img
        className="d-block w-100"
        src={home3}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item className='photoslideshow'>
      <img
        className="d-block w-100"
        src={home4}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item className='photoslideshow'>
      <img
        className="d-block w-100"
        src={home5}
        alt="First slide"
      />
    </Carousel.Item>
  </Carousel>
)

}

export default slideShow