const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controller/register');
const signin = require('./controller/signin');
const profile = require('./controller/profile');
const image = require('./controller/image');

const app = express();

app.use(bodyParser.json());
app.use(cors());

//Database
const db = knex({
     client: 'pg',
     connection: {
          host: '127.0.0.1',
          // port: 3306,
          user: 'postgres',
          password: '18153260',
          database: 'smart-brain'
     },
     useNullAsDefault: true
});

// db.select('*').from('users').then(data => console.log(data));

app.get("/", (req, res) => {
     res.json(database);
})

// adv javascript fun type where fun return a fun
app.post("/signin", signin.handleSignin(db, bcrypt))

// this is called dependency ingection when we pass dependencies that we need in another file rather than import them
app.post("/register", (req, res) => { register.handleRegister(req, res, db, bcrypt) });

// get user profile information
app.get("/profile/:id", (req, res) => { profile.handleProfile(req, res, db, bcrypt) })

// update user entries when user submitted images
app.put("/image", (req, res) => { image.handleImage(req, res, db, bcrypt) })

app.listen(3000, () => console.log("App is running on PORT: 3000!"));