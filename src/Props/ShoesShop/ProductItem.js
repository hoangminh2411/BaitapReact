import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {prd} = this.props;
        return (

            





            <div className="card">
                    <img src={prd.image} alt="..." />

                    <div className="Card-body">
                        <h4 style={{height:'55'}}>{prd.name}</h4>
                        <span>{prd.price}}</span>
                        <br/>
                        <button className="p-2 mt-2" style={{backgroundColor:'#000',border:'none',color:'#fff'}}> add to card</button>

                    </div>
            </div>
        )
    }
}
