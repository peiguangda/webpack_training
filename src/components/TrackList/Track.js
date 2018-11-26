import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from "../../actions/track";
import homeIcon from '../../images/home.png';

class Track extends Component {

    componentWillMount(){
        this.props.dispatchFetchData();
    }

    render() {
        <img src = {homeIcon} />
        return (
            <div>{this.props.match.params.id}</div>
        )
    }
}

function mapStateToProps(state) {
    const tracks = state.tracks.result;
    return {tracks}
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchFetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Track);
