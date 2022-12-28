import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div style={{
                color: "white",
                backgroundColor: "Green",
                padding: "20px",
                margin: "0px",
                textAlign: 'center'
            }}>
                <h1 style={{color:'black'}}>Nature</h1>
                <h6>A website to Show different nature pictures</h6>
            </div >
        );
    }
}

export default Header;