import { useState } from "react";
import { lightTheme } from "../../components/Colors";


const PaginationBar = (props) => {

    const [currentPage, setCurrentPage] = useState(0);

    return <div className="paginationBar">
        <div style={{
                    backgroundColor: lightTheme.secondaryColor,
                    padding: '0 20px'
                }} className="paginationTile">Prev</div>
        {
            Array.from({
                length: props.noOfTile
            }, ()=> Math.floor(Math.random() * props.noOfTile)).map((item, index) => {
                return <div onClick={()=>{
                    setCurrentPage(index)
                }} className={`paginationTile ${index === currentPage ? 'active' : ''}`}>{index + 1}</div>
            })
        }
        <div style={{
                    backgroundColor: lightTheme.secondaryColor,
                    padding: '0 20px'
                }} className="paginationTile">Next</div>
       
    </div>
}

export default PaginationBar;