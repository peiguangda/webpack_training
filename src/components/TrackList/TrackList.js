import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class TrackList extends Component {

    render() {
        return (
            <div>
                {
                    this.props.tracks.map((track, key) => {
                        return (
                            <Fragment key={key}>
                                <div><Link to={`/tracks/${track.id}`}>Track: {track.title}</Link></div>
                            </Fragment>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const tracks = state.tracks.data;
    return {tracks}
}

export default connect(mapStateToProps)(TrackList);
