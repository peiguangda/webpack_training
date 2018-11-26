import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/logout';
import {getInfo} from '../../actions/getInfo';
import TrackList from "../TrackList/TrackList";
import LoginForm from "./LoginForm";

class Login extends Component {

    onClickLogout = () => {
        this.props.dispatchLogout();
    };

    render() {
        const logout = () => {
            if (this.props.data.loggingIn === true) {
                return <Fragment>
                    <div>
                        <button type="" className="btn btn-default login-btn" onClick={this.onClickLogout}>Logout
                        </button>
                    </div>
                </Fragment>
            } else return ""
        };

        const home = () => {
            if (this.props.data.loggingIn === false) {
                return <LoginForm/>
            } else return <TrackList/>
        };

        return (
            <Fragment>
                {logout()}
                {home()}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {data: state.authentication}
}

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getInfo()),
        dispatchLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
