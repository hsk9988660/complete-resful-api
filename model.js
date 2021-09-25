const mongoose=require('mongoose')

const createdocument=new mongoose.Schema({
event:{
type:String,
default:"100m"

},
ranking:{
type:Number,
required:true,
unique:true,
min:2

},
name:{
    type:String,
    required:true,
    unique:true,
    min:20



},
dob:{
type:Date,
required:true,
trim:true

},
country:{
    type:String,
    required:true,
    unique:true,
    min:20


},
score:{
    type:Number,
    required:true,
    unique:true,
    min:20


},





})
const  Olympic=new mongoose.model('Menranking',createdocument)
module.exports=Olympic