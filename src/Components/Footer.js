import React, { Component } from 'react';
import {connect} from 'react-redux';

let getData = (store) => {
    console.log(store)
    return {
        store
    }
}

let getFunction = (dispatch) => {
    return {
        setId: dispatch
    }
}

export default connect(getData, getFunction)(class Footer extends Component {

    handleId = (id) => {
        let action = {
            type: "set_id",
            payload: id
        }
        this.props.setId(action)
    }
    
    render() {
        return (
            <div className="pt-5">
                <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li onClick={() => {this.handleId(1)}} key="1" class="page-item"><span class="page-link">1</span></li>
                    <li onClick={() => {this.handleId(2)}} key="2" class="page-item"><span class="page-link">2</span></li>
                </ul>
                </nav>
            </div>
        )
    }
})
