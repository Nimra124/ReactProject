



const validation=(schema)=>{
    return (req,res,next) =>{
        try{
            const validationResult = schema.validate(req.body);
    
            if (validationResult.error) {
              console.error(validationResult.error.details);
              res.send(validationResult.error.details)
            } else {
              console.log('Data is valid!');
              next();
            }
        }catch(err){
            console.log(" ERROR : ",err)
            res.send({
                err,
                message: "Invalid data",            
            });    
        }
       
    }    
}
module.exports={validation};
