import React, { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import "./style.css"
const Pagination = () => {

    const { page, setPage }  = useContext(MovieContext);
    return (
        <div className="btnContainer">
            <button disabled={page ==1} onClick={() => setPage(prev => prev-1)}>Previous</button>
            <button onClick={() => setPage(prev => prev+1)}>Next</button>
       
        </div>
            
    );
}
export default Pagination;