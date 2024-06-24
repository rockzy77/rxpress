import axios from 'axios';
const { serverURL } = require("./serverDet");


axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';


const createProductDb = async(formData, token) => {
    var url = serverURL+'createProduct';
    try{
        var res = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`
              }
        });

        res = res.data;

        console.log("dlt");
        console.log(res);
        
        if(res.success){
            return {
                success: res.success,
                product: res.product
            }
        }
        else{
            return {
                success: res.success,
                error: res.error
            }
        }

    }
    catch(e){
        return {
            success: false,
            error: e
        }
    }
}


const getAllProductsDB = async(token) => {
    var url = serverURL+'getAllProducts';

    try{
        var res = await axios.get(url, {
            headers: {
                'Authorization': `${token}` // Include the token in the Authorization header
              }
        });

        res = res.data;

        return res;

    }
    catch(e){
        return {
            success: false,
            error: e
        }
    }
}

const deleteProductDB = async(pid, token)=>{
    var url = serverURL+'deleteProduct/'+pid;

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

export {createProductDb, getAllProductsDB, deleteProductDB};