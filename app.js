const express = require('express')
const app = express()
const cors = require('cors')
const { Types: {ObjectId} }  = require('mongoose')
const history = require('connect-history-api-fallback')

require('./db/index.js')

const Article = require('./db/model/article')
const { mongo } = require('mongoose')

// set cross-domain 
app.use(cors({
    origin: '*',
    methods: '*'
}))
app.get('/del', async (req, res) => {
    const {id} = req.query;
    const r = await Article.remove({_id: ObjectId(id)})
    res.json({
        code: 1
    })
})
app.get('/search', async (req, res) => {
    const query = req.query;
    let resp = [];
    let keyList = Object.keys(query)
    if (keyList.length === 0) { // no query condition
        resp = await Article.find()
        return res.json(resp)
    }
    let arr = []
    keyList.forEach(item => {
        const reg = new RegExp(query[item])
        arr.push({ [item]: { $regex: reg, $options: 'm' } })
    })
    const resAr = await Article.find({
        $and: arr
    })
    res.json(resAr)
})

app.get('/add', async (req, res) => {
    const { author, title, journal, year, volume, number, pages, month } = req.query;
    const article = new Article({
        author, title, journal, year, volume, number, pages, month
    })
    await article.save();
    res.json({
        code: 1
    })
})
app.get('/test', (req, res) => {
    res.json({code: 200, msg: 'a test'})
})

app.use(history());
app.use(express.static('view/build'));

app.listen(process.env.PORT || 5000);
