import './Item.css';
import { Container, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Item = ({id, nombre, precio, img, stock}) => {

    return(
        <Container> 
                <Col>
                <Card className='grupo-items' style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={img} className='img-catalogo'/>
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                        Precio: {precio}
                        </Card.Text>
                        <Card.Text>
                        Cantidad Disponible: {stock}
                        </Card.Text>
                        <link to={`/item/${id}`} className='option'/>
                    </Card.Body>
                </Card>
                </Col>
            </Container> 
        
    )
}

export default Item;