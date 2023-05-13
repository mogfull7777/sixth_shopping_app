import React, {useEffect, useState} from 'react';
import axios from "axios";

const Profile = () => {

    const [userInfo, setUserInfo] = useState({});

    const getUserInfo = async () => {

        try {

            const token = await localStorage.getItem("token");

            const config = {
                headers : {
                    authorization : "Bearer " + token.toString()
                }
            }

            const {data, status} = await axios.get('http://localhost:9090/api/users/profile', config)

            if (status === 200) {
                console.log(data)
                setUserInfo(data)
            }

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getUserInfo()
    }, [])


    return (
        <div>
            <h1>Profile</h1>
            <h2>{userInfo.email}</h2>
            <h3>{userInfo.name}</h3>
            <h4>{userInfo._id}</h4>
        </div>
    );
};

export default Profile;