import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderProduct = () => {
        let content = this.props.arrProduct.map((product, index)=>{
            return <div className="col-4 mt-2" key={index}>
                <ProductItem prd={product}/>
            </div>
        })

        return content;
    }



    render() {

        // Từ mảng tạo ra giao diện như bài tập và sử dụng thẻ <ProductItem để hiển thị thông tin sản phẩm>

        console.log(this.props.arrProduct);
        // {
        //     "id": 1,
        //     "name": "Adidas Prophere",
        //     "alias": "adidas-prophere",
        //     "price": 350,
        //     "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        //     "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        //     "quantity": 995,
        //     "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        // }


        return (
            <div>
                <h3 className="text-center">Shoes shop</h3>
                <div className="row">
                    {this.renderProduct ()}
                    
                </div>
            </div>
        )
    }
}
