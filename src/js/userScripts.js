import axios from 'axios';
const { serverURL } = require("./serverDet");

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const getAllUsersDB = async (token) => {
    var url = serverURL + '/getAllUsers';

    try {
        var res = await axios.get(url, {
            headers: {
                'Authorization': `${token}` // Include the token in the Authorization header
              }
        });

        res = res.data;

        return res;
    }

    catch (e) {
        return {
            success: false,
            error: e
        }
    }
}

const registerUserDB = async (umap) => {
    var url = serverURL + "auth";

    try {
        var res = await axios.post(url, umap, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });


        return res.data;


    }
    catch (e) {
        return {
            success: false,
            error: e
        }
    }
};


const loginUserDB = async (umapp) => {
    var url = serverURL + 'auth';

    try {
        var res = await axios.post(url, umapp, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*', 
            }
        });
        res = res.data;

        if (res.success) {
            localStorage.setItem('token', res.token);
            return res;
        }

        else {
            return {
                success: false,
                error: res.error
            }
        }
    }

    catch (e) {
        return {
            success: false,
            error: e
        };
    }
}


const getAuthInfoDB = async (token) => {
    var url = serverURL + 'getAuthInfo';
  

    try {
        var res = await axios.get(url, {
            headers: {
                'Authorization': `${token}` // Include the token in the Authorization header
              }
        });

        return res.data;

    } catch (e) {
        return {
            success: false,
            error: 'Something went wrong. Try again later'
        }
    }
}


const deleteUserDB = async(uid, token)=>{
    var url = serverURL+'deleteUser/'+uid;

    try{
        var res = await axios.delete(url, {
            headers: {
                'Authorization': `${token}` // Include the token in the Authorization header
              }
        });

    res=  res.data;
       return res;
    }
    catch(e){
        return {
            success: false,
            error: e
        }
    }
}

export { getAllUsersDB, registerUserDB, loginUserDB, getAuthInfoDB, deleteUserDB };