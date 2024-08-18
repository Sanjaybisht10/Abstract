const express = require('express');
const router = express.Router();

const {createCard,getAllCard, deleteCard,findCardDetails} = require('../controller/cardController')

router.post('/createCard',createCard)
router.get('/getAllCard',getAllCard)
router.post('/deleteCards',deleteCard)
router.get('/findCardDetails',findCardDetails)

module.exports = router;