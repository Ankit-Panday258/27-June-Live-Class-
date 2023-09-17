const user =require('../Models/userModel.js')

exports.home = (req ,res) =>{
    res.send('hello Ankit')
}

exports.creatUser = async(req ,res)=>{

    //extract info
    try{
        const {name , email} =req.body 
        const user = await user.create({
            name,
            email
        })
        res.status(201).json({
            success:true,
            message:"user created successfully"
        })
    }catch (eror){
        console.log(error);
        res.status(400).json({
            success:false,
            message: error.message
        })

    }
    
}