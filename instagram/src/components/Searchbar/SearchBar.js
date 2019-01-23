import React from 'react';

import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='search-bar-wrapper'>
                <div className='search-bar-left'>
                    <p><i className="fab fa-instagram"></i></p>
                    <p className='instagram'>Instagram</p>
                </div>

                <div>
                    <form>
                        <input onChange={this.props.searchHandler} type='text' placeholder='Search' />
                    </form>
                </div>

                <div className='search-bar-right'>
                    <p><i className="far fa-compass"></i></p>
                    <p><i className="far fa-heart"></i></p>
                    <p><i className="far fa-user"></i></p>
                </div>
            </div>
        )
    }
}

export default SearchBar;