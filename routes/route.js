var router = require('express').Router()
var firebase = require('./fire')
var bodyParser = require('body-parser')
var db = firebase.firestore()
router.use(bodyParser.json())

router.get('/data', (req, res)=>{
    db.settings({timestampsInSnapshots: true})
    var allData = []
    db.collection('orders')
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

router.post('/dataOrder', (req, res)=>{
        db.settings({
            timestampsInSnapshots: true
        })
        db.collection('order').add({
            id:req.body.order_id,
            tiket_id:req.body.tiket_id,
            nama: req.body.nama,
            //response_midtrans:JSON.stringify(chargeResponse)
        })
        res.send({
            id:req.body.order_id,
            tiket_id:req.body.tiket_id,
            nama: req.body.nama,
            //response_midtrans:JSON.stringify(chargeResponse)
        })
})

module.exports = router