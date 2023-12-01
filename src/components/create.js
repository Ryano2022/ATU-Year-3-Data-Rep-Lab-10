import { useState } from "react";
import axios from "axios";

function Create() {
    // Adding of state variables.
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Title: " + title +
            " Cover: " + cover +
            " Author: " + author);

        const book = {
            title: title,
            cover: cover,
            author: author
        }
        // Make a post to that URL and send the book object.
        axios.post('http://localhost:4000/api/book', book)
            .then()
            .catch();

    } // Show up in the logs.

    return (
        <div style={{ width: '40%', margin: '0 auto'}}>
            <h3>Hello from create.js component.</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title} // Text in the input box.
                        onChange={
                            (e) => {
                                setTitle(e.target.value) // Update value.
                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author} // Text in the input box.
                        onChange={
                            (e) => {
                                setAuthor(e.target.value) // Update value.
                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover} // Text in the input box.
                        onChange={
                            (e) => {
                                setCover(e.target.value) // Update value.
                            }
                        }
                    />
                </div>
                <div>
                    <input type="submit" value="Add Book"></input>
                </div>
            </form>
        </div>
    );
}

export default Create;