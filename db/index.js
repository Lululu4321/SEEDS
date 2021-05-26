const mongoose = require('mongoose')

const uri = "mongodb+srv://admin:1234qwer@cluster0.ppr09.mongodb.net/test";

mongoose.connect(uri, {
    authSource: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true
})