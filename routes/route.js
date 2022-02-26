var router = require('express').Router()
var firebase = require('./fire')
var bodyParser = require('body-parser')
var db = firebase.firestore()
router.use(bodyParser.json())

router.get('/data', (req, res)=>{
    db.settings({timestampsInSnapshots: true})
    var allData = []
    db.collection('products')
    .get()
    .then(snapshot => {
        snapshot.forEach((hasil)=>{
            allData.push(hasil.data())
        })
        console.log(allData)
        res.send(allData)
    }).catch((error)=>{
        console.log(error)
    })
})

router.post('/data', (req, res)=>{
    db.settings({
        timestampsInSnapshots: true
    })
    db.collection('products').add({
        nama: req.body.nama,
        usia: req.body.usia,
        kota: req.body.kota,
        waktu: new Date()
    })
    res.send({
        nama: req.body.nama,
        usia: req.body.usia,
        kota: req.body.kota,
        waktu: new Date()
    })
})

module.exports = router