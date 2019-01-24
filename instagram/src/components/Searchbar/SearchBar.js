import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import './SearchBar.css'

const SearchBarWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1.7rem;
border-bottom: solid gray 1px;
margin-bottom: 20px;
`;

const SearchBarLeft = styled.div`
display: flex;
`;

const SearchBarRight = styled.div`
display: flex;
`;

const SearchBarWrapperI = styled.p`
padding: 0 10px;
`;

const Instagram = styled.p`
font-family: 'Kaushan Script', cursive;
`;

const InstagramIcon = styled.i`
border-right: black solid 1px;
padding: 0 10px;
`;

const SearchBarWrapperInput = styled.input`
width: 300px;
text-align: center;
`;

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

    }

    removeLocalStorage = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

    render() {
        return (
            <SearchBarWrapper>
                <SearchBarLeft>
                    <SearchBarWrapperI><InstagramIcon onClick={this.removeLocalStorage} className="fab fa-instagram"></InstagramIcon></SearchBarWrapperI>
                    <Instagram className='instagram'>Instagram</Instagram>
                </SearchBarLeft>

                <div>
                    <form>
                        <SearchBarWrapperInput onChange={this.props.searchHandler} type='text' placeholder='Search' />
                    </form>
                </div>

                <SearchBarRight>
                    <p><SearchBarWrapperI className="far fa-compass"></SearchBarWrapperI></p>
                    <p><SearchBarWrapperI className="far fa-heart"></SearchBarWrapperI></p>
                    <p><SearchBarWrapperI className="far fa-user"></SearchBarWrapperI></p>
                </SearchBarRight>
            </SearchBarWrapper>
        )
    }
}

SearchBar.propTypes = {
    searchHandler: PropTypes.func.isRequired
}

export default SearchBar;