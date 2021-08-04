import React, { Component } from 'react'

export default class Footer extends Component {

    render() {
        /*this.props: là 1 thuộc tính có ặn của react class component dùng để nhận giá trị từ component cha truyền vào (component sử dụng thẻ này)

        */
        console.log('this.props', this.props);

        return (
            <footer style={{backgroundColor:this.props.bgColor}} className="text-white text-center">
                {this.props.content}
            </footer>
        )
    }
}