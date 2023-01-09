import axios from "axios";

const url = "http://localhost:5000";

export const addsignupuser = async (data) => {
   return await axios.post(`${url}/signup`,data);
}
export const viewsignupuser = async (data) => {
   return await axios.get(`${url}/users`,data);
}


export const signin = async (data) => {
   return await axios.get(`${url}/signin`,data);
}

export const addproduct =async (data) => {
   return await axios.post(`${url}/addproducts/addproduct`,data);
}
export const viewproduct =async (data) => {
   return await axios.get(`${url}/viewproducts/getproduct`,data);
}
export const deletedproduct =async (data) => {
   return await axios.delete(`${url}/deleteproducts/deleteproduct`,data);
}
export const updatedproduct =async (data) => {
   return await axios.put(`${url}/updateproducts/updateproduct`,data);
}