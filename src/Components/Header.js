import React, { Component } from 'react';
import {connect} from 'react-redux';

let getData = (store) => {
    // console.log(store)
    return {
        store
    }
}

let getFunction = (dispatch) => {
    return {
        setInput: dispatch
    }
}


export default connect(getData, getFunction)(class Header extends Component {
    
    handleInput = (e) => {
        // console.log(e.target.value)
        const value = e.target.value
        let action = {
            type: "set_input",
            payload: value
        }
        this.props.setInput(action)
        
    }
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark fixed-top">
                        
                        <div className="container-fluid">
                        <div className = "row ">
                        <div className = "col-md-4">
                        <h1 className="navbar-brand" >Gongo</h1>
                        </div>
                        <form className="col-lg-4 d-flex justify-content-center ">
                        <input onChange={(e) => {this.handleInput(e)}} className="form-control mx-5" type="search" placeholder="Search" aria-label="Search" />
                        </form>     
                        </div>
                        </div>
                        
                        </nav>
            </div>
        )
    }
})





