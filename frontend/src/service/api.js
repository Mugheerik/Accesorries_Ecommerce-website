import axios from "axios";

const url = "http://localhost:5000";

export const addsignupuser = async (data) => {
   return await axios.post(`${url}/signup`,data);
}
export const signin = async (data) => {
   return await axios.get(`${url}/signin`,data);
}