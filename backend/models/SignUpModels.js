const mongoose = require('mongoose')
//const bcrypt = require('bcrypt')

//const saltRounds = 10;

const Template = new mongoose.Schema({
    
    Name:{
        type:String,
        require: true
    },
    Language:{
        type:String,
        require: true
    },
    Description:{
        type:String,
        require: true
    },
    ImageURL:{
        type:String,
        require: true
    }
    },
        {
            collection: 'web'
        });

        
        //encrypting password
        /* Template.pre('save', function(next){
            if(this.isNew || this.isModified('password')){
                const document = this;
                
                bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
                    if(err){
                        next(err)
                    }else{
                    document.password = hashedPassword;
                    next();
                }
            })
        }
    })
    
    Template.methods.isCorrectPassword = function(password, callBack){
        bcrypt.compare(password, this.password, function(err, same){
            if(err){
                callBack(err);
            }else{
                callBack(err, same);
            }
        })
    }

    //encrypting confirmation password
    Template.pre('save', function(next){
        if(this.isNew || this.isModified('password')){
            const document = this;
            
            bcrypt.hash(document.confirmPassword, saltRounds, (err, hashedConfirmPassword) => {
                if(err){
                    next(err)
                }else{
                document.confirmPassword = hashedConfirmPassword;
                next();
            }
        })
    }
})

Template.methods.isCorrectPassword = function(confirmPassword, callBack){
    bcrypt.compare(confirmPassword, this.confirmPassword, function(err, same){
        if(err){
            callBack(err);
        }else{
            callBack(err, same);
        }
    })
} */

const Log = mongoose.model('web', Template)
module.exports = Log;