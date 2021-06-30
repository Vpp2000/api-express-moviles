
const pool = require("../database");

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({"hello" : "world"});
});

router.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const dbResponse = await pool.pool.query('SELECT * FROM public.clientes WHERE id = $1', [id]);
    const user = dbResponse.rows[0];
    res.status(200).json(user)
});

module.exports = router