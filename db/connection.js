const mongoose=require('mongoose')
mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('____Mongodb Atlas Connected_____');
}).catch(()=>{
    console.log('_____Mongodb Atlas Not Connected____');
})