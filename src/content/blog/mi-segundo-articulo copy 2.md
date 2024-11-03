---
title: "Building a REST API with Node.js and Express"
description: "How to create RESTful API endpoints using Express in Node.js."
pubDate: 'Oct 14 2024'
heroImage: "../img/girl1.jpg"
---

![javascript image](/img/monachina2.jpg)

### Introduction

Building a REST API with `Node.js ` and `Express ` is a great way to create scalable and maintainable web services. In this guide, we'll walk you through the process of setting up a basic REST API, implementing `CRUD (Create, Read, Update, Delete) ` operations, and adding some essential features.

### Prerequisites

Before we dive in, make sure you have the following installed:
#### - `Node.js ` (v14 or later)
#### - `MongoDB ` (or MongoDB Atlas for cloud-based database)
#### - A code editor (like Visual Studio Code)

### Step 1: Setting Up Your Project

`Create a New Project Directory: ` Open your terminal and create a new directory for your project:

```javascript
mkdir my-rest-api
cd my-rest-api
```
`Initialize Node.js: ` Inside your project directory, initialize a new Node.js project:

```javascript
npm init -y
```
### Step 2: Setting Up the Backend

`Install Express.js: ` Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications:

```javascript
npm install express
```

`Create a Server File: ` Create a new file called `server.js ` and add the following code:

```javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the REST API!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

`Run the Server: ` Start your server by running:
```javascript
node server.js
```

### Step 3: Setting Up the Database

`Install Mongoose: ` Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment:

```javascript
npm install mongoose
```

`Connect to MongoDB: ` Create a new file called database.js and add the following code to connect to your MongoDB database:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-mern-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});
```

### Step 4: Implementing CRUD Operations

`Create a Model: ` Create a new file called `user.model.js ` and define a Mongoose schema and model for users:

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```
`Create API Endpoints: ` Update your `server.js ` file to include CRUD operations for users:

```javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const User = require('./user.model');

app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

app.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
});

app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

app.put('/users/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedUser) {
    return res.status(404).send('User not found');
  }
  res.json(updatedUser);
});

app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send('User deleted');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

## Conclusion

Congratulations! You've built a basic REST API with `Node.js ` and `Express`. You now have a backend server running on `Node.js`, connected to a `MongoDB ` database, and a set of `CRUD ` operations for managing users. This setup provides a solid foundation for building more complex applications. 🚀✨