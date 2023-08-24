// libreries
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('olá')
    res.send();
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send();
});

// title
router.get('/:title', (req, res) => {
    console.log(req.params.title);
    res.send(`title: ${req.params.title}`);
});

router.put('/:title', (req, res) => {
    console.log(req.body);
    res.send(`PUT: title: ${req.params.title}`);
});

router.delete('/:title', (req, res) => {
    console.log(req.body);
    res.send(`Delete title: ${req.params.title}`);
})

// id
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`id: ${req.params.id}`);
});

router.put('/:id', (req, res) => {
    console.log(req.body);
    res.send(`PUT id: ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    console.log(req.body);
    res.send(`Delete id: ${req.params.id}`);
});


module.exports = router;