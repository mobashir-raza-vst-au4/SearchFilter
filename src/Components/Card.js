import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div style={{width: "18rem"}} className="pt-5">
                <div className="card">
                    <img src={this.props.src} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.firstName} {this.props.lastName}</h5>
                        <p className="card-text">{this.props.email}</p>     
                    </div>
                </div>
            </div>
        )
    }
}
