const express = require('express');

const app = express();

const port = 7030;


app.get('/', (req, res) => {


    res.send('La vida no es esperar a que pase la tormenta, es aprender a bailar bajo la lluvia. Di adios al miedo, dale la bienvenida a la vida');
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
process.env.RUNKIT_ENDPOINT_URL;
