import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const cardAktivity = (props) => {
    return(
        <Card style={{ width: '18rem' }} className="cardActivity">
        <Card.Title>{props.title}</Card.Title>
        <Card.Img src={props.image} className="cardImage"/>
        <Card.Body className='cardBody'>
          <Card.Text className='cardDescription'>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default cardAktivity