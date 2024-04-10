const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL Connection
const connection = mysql.createConnection({
    host: 'mariadb',
    user: 'root',
    password: 'password',
    database: 'todo_db'
});


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});

// Set up EJS as view engine
app.set('view engine', 'ejs');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    connection.query('SELECT * FROM todos', (error, results) => {
        if (error) throw error;
        res.render('index', { todos: results });
    });
});

app.post('/add', (req, res) => {
    const task = req.body.task;
    connection.query('INSERT INTO todos (task) VALUES (?)', [task], (error, results) => {
        if (error) throw error;
        res.redirect('/');
    });
});

app.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM todos WHERE id = ?', [id], (error, results) => {
        if (error) throw error;
        res.redirect('/');
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
