import React, { Component } from 'react';
import './pagination.css';
class Pagination extends Component {
    render() {
        return (
            <div className="Pagination">
                <a href="#">Prev</a>
                <a href="App.js">1</a>
                <a href="cards1.js">2</a>
                <a href="#">Next</a>
            </div>
        );
    }
}

export default Pagination;