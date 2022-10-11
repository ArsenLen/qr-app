const QRCode = require('../models/QRCode')
const router = require('express').Router()

// получение всех qr-кодов
router.get("/qrcodes", async (req, res) => {
    try {
        const qrcodes = await QRCode.find()
        res.status(200).json(qrcodes)
    } catch (err) {
        res.json(err)
    }
})

// получение последнего qr-кода 
router.get("/qrcodes/last" , async(req, res) => {
    try {
        const qrcode = await QRCode.find().sort({ $natural: -1 }).limit(1);   
        res.status(200).json(qrcode)
    } catch (err) {
        res.json(err)
    }
})

module.exports = router