const express = require('express');
const app = express();
const port = 3001;

const user = require('./routes/user');

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use('/user', user);

app.use((err, req, res) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
})

app.listen(port, () => {
    console.log(`Restaurant API is listening at http://localhost:${port}`);
})