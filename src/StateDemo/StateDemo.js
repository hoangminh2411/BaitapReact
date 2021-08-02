import React, { Component } from 'react'

export default class StateDemo extends Component {



    /*
        Thuộc tính state
        +Là thuộc tính có sẵn của react class component, dùng để chứa giá trị thay đổi trên giao diện khi người dùng thao tác keyup, keydown, blur

        B1:xác định state là gì
        B2: xác định kiểu dự liệu thuộc tính của nó

    */
    state = {
        isLogin: false,
        fSize:15,
        imgSrc: './img/CarBasic/products/red-car.jpg'
    }

    //isLogin = false;

    username = 'Minh';

    renderLogin = () => {
        if (this.state.isLogin) {
            return <span className="font-weight-bold text-white">Hello {this.username}</span>

        }

        return <button className="btn btn-outline-success" onClick={() => {
            this.handleLogin();
        }}>Đăng Nhập</button>
    }



    handleLogin = async () => {
        // this.state.isLogin = true;
        // console.log(this.state.isLogin);

        /*
            this.setState(newState):
                +Phương thức này do react class component cung cấp. Dùng để thay đổi giá trị state
                +setState được gọi thì giao diện sẽ được render lại (hàm render sẽ chạy lại)
        */

        // let newState = {
        //     isLogin: true
        // }
        // Thay đổi giá trị state và render lại giao diện 
        await this.setState({
            isLogin: true
        });


        console.log(this.state.isLogin)

    }

    handleChangeColor = (color) =>{
        this.setState({
            imgSrc:`./img/CarBasic/products/${color}-car.jpg`
        })
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            {/* {this.isLogin ? <span className="font-weight-bold  text-white">Hello {this.username} </span> : <button className="btn btn-outline-success">Đăng Nhập</button>} */}

                            {this.renderLogin()}

                        </div   >
                    </div>
                </nav>

                <div className="container">
                    <h3>Bài tập tăng giảm font chữ</h3>
                    <p style={{fontSize:`${this.state.fSize}px`}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati praesentium totam labore quo. Dicta reiciendis, tempore, ex cupiditate nesciunt ut vero sint dolor natus laudantium quisquam assumenda accusamus tempora error!
                    </p>
                    <button className="btn btn-outline-danger mr-2" onClick={()=>{
                        this.setState({
                            fSize: this.state.fSize+2
                        })
                    }}>
                        +
                    </button>
                    <button className="btn btn-outline-danger mr-2" onClick={()=>{
                        this.setState({
                            fSize: this.state.fSize-2
                        })
                    }}>
                        -
                    </button>
                </div>
                
                <div className="container">
                    <h3>Bài tập chọn xe</h3>

                    <div className="row">
                        <div className="col-6">
                            <img src ={this.state.imgSrc} alt='...' className="w-100"/>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-3">
                                    <button style={{background:'red'}} className="btn text-white" onClick={()=>{
                                        this.handleChangeColor('red')
                                    }}>Red</button>
                                </div>

                                <div className="col-3">
                                    <button style={{background:'Silver'}} className="btn text-white" onClick={()=>{
                                        this.handleChangeColor('Silver')
                                    }}>Silver</button>
                                </div>

                                <div className="col-3">
                                    <button style={{background:'black'}} className="btn text-white " onClick={()=>{
                                        this.handleChangeColor('black')
                                    }}>Black</button>
                                </div>

                                <div className="col-3">
                                    <button style={{background:'gray'}} className="btn text-white" onClick={()=>{
                                        this.handleChangeColor('steel')
                                    }}>Steel</button>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
                

            </div>
        )
    }
}



