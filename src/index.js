const knex = require('knex');
const express = require('express');
var app = express();
app.use(express.json());
const db_host = 'mysql';
const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = process.env;

const db = knex({
    client: 'mysql',
    version: '5.7',
    useNullAsDefault: true,
    connection: {
        host: db_host,
        port: 3306,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DB
    }
})


db.schema.hasTable('users').then(function (exists) {
    if (!exists) {
        return db.schema.createTable('users', function (t) {
            t.increments('id').primary();
            t.string('first_name', 100);
            t.string('last_name', 100);
            t.text('bio');
        });
    } else {
        console.log("Table users already exists");
    }
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    db.select().from('users').then((users) => {
        res.send(users);
    });
});

app.post('/user', (req, res) => {
    console.log(req.body);
    const { first_name, last_name, bio } = req.body
    db('users').insert({
        first_name: first_name || "Jhon",
        last_name: last_name || "Doe",
        bio: bio || "No bio"
    }).then((id) => {
        console.log('Inserted id: ', id);
        res.send(id);
    });
});


app.post('/user/insert', (req, res) => {
    console.log(req.body);
    res.send({ status: 'ok' });
});

app.listen(4000, () => console.log('Server started at port : 4000'));
