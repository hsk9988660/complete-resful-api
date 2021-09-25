const expresss=require('express')

const app=expresss()
require('./conn')
const olympic=require('./model')
const port=process.env.port || 2000
app.get('/',(req,res)=>{
res.send("i am hashiim")

})
app.post()
app.listen(port,()=>{
console.log('connection is successful');

})