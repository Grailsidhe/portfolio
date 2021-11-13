const blogpostRouter = require('express').Router();
const Blogpost = require('../models/Blogpost');

//GET Routes
blogpostRouter.get('/', (req,res)=>{
    const { title, date, postbody, picture, keywords } = req.body;
    Blogpost.find({})
    .then((result)=> res.status(200).send(result))
    .catch((err)=>res.status.apply(500).send('Something wrong'))
});

//POST Routes
blogpostRouter.post('/', (req, res) => {
    const { title, date, postbody, picture, keywords } = req.body

    console.log(title, date, postbody, picture, keywords)

    Blogpost.create({ title, date, postbody, picture, keywords })
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send("Something went wrong")
    })
    
});

//UPDATE Routes
blogpostRouter.put('/:id', (req, res) => { 
    Blogpost.findByIdAndUpdate({_id: req.params.id}, req.body) 
        .then(()=>{ Project.findOne({_id: req.params.id}) 
        .then((result)=>{ res.status(200).send(result) }) 
        .catch((err)=>{ 
            console.log(err) 
            res.status(500).send('Something went wrong') 
        }) 
    }) 
});

//REMOVE ROUTES
blogpostRouter.delete('/:id', (req, res)=>{
    Blogpost.findByIdAndRemove({_id: req.params.id})
    .then((result)=>{
        console.log(result)
        res.status(200).send("Item successfully deleted ")
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send("Something went wrong")
    })
})


module.exports = blogpostRouter;