const {CityService} = require('../services/index.js');

const cityService = new CityService();

const create = async (req,res)=>{
    try {
        const city = await cityService.createCity(req.body);
        res.status(201).json({
            data:city,
            message:'city created',
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'city not created',
            success:false,
            err:error
        })
    }
}

const destroy = async (req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        res.status(200).json({
            data:response,
            message:'Successfully city deleted',
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'city not deleted',
            success:false,
            err:error
        })
    }
}

const get = async (req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        res.status(200).json({
            data:response,
            message:'Successfully fetched city ',
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'city not fetched',
            success:false,
            err:error
        })
    }
}

const update = async (req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        res.status(200).json({
            data:response,
            message:'Successfully fetched city ',
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'city not fetched',
            success:false,
            err:error
        })
    }
}

const getAll = async (req,res)=>{
    try {
        const cities = await cityService.getAllCities(req.query);
        res.status(200).json({
            data:cities,
            message:'Successfully fetched cities ',
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'cities not fetched',
            success:false,
            err:error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
}