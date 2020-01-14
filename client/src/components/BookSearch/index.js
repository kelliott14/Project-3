import React from "react";
import "./style.css";

function BookSearch(props) {
    return (
        <div className="jumbotron bookSearch">
        <h3 className="display-6">Book Search</h3>
        <form>
            <div className="form-group">
                <label className="SearchTitle">Search by book title</label>
                <input className="form-control" type="text" onChange={props.handleInputChange}></input>
            </div>
            <button type="submit" 
                onClick={props.handleFormSubmit} 
                disabled={props.disabled}
                value={props.value}
                className="btn btn-secondary">Search</button>
        </form>
        </div>
    )
}

export default BookSearch;