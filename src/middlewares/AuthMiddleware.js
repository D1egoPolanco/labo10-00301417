const mongosee = require ('mongoose');
const User = reqiere ("../models/user");
const bcrypt = require ('bcrypt');
const AuthMiddleware = {};

AuthMiddleware.isSuthentication = function (req, res, next){
    if (!req.session.user){
        return res.redirect('/');
    }else{
        bcrypt.compare(data.userId,user.id.toString(), function(err,result ){
            if (result = true ){
                return next();
            }
            else{
                return next (err);
            }
        })
    }
}