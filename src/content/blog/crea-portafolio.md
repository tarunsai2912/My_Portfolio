---
title: "Getting Started with MERN Stack: A Beginner’s Guide"
description: "Step-by-step guide on setting up a basic MERN project."
pubDate: 'Sept 26 2024'
heroImage: "../img/pingu.jpg"
---


![javascript image](/img/monachina.jpg)

The MERN stack is a popular JavaScript stack for building modern single-page web applications. It consists of four main components: `MongoDB`, `Express.js`, `React.js`, and `Node.js`. In this guide, we'll walk you through the basics of each component and how to set up a simple MERN stack application.

### Prerequisites

Before we dive in, make sure you have the following installed:
#### - `Node.js ` (v14 or later)
#### - `MongoDB ` (or MongoDB Atlas for cloud-based database)
#### - A code editor (like Visual Studio Code)
#### - Basic knowledge of JavaScript

### Step 1: Setting Up Your Project

`Create a New Project Directory: ` Open your terminal and create a new directory for your project:

```javascript
mkdir my-mern-app
cd my-mern-app
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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, MERN stack!');
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

### Step 4: Setting Up the Frontend

`Create a React Application: ` Use Create React App to set up your React project:

```javascript
npx create-react-app client
cd client
```
`Install Axios: ` Axios is a promise-based HTTP client for making requests to your backend:

```javascript
npm install axios
```

`Create a Simple React Component: ` Create a new file called App.js and add the following code:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
```

`Run the React Application: ` Start your React application by running:

```javascript
npm start
```

## Conclusion

Congratulations! You've set up a basic `mern stack application`. You now have a backend server running on `Node.js ` and `Express`, connected to a `MongoDB ` database, and a frontend built with `React`. This setup provides a solid foundation for building more complex applications. 🚀✨