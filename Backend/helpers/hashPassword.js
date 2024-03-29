const bcrypt = require ('bcrypt');

// hashing a password
 const hashPassword = async(password) =>{
    try {
        const saltRounds = 10;
        let hashedPassword = await bcrypt.hash(password,saltRounds);
        return  hashedPassword;        
    } catch (error) {
        console.log(error)
    }
}

const comparePassword = async(password, hashedPassword) =>{
    return await bcrypt.compare(password, hashedPassword)
}


module.exports={hashPassword,comparePassword};