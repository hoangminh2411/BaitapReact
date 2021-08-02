import React, { Component } from 'react'
import style from './StyleComponent.module.css'
export default class StyleComponent extends Component {
    render() {

        let fontSize = 50;

        return (
            <div className="container">
                style component

                {/* <p className={style.fontBold}>hello Minh</p> */}
                {/* Nhiều hơn 2 class */}
                <p style={{
                    fontSize: `${fontSize}px`,
                    paddingTop: '10px',
                    padding: '10px'
                }}
                    className={`${style.fontBold} ${style['p-green']} `}>Hello</p>
            </div>
        )
    }
}
