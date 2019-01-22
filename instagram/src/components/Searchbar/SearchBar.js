import React from 'react';

import './SearchBar.css'

class SearchBar extends React.Component {

    render() {
        return (
            <div className='search-bar-wrapper'>
                <div className='search-bar-left'>
                    <p><i className="fab fa-instagram"></i></p>
                    <p className='instagram'>Instagram</p>
                </div>

                <div>
                    <form>
                        <input type='text' placeholder='Search' />
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