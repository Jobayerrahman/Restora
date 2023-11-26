import axios from "axios";
import { filterTimeTable } from "../action";

const filterTimeTableDispatcher = (time) =>{
    return async (dispatch) =>{
        const response = await axios.get("http://localhost:5000/tables");
        const tables = response.data;
        dispatch(filterTimeTable(tables,time));
    }
}


export default filterTimeTableDispatcher;