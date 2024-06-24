import { useEffect, useState } from "react";
import { createProductDb, deleteProductDB, getAllProductsDB } from "../../js/productScripts";
import { DataGrid } from '@mui/x-data-grid';
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const CreateProduct = () => {

    const deleteProductFunction = async(param)=>{
        var token = localStorage.getItem("token");
        var res = await deleteProductDB(param.id, token);

        if(res.success){
            alert("Product deleted successfully");
            window.location.reload();
        }
        else{
            alert("Error: "+res.error);
        }
    }   

    const columns = [
        { field: 'pdid', headerName: 'ID', width: 70 },
        { field: 'pdname', headerName: 'Name', width: 130 },
        { field: 'pdprice', headerName: 'Price', width: 130 },
        { field: 'pdstock', headerName: 'Stock', width: 130 },
        { field: 'pdoffer', headerName: 'Offer', width: 130 },
        { field: '', headerName: 'Actions', width: 130, 
            renderCell: (params)=>{
                return <div style={{
                }}>
                    <MdEdit onClick={()=>{
                        setMode('edit');
                        var product = products.filter((item)=>{
                            return item.pdid === params.id
                        });
                        product = product[0];
                        setEditProduct(product[0]);
                        setPName(product.pdname);
                        setpDes(product.pddes);
                        setPPrice(product.pdprice);
                        setPStock(product.pdstock);
                        setPOffer(product.pdoffer);
                    }} style={{
                        padding: '0 10px',
                        fontSize: 18,
                        color: 'blue',
                        cursor: 'pointer'
                    }}/>  
                    <MdDelete onClick={()=>{
                        deleteProductFunction(params);
                    }} style={{
                        padding: '0 10px',
                        fontSize: 18,
                        color: 'red',
                        cursor: 'pointer'
                    }}/> 
                </div>
            }
         },
    ];

    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        var token = localStorage.getItem("token");
        var res = await getAllProductsDB(token);
        if (res.success) {
            var tp = res.products;
            tp.forEach(product=> {
                product.id = product.pdid
            });
            setProducts(tp);
        }
    }

    const createProductFunction = async() => {
        var pmap = {
            pdname: pname,
            pddes: pdes,
            pdprice: pprice,
            pdoffer: poffer,
            pdstock: pstock
        };

        const formData = new FormData();
        formData.append("pdImg1", pImage1);
        formData.append("pdImg2", pImage2);
        formData.append("pdImg3", pImage3);
        formData.append("pdImg4", pImage4);
        formData.append("pdMap", JSON.stringify(pmap));

        var token = localStorage.getItem('token');


        var res = await createProductDb(formData, token);

        if(res.success){
            alert("Product created successfully");
            getAllProducts();
        }
        else{
            alert("Error: "+res.error);
        }
    }

    const [pname, setPName] = useState('');
    const [pdes, setpDes] = useState('');
    const [pprice, setPPrice] = useState(0);
    const [poffer, setPOffer] = useState(0);
    const [pstock, setPStock] = useState(0);

    const [pImage1, setPImage1] = useState(null);
    const [pImage2, setPImage2] = useState(null);
    const [pImage3, setPImage3] = useState(null);
    const [pImage4, setPImage4] = useState(null);

    const [mode, setMode] = useState('add');

    const [editProduct, setEditProduct] = useState({});

    const nav = useNavigate();

    return <section id="productManagement">
    <div className="row">
    <h1>Product Management</h1>
    <p onClick={()=>{
        nav("/admin/userManagement");
    }} style={{
        marginRight: 30,
        textDecoration: 'underline',
        color: 'blue',
        cursor: 'pointer'
    }}>User Management</p>
    </div>
        
        <div style={{
            height: '10px'
        }}></div>

        <div className="createProductCont">
            <h1 style={{
                color:'#232323'
            }}>{mode === 'add' ? 'Add' : 'Edit'} Product</h1>
        <div className="imgcont">
        <input onChange={(e) => {
            setPImage1(e.target.files[0]);
        }} type="file" name="pdimg1" id="pdimg1" />
        <input onChange={(e) => {
            setPImage2(e.target.files[0]);
        }} type="file" name="pdimg2" id="pdimg2" />
        <input onChange={(e) => {
            setPImage3(e.target.files[0]);
        }} type="file" name="pdimg3" id="pdimg3" />
        <input onChange={(e) => {
            setPImage4(e.target.files[0]);
        }} type="file" name="pdimg4" id="pdimg4" /> <br />
        </div>


        <input value={pname} id="pdname" onChange={(e) => {
            setPName(e.target.value);
        }} type="text" placeholder="Name" /> <br />
        <textarea value={pdes} id="pddes" onChange={(e) => {
            setpDes(e.target.value);
        }} type="text" placeholder="Description" /> <br />
       <div style={{
        width: '101.7%'
       }} className="row">
       <input value={pprice} id="pdprice" onChange={(e) => {
            setPPrice(e.target.value);
        }} type="text" placeholder="Price" /> <br />
        <input value={pstock} id="pdstock" onChange={(e) => {
            setPStock(parseFloat(e.target.value));
        }} type="text" placeholder="Stock" /> <br />
        <input value={poffer} id="pdstock" onChange={(e) => {
            setPOffer(parseFloat(e.target.value));
        }} type="text" placeholder="Offer" /> <br />
       </div>

       <div className="row">
       <button className="createPdBtn" onClick={()=>{createProductFunction();}}>{mode === 'add' ? 'Create' : 'Update'} Product</button>
       {
        mode === 'edit' ? <button className="createPdBtn" onClick={()=>{
            setMode('add');
            setEditProduct({});
            setPName('');
            setpDes('');
            setPPrice('')
            setPStock('');
            setPOffer('');
        }}>Cancel</button> : ''
       }
       </div>
        </div>

        <br />
        <div style={{ height: 400, width: '100%', marginTop: 10, backgroundColor: '#ffffff' }}>
            <DataGrid
                rows={products}
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

export default CreateProduct;