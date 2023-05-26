import express from "express";
const router = express.Router();
import { createHotel, updateHotel, deleteHotel, getHotel, getAllHotel , countByCity, countByType, getHotelRooms} from "../controllers/Hotel.js";

// router.get('/', (req,res)=>{
//     res.send("i")
// })

router.post('/', createHotel);

router.put("/:id", updateHotel);

router.delete("/:id",deleteHotel);

router.get("/find/:id", getHotel);

router.get("/", getAllHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

//module.exports = router;
export default router;
