const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/olympic').then(()=>{
console.log("connection is setup");

}).catch((e)=>{
console.log(e);

})
