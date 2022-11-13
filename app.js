const express=require("express");
// require('dotenv')
// require("./db/con")
const router=require("./routes/route")
const app=express()

const port=process.env.PORT ||3000;

app.use(express.json());
app.use("/",router)
app.get('/', (req, res) => {
    res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 1.1</p>');
  })
  
  app.get('/products', (req, res) => {
    res.send([
      {
        productId: '101',
        price: 100
      },
      {
        productId: '102',
        price: 150
      }
    ])
  })


app.listen(port,()=>{
    console.log(`connection is live at port no.${port}`)
})