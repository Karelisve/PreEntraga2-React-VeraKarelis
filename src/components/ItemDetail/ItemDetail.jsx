import ItemCount from "../ItemCount/ItemCount"
import { Container, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const ItemDetail = ({ nombre, precio, img, stock}) => {
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
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada ')}/>
                    </Card.Body>
                </Card>
                </Col>
            </Container>
    )
}

export default ItemDetail;