import axios from "axios";
import { added } from "../action";

const addBookingInfoDispatcher = (bookedInfo) =>{
    return async (dispatch) => {
        const response = await axios.post("https://restorajsondata.onrender.com/Restora_Tables_Booking_Info",bookedInfo);
        const BookedInfo = response.data;
        dispatch(added(BookedInfo));
    }
}

export default addBookingInfoDispatcher;