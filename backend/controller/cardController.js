const Card = require('../models/Card');
const mongoose = require('mongoose')

//Create a card
exports.createCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        const titlefetch = title.toLowerCase()
        const descriptionfetch  = description.toLowerCase();
        
        if (!titlefetch || !descriptionfetch) {
            return res.status(400).json({
                success: false,
                message: 'Title and description are required'
            });
        }

        const newCard = await Card.create({ title : titlefetch, description: descriptionfetch });
        res.status(200).json({
            success: true,
            data: newCard,
            message: 'Card saved successfully'
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Get all card deatils
exports.getAllCard = async(req,res)=>{
    try {
        const cardAllData = await Card.find({});
        res.status(200).json({
            success:true,
            data:cardAllData,
            message : 'All card details fetch successfully',
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            error: response,
            message: 'internal error'
        });
    }
}

//delete cards
exports.deleteCard = async(req,res)=>{
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'CardId is not valid'
            });
        }

        const cardId = new mongoose.Types.ObjectId(id);
        const cardDeleted = await Card.findByIdAndDelete(cardId);

        if (!cardDeleted) {
            return res.status(404).json({
                success: false,
                message: 'Card not found'
            });
        }

        res.status(200).json({
            success: true,
            data: cardDeleted,
            message: 'Card deleted successfully'
        });

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success:false,
            data: error,
            message: 'internal error'
        });
    }
}

//fetch card details
exports.findCardDetails = async(req,res)=>{
    try {
        const {searchQuery} = req.query
        console.log('serach query : ',searchQuery)
        const cardDetails = await Card.find({
            title: { $regex: searchQuery, $options: 'i' } 
        })
        if(cardDetails.length<=0){
            res.status(200).json({
                success:true,
                data:cardDetails,
                message:'No card found'
            })
        }else{
            res.status(200).json({
                success:true,
                data:cardDetails,
                message:'Card details fecthed successfully'
            })
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success:false,
            error: error,
            message: 'internal error'
        });
    }
}