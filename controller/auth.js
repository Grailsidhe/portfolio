require('dotenv').config();
const Admin = require('../models/Admin');
const ErrorResponse = require('../Utils/ErrorResponse');

exports.register = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const admin = await Admin.create({
            email, password
        })
        res.status(201).json({
            success: true,
            admin,
        })
        sendToken(admin, 201, res);
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body

    if(!email || !password){
        return next(new ErrorResponse('Please provide an email and password', 400))
    }
    try {
        const admin = await Admin.findOne({email}).select('+password')
        if(!admin){
            return next(new ErrorResponse('Invalid credentials', 401))
        }
        const isMatch =  await admin.matchPasswords(password)
        if(!isMatch){
            return next(new ErrorResponse('Invalid credentials', 401))
        }
    // sendRole(admin, 200, res)
        sendToken(admin, 200, res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
};

exports.deleteUsers = async (req, res, next ) =>{
    try {
         await Admin.findByIdAndRemove({_id: req.params.id});
        res.status(201).json({
            success: true,
            data:'User deleted with success'
        })
    } catch (error) {
        next(error)
    }
};

exports.users =  (req, res) =>{
    const {email} = req.body;
    Admin.find({})
    .then((result)=>{
        res.status(200).send(result)
    })
    .catch((error)=>{
        res.status(500).send('Something went wrong')
    })
};

const sendToken = (user, statusCode, res) =>{
    const token =  user.getSignedToken();

    res.status(statusCode).json({success: true, token})
};