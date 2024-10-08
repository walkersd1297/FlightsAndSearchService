const {City} = require('../models/index');

class CityRepository {
    async createCity({name}){
        try{
            await City.create({name});
        } catch(error){
            throw (error);
        }
    }

    async deleteCity(id){
        try{
            await City.destroy(
                {where: 
                    {
                        id:id
                    }
                });
        } catch(error){
            throw (error);
        }
    }
}


module.exports = CityRepository;