import Carousel from 'react-bootstrap/Carousel';
import birds from '../assets/img/birds.jpg'
import corsacFox from '../assets/img/corsac-fox.jpg'
import mountain from '../assets/img/mountain.jpg'
import windmill from '../assets/img/windmill.jpg'


function CarouselExample() {
  return (
    <Carousel style ={{ maxWidth:"60%"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={birds}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={corsacFox}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mountain}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselExample;