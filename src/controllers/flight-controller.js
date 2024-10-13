const {FlightService} = require('../services/index.js');
const flightService = new FlightService();

const create = async (req,res)=>{
    try {
        const flight = await flightService.createFlight(req.body);
        res.status(201).json({
            data:flight,
            message:"flight created",
            success:true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'flight not created',
            success:false,
            err:error
        });
    }
}

const get = async(req,res)=>{
    try {
        const flight = await flightService.getFlightData(req.params.id);
        res.status(200).json({
            data:flight,
            message:"flight fetched successfully",
            success:true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'flight not fetched succeessfully',
            success:false,
            err:error
        });
    }  
}

const getAll = async (req,res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        res.status(200).json({
            data:response,
            message:"flights fetched successfully",
            success:true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'flights not fetched successfully',
            success:false,
            err:error
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
}