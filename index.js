const express=require('express');
const cors=require('cors')
const app=express();
const port=process.env.PORT || 5000

app.use(cors());


const chef=require('./data/chef.json')

app.get('/',(req,res)=>{
    res.send('Hi Suvrodeb')
})

app.get('/chef',(req,res)=>{
    res.send(chef)
})

app.get('/chef/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);

    const targetChef=chef.find(c=>c.id==id)
    res.send(targetChef)
})

app.listen(port,()=>{
    console.log(`Chef Recipe hunting API running on pot ${port}`);
})