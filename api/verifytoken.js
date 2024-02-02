const jwt = require('jsonwebtoken')


function verify(req,res,next){
    const authheader = req.headers.token;
    if(authheader){
        const token = authheader.split(" ")[1];
        jwt.verify(token , process.env.SECRET_KEY , (err,user)=>{
            if(err){
                return res.status(403).json('token is invalid');
            }
            req.user = user; 
            next();
        })
    }else{
        return res.status(401).json('your are not authenticated');
    }
}


module.exports = verify;