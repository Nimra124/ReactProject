import LoginModel from "../Models/LoginModel.js";


export const  ValidUser = async (req,res) =>{
   console.log(" data from query : ", req.body);
    let result = await LoginModel.findOne({
        username:req.body.username , 
        password:req.body.password
    });
    console.log(" result  :   ",result)
     res.send(result );
}