const { application } = require('express');
const express = require('express');
const app = express();

const names=[
    {id: 1, name:'Alice'},
    {id: 2, name:'Marry'},
    {id: 3, name:'Mohammed'},



]

let item=[
    {1: 'Eggs', price:0.20},
    {2: 'Milk', price: 1.5},
    {3:'Shampoo', price: 5},
    {4: 'Pepsi', price: 0.5},
    {5:'Apple', price:0.10},
]
app.get ('/', (req,res)=>{
    res.send ('Hello World ');
});


app.get('/orders', (req,res) => {
    const name = names
    if (!name) res.status(404).send('The course with the ')
    res.send(name);
})


//PORT
const port=process.env.PORT || 3000;
app.listen(port,()=> console.log(`listenine on port ${port}...`));
