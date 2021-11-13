const contactRouter = require('express').Router();
const Contact = require('../models/Contact');

//GET Routes
contactRouter.get('/', (req,res)=>{
    const { name, email, subject, message } = req.body;
    Contact.find({})
    .then((result)=> res.status(200).send(result))
    .catch((err)=>res.status.apply(500).send('Something wrong'))
});

//POST Routes
contactRouter.post('/', (req, res) => {
    const { name, email, subject, message } = req.body

    console.log(name, email, subject, message)

    Contact.create({ name, email, subject, message })
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send("Something went wrong")
    })
    
});

//UPDATE Routes
contactRouter.put('/:id', (req, res) => { 
    Contact.findByIdAndUpdate({_id: req.params.id}, req.body) 
        .then(()=>{ Project.findOne({_id: req.params.id}) 
        .then((result)=>{ res.status(200).send(result) }) 
        .catch((err)=>{ 
            console.log(err) 
            res.status(500).send('Something went wrong') 
        }) 
    }) 
});

//REMOVE ROUTES
contactRouter.delete('/:id', (req, res)=>{
    Contact.findByIdAndRemove({_id: req.params.id})
    .then((result)=>{
        console.log(result)
        res.status(200).send("Item successfully deleted ")
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send("Something went wrong")
    })
})


module.exports = contactRouter;