  
const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({

    title: {
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    comments:[String]

})


module.exports=mongoose.model('Posts',PostSchema)