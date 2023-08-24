// libraries
const express = require('express');
const checkListRouter = require('./src/routes/checklist');

const app = express();

// middlewares
app.use(express.json());
app.use('/checklist', checkListRouter);



// app.get('/', (req, res) => {
//     res.send('<h1>Minha lista de tarefas :)</h1>');
// })

// app.get('/json', (req, res) => {
//     // console.log(req.body);
//     // console.log(req.headers);
//     // console.log(req.query);
//     // console.log(req.params);
//     // console.log(req.url)
//     res.json({tarefa: 'x', done: true});
// });

// app.get('/contato', (req, res) => {
//     // console.log(req.body);
//     res.send('<h1>Aqui você informará o seu contato</h1>');
// });

app.listen(3000, () => {
    console.log('Server Ligado!');
})