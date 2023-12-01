import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BookItem(props) {
    return (
        <div>
            <center>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.myBook.cover} />
                    <Card.Body>
                        <Card.Title>{props.myBook.title}</Card.Title>
                        <Card.Text>
                            {props.myBook.author}
                        </Card.Text>
                    </Card.Body>
                    <Link to={'/edit/' + props.myBook._id} className='btn btn-primary'>Edit</Link>
                </Card>
            </center>
        </div>
    )
}

export default BookItem;