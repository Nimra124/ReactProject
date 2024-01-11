const JWT= require ('jsonwebtoken');


 const requireSignIn = async(req,res,next)=>{
    try {
        const decode = JWT.verify(req.headers.authorization,process.env.JWT_KEY)
        req.user = decode;
        console.log(req.user)
        next();

    } catch (error) {
        console.log(error)
        res.status(401).send({
            error,
            message: "Unauthorized",            
        }            
        )
    }

}
module.exports={requireSignIn};

