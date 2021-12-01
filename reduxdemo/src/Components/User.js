import React,{useState,useEffect} from "react";
import axios from "axios";
import { fetchUsers } from "../redux/userAction";
import {connect} from 'react-redux'

function User({userData,fetchUsers}){
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState('')
    // const [users, setUsers] =useState([])

    useEffect(()=>
    {
    //    try{
    //     let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    //     let data = res.data
    //     setUsers(data)
    //     setLoading(false)
    //    }
    //    catch(err)
    //    {
    //        setError(err.message)
    //        setLoading(false)
    //    }
       fetchUsers();
    },[])
    return(
        <div>
            {
                userData.loading?<h1>Loading....</h1>:userData.error!=''?<h1>{userData.error}</h1>:
                <ul>
                    {
                        userData.users.lenght>0 && userData.users.map((user)=>
                        <li>{user.name}</li>
                        )
                    }
                </ul>
            }
        </div>
    )
}

const mapStateToProp = (state)=>{
    return{
        userData : state.user
    }
}

const mapDispatchToProp =(dispatch)=>{
    return{
        fetchUsers: ()=>dispatch(fetchUsers())
    }
}

export default connect (mapStateToProp,mapDispatchToProp)(User)