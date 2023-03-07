const app= require('express')()
const amqplib = require("amqplib");

const createConnection = async () => {
  try {
    const connection = await amqplib.connect("amqp://rabb:5672");
    const channel = await connection.createChannel();
    channel.assertQueue("prince");

    channel.consume("prince", data=>{
        console.log(data.content.toString())
        channel.ack(data)
    })
  } catch (error) {
    console.log(error);
  }
};

createConnection();

app.get("/", (req,res)=> res.send('Hi from Consumer'))

app.listen(4002,()=> console.log('CONSUMER RUNNING ON 4002'))