import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
//create Hotel
export const createHotel = async( req,res) => {
    const newHotel = new Hotel(req.body);
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    }catch(err){
        res.send(err)
    }
}

//update Hotel
export const updateHotel = async( req,res, next) => {
    try{
        const updatedHotel  = await  Hotel.findByIdAndUpdate(req.params.id,  { $set: req.body },
            { new: true });
         res.status(200).json(updatedHotel);

    }catch(err){
        // res.status(500).send("something went wrong")
        next(err);
    }
    
}


// get Hotel
export const getHotel = async( req,res,next) => {

    try{
        const hotel = await Hotel.findById(req.params.id)
        //console.log(hotel)
        res.status(200).json(hotel)


    }catch(err){
        // res.status(500).send("something went wrong1");
        next(err);
    }
    
}

// delete Hotel
export const deleteHotel = async( req,res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted.");
      } catch (err) {
          res.status(500).send("something went wrong");
      }
    
}

//get all hotels
export const getAllHotel = async( req,res) => {
  const{min , max , ...others} = req.query;
    try{
        const hotels = await Hotel.find({...others,cheapestPrice: { $gt: min || 1, $lt: max || 999 },});
        res.status(200).json(hotels)
    }catch(err){
        res.status(500).send("something went wrong2");
    }

  //   try{
  //     const hotels = await Hotel.find(req.query).limit(req.query.limit);
  //     console.log(hotels)
  //     res.status(200).json(hotels)
  // }catch(err){
  //     res.status(500).send("something went wrong2");
  // }
    
}

//countbycity
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(","); 
    //console.log(cities)
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
          
        })
      );
      //console.log(list);
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };

  export const countByType = async (req, res, next) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
  };  

  export const getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };