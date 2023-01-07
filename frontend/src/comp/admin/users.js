import { useEffect, useState } from "react";
import { viewsignupuser } from "../../service/api";

const Viewusers = () => {

const [usersinfo,setUsersinfo] = useState([]);

useEffect(()=>{
    getusersinfo();
},[]);

const getusersinfo = async ()=>{
   const userdata= await viewsignupuser();
   setUsersinfo(userdata.data);
}

    return ( 
<div className="container">
    <table >
        <thead>
            <tr>
                <th scope="col" >USERNAME</th>
                <th scope="col" >EMAIL</th>
                <th scope="col" >PASSWORD</th>
            </tr>
        </thead>
        <tbody>
            {
                usersinfo.map((users)=>{
                    return(
                        <tr>
                            <td>{users.Name}</td>
                            <td>{users.Password}</td>
                            <td>{users.Email}</td>
                        </tr>

                    )
                })
            }
        </tbody>
    </table>
</div>


     );
}
 
export default Viewusers;