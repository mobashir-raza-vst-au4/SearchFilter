import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import Footer from './Footer';
import Card from './Card'

let getData = (store) => {
    // console.log(store.setData.data)
    return {
        data: store.setData.data,
        id: store.setId.id,
        input: store.setInput.input
    }
}

let getFunction = (dispatch) => {
    return {
        setData: dispatch
    }
}

export default connect(getData, getFunction)(class Body extends Component {
    componentDidMount = async () => {
        // console.log("did mo")
        try {
            const response = await axios.get(`https://reqres.in/api/users?page=${this.props.id}`)
            // console.log(response);
            // console.log(response.data.data)
            let action = {
                type: "set_data",
                payload: response.data.data
            }
            this.props.setData(action)
        } catch (error) {
            console.log(error)
        }  
        
    }


    componentDidUpdate = async(prevProps, prevState) => {
        // console.log("cDU", prevProps, this.props.id);
        // console.log("prev state",prevState)
            if(this.props.id === prevProps.id){
                return false;  

            }else{
                try {
                    await axios.get(`https://reqres.in/api/users?page=${this.props.id}`)
                    .then(response => {
                        // console.log(response.data.data)
                        let action = {
                            type: "set_data",
                            payload: response.data.data
                        }
                        this.props.setData(action);
                        
                    })
                }catch (error) {
                    console.log(error)
                }
            }
    }
    
     render() {
        // console.log(this.props)
        return (
            <div className="container pt-5">
                <div className="row justify-content-center">
                {this.props.data && this.props.data.filter(data => {
                    if(this.props.input === null){
                        return data;
                    }else if(`${data.first_name.toLowerCase()} ${data.last_name.toLowerCase()}`.includes(this.props.input.toLowerCase()) || data.last_name.toLowerCase().includes(this.props.input.toLowerCase())){
                        return data;
                    }
                })
                .map((data) => {
                    return(
                        <Card src={data.avatar} firstName={data.first_name} lastName={data.last_name} email={data.email}/>
                    )
                })}
                </div>
                
                <Footer/>
            </div>
        )
    }
})
