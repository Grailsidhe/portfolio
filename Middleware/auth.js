const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const ErrorResponse = require('../Utils/ErrorResponse');

exports.protect = async (req, res, next) => {
    let token;

    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
        ){
        token = req.headers.authorization.split(' ')[1]
    };

    if(!token){
        return next(new ErrorResponse('No access', 401))
    };

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await Admin.findById(decoded.id)

        if(!admin){
            return next(new ErrorResponse('No user found.', 400))
        }

    req.admin = admin 

    next()
    } catch (error) {
        return next(new ErrorResponse('Not access.', 401))
    };
};