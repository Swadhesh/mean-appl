const mongoose=require('mongoose');

const TaskSchema=mongoose.Schema({
    task_name:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean
    }
    

})

const Task=module.exports=mongoose.model('Task', TaskSchema);
