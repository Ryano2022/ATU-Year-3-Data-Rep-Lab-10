import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read(){
    const [data, setData] = useState([]); // Set to an empty array.
    useEffect(
        () => {
            axios.get('http://localhost:4000/api/books') // API URL
            .then(
                (response) => {
                    setData(response.data); // Update value.
                }
            )
            .catch(
                (error) => {
                    console.log(error); // Log the error.
                }
            );
        }, 
        []
    )

    return(
        <div>
            <h3>Hello from read.js component.</h3>
            <Books myBooks={data}></Books> 
        </div>
    );
}

export default Read;