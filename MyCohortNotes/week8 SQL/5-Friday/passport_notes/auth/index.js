//gate keeper
const authReq = (req, res, next) => {
    
    let auth = req.isAuthenticated()// set by passport to either true or false 

    if(auth){
        next()
    }
    else{
        res.redirect('/long')
    }
}

module.exports = authReq;