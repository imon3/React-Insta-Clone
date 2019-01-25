import React from 'react';
import SearchBar from '../Searchbar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyData: [],
            searchPost: []
        }
    }

    componentDidMount() {
        this.setState({
            dummyData: dummyData
        })
    }

    searchHandler = (e) => {
        const dData = this.state.dummyData.filter(data => {
            if (data.username.includes(e.target.value)) {
                return data
            }
        })
        this.setState({
            searchPost: dData
        })
    }

    render() {

        return (
            <div className="App">
                <SearchBar searchHandler={this.searchHandler} />
                <PostContainer dummyData={this.state.searchPost.length > 0 ? this.state.searchPost : this.state.dummyData} />
            </div>
        );
    }
}

export default PostsPage;