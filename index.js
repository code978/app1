const express = require('express');
const app = express();
const connectDB = require('./config/database');
const port = process.env.PORT || 5000;
const time1 = require('./models/time1');
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

connectDB();
app.get('/', async (req, res) => {
    const time = await time1.find();
    console.log(time);
    res.render('index',{time:time});
})

app.get('/gettime', async (req, res) => {
    const time = new time1({ response: new Date() })
    await time.save();
    res.redirect('/');
})

app.listen(port, () => console.log("server started at: 5000"));