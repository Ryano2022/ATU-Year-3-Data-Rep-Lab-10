import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

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
                    <Button variant='danger' onClick={(e) => {
                        axios.delete('http://localhost:4000/api/book/' + props.myBook._id)
                            .then()
                            .catch();
                    }}>Delete</Button>
                </Card>
            </center>
        </div>
    )
}

export default BookItem;