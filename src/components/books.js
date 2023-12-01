import BookItem from './bookItem';

function Books(props) {
    return props.myBooks.map(
        (book) => {          // No functionality other than passing data.
            return <BookItem myBook={book} key={book._id} Reload={()=>{props.ReloadData()}}></BookItem>
        }
    );
}

export default Books;