const express = require('express')
const app = express()
const port = 4000; // Port to listen to.

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.b7svslt.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
})

const bookModel = mongoose.model('my_books', bookSchema);

// Allow requests from other URLs.
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.put('/api/book/:id', async (req, res) => {
  console.log("Update: " + req.params.id);

  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(book);
})

app.delete('/api/book/:id', async (req, res)=> {
  // Logging it so you can see in the console.
  console.log("Delete: " + req.params.id);
 
  // Find the ID of the book and then delete the book.
  let book = await bookModel.findByIdAndDelete(req.params.id);
  res.send(book);
  
}
)

app.post('/api/book', (req, res) => {
  console.log(req.body);
  // For making mongo db stuff.
  bookModel.create({
    title: req.body.title,
    cover: req.body.cover,
    author: req.body.author
  })
    .then(() => { res.send("Book created. ") })
    .catch(() => { res.send("Book was NOT created. ") });


})

// Receive data through the body of the HTTP request.
app.post('/name', (req, res) => {
  res.send('Hello ' + req.body.fname + " " + req.body.lname);
}
)

// Receive data through the URL.
app.get('/name', (req, res) => {
  res.send('Hello ' + req.query.fname + " " + req.query.lname);
}
)

// Test
app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/index.html');
}
)

// API to use.
app.get('/api/books', async (req, res) => {
  let books = await bookModel.find({});
  res.json(books);
}
)

app.get('/api/book/:identifier', async (req, res) => {
  console.log(req.params.identifier)
  let book = await bookModel.findById(req.params.identifier);
  res.send(book);
})

// The slashes are URLs.
app.get('/', (req, res) => {
  res.send('Hello World!');
}
)

// Test
app.get('/whatever', (req, res) => {
  res.send('Good Bye!');
}
)

app.get('/datarep', (req, res) => {
  res.send('Welcome to Data Representation & Querying');
}
)

// Anything can go where :name is on the address bar on the browser.
app.get('/hello/:name', (req, res) => {
  res.send('HELLO' + req.params.name);
}
)

app.listen(
  port, () => {
    console.log(`Example app listening on port ${port}`);
  }
)