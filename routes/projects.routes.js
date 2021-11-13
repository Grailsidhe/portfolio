const projectRouter = require('express').Router();
const Project = require('../models/Project');

//GET Routes
projectRouter.get('/', (req,res)=>{
    const { name, date, description, techs, picture, url } = req.body;
    Project.find({})
    .then((result)=> res.status(200).send(result))
    .catch((err)=>res.status.apply(500).send('Something wrong'))
});

//POST Routes
projectRouter.post('/', (req, res) => {
    const { name, date, description, techs, picture, url } = req.body

    console.log(name, date, description, techs, picture, url)

    Project.create({ name, date, description, techs, picture, url })
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send("Something went wrong")
    })
    
});

//UPDATE Routes
projectRouter.put('/:id', (req, res) => { 
    Project.findByIdAndUpdate({_id: req.params.id}, req.body) 
        .then(()=>{ Project.findOne({_id: req.params.id}) 
        .then((result)=>{ res.status(200).send(result) }) 
        .catch((err)=>{ 
            console.log(err) 
            res.status(500).send('Something went wrong') 
        }) 
    }) 
});

//REMOVE ROUTES
projectRouter.delete('/:id', (req, res)=>{
    Project.findByIdAndRemove({_id: req.params.id})
    .then((result)=>{
        console.log(result)
        res.status(200).send("Item successfully deleted ")
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send("Something went wrong")
    })
})


module.exports = projectRouter;