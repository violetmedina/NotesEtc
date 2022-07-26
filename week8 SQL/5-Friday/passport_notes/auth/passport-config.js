
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt.js');
const db = require('../models');

const init = (passport) => {

    //passport logic

    //req=> passport => protected pages => res.isAuthenticated
    //next = done

    passport.use(new localStrategy({usernameField: 'email'}, async (email, password, done)=>{
                                    // ^^ had to remap the username path because they assume you will name your fields 'username' and 'password' and ours is 'email'

        try {
            //looking up the email address, that the user just entered, in our db

            let records = await db.users.findAll({where: {email:email}})

            if(records){
                //get the db pwd and compare it to the entered pw
                let record = records[0]
                
                bcrypt.compare(password, record.password, (err, match)=>{  //the order matters! unencrypted comes first!

                    if(match){
                        console.log('password matched');
                        return done(null, record)
                    }
                    else{
                        console.log("passwords didn't match");
                        return done(null, false)
                    }
                }) 
            }
            else {
                //no user in our database
                return done(null, false)
            }

        } catch (error) {
            console.log(error);
        }
    })) 

    passport.serializeUser((user, done)=>{

        done(null, user.id) //second argument is what we want on our session

    })

    //check if user is valid
    //grab session data from user cookie
    //decode cookie with secret key
    //gt dat

    passport.deserializeUser(async (id, done)=>{

        let foundUserInDBFromSessionData = await db.users.findByPk(id);

        if(foundUserInDBFromSessionData){
            done(null, foundUserInDBFromSessionData)
        }
        else{
            done(niull, false)
        }
    })

}