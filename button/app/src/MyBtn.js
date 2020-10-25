import React, { Component } from 'react';

export default class MyBtn extends Component {

    state = {
        btnText: `${this.props.additionalText}`
    }

    render() {

        return (
            <>
                <button
                    onClick={() => {
                        this.props.btnClick(this.state.btnText)
                    }}
                >{this.props.additionalText}</button>
            </>
        )
    }
}