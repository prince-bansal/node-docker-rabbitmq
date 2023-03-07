const app = require("express")();
const amqplib = require("amqplib");

const createConnection = async () => {
  try {
    const connection = await amqplib.connect("amqp://rabb:5672");
    const channel = await connection.createChannel();
    channel.assertQueue("prince");
    channel.sendToQueue("prince", Buffer.from(JSON.stringify({ pos:"dev", title: "nodeproject" })));
  } catch (error) {
    console.log(error);
  }
};

createConnection();

app.get("/", (req, res) => res.send("Hi from Producer"));

app.listen(4001, () => console.log("PRODUCER RUNNING ON 4001"));
