const {AirportService} = require('../services/index.js');

const airportService = new AirportService();

const create = async (req,res)=>{
    try {
        const airport = await airportService.createAirport(req.body);
        res.status(201).json({
            data:airport,
            message:'airport created',
            success:true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'airport not created',
            success:false,
            err:error
        });
    }
}

const get = async (req,res)=>{
    try {
        const airport = await airportService.getAirport(req.params.id);
        res.status(200).json({
            data:airport,
            message:'airport fetched',
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'airport not fetched',
            success:false,
            err:error
        });
    }
}

const destroy = async (req,res)=>{
    try {
        const response = await airportService.deleteAirport(req.params.id);
        res.status(200).json({
            data:response,
            message:'airport deleted',
            success:true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'airport not deleted',
            success:false,
            err:error
        });
    }
}

const update = async (req,res)=>{
    try {
        const newAirport = await airportService.updateAirport(req.params.id,req.body);
        res.status(200).json({
            data:newAirport,
            message:'airport updated',
            success:true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'airport not updated',
            success:false,
            err:error
        })
    }
}

const getAll = async (req,res)=>{
    try {
        const airports = await airportService.getAllAirports(req.query);
        res.status(200).json({
            data:airports,
            message:'airports fetched',
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'airports not fetched',
            success:false,
            err:error
        });
    }
}


module.exports = {
    create,
    get,
    destroy,
    update,
    getAll
}