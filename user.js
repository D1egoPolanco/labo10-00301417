const mongosee = require ('mongosee');
const bcrypt = require ('bcrypt');
const {Shema} = mongosee;
const UserSchema = new Shema ({
    email: {type:String, require:true,unique:true},
    password : {type:String, require:true}
    });
    UserSchema.statics.autenthicate = function (email, password, callback)
    {
        user.findOne ({email:email})
        .exect(function(err,user){
            if (err)
            {
                return callback(err);

            }
            else if (!user)
            {
                var err = new Error ('user not found');
                err.status = 401;
                return callback (err);

            }
            bcrypt.compare(password,user,password,function(err,result){
                if (result == true)
                {
                    return callback (null, user);
                

                }else {
                    return callback (new Error ('User or password wrong'));
                }
            
            })
        })

    }

    UserSchema.pre('save',function(next){
        var user = this;
        bcrypt.hash (user.password,10,function(err,hash){
            if (err)
            {
                return next(err);

            }
            user.password= hash;
            next();

                    });
    });


    let User = mongosee.model('users',UserSchema);
    module.exports = User;
