import { useEffect, useState } from "react";
import { deleteUserDB, getAllUsersDB } from "../../js/userScripts";
import { DataGrid } from '@mui/x-data-grid';
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {

    const deleteUserFunction = async(param)=>{
        var token = localStorage.getItem("token");
        var res = await deleteUserDB(param.id, token);

        if(res.success){
            alert("User deleted successfully");
            window.location.reload();
        }
        else{
            alert("Error: "+res.error);
        }
    }   

    const columns = [
        { field: 'userid', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'role',
            headerName: 'Role',
            width: 130,
        },
        {
            field: '',
            headerName: 'Actions',
            width: 130,
            renderCell: (params)=>{
                return <div style={{
                }}>
                    <MdEdit style={{
                        padding: '0 10px',
                        fontSize: 18,
                        color: 'blue',
                        cursor: 'pointer'
                    }}/>  
                    <MdDelete onClick={()=>{
                        deleteUserFunction(params);
                    }} style={{
                        padding: '0 10px',
                        fontSize: 18,
                        color: 'red',
                        cursor: 'pointer'
                    }}/> 
                </div>
            }
        }
    ];


    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        var token = localStorage.getItem("token");
        var res = await getAllUsersDB(token);
        if (res.success) {
            var tusers = res.users;
            tusers.forEach(user=> {
                user.id = user.userid
            });
            setUsers(tusers);
        }
    }

    const nav = useNavigate();

    return <section style={{
        padding: '2%',
        height: '100vh',
        backgroundColor: '#3db88b'
    }}>
           <div className="row">
    <h1 style={{
        color: '#ffffff'
    }}>User Management</h1>
    <p onClick={()=>{
        nav("/admin/productManagement");
    }} style={{
        marginRight: 30,
        textDecoration: 'underline',
        color: 'blue',
        cursor: 'pointer'
    }}>Product Management</p>
    </div>
    <div style={{
            height: '10px'
        }}></div>

        <div className="createProductCont">
            
        </div>
    

        <div style={{ height: 400, width: '100%', marginTop: 10, backgroundColor: '#ffffff' }}>
            <DataGrid
                rows={users}
                columns={columns}
                rowSelection={false}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>

    </section>
}

export default UserManagement;

