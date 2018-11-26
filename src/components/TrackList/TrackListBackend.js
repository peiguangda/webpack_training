import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class TrackListBackend extends Component {

    render() {
        return (
            <div>
                {
                    this.props.tracks.map((track, key) => {
                        return <div key={key}>Track: {track.title}</div>;
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const tracks = state.tracks_backend.data;
    return {tracks}
}

export default connect(mapStateToProps)(TrackListBackend);
