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
            if (this.props.data.loggingIn === true && this.props.data.loading === false) {
                return <Fragment>
                    <div>
                        <button type="" className="btn btn-default login-btn" onClick={this.onClickLogout}>Logout
                        </button>
                    </div>
                </Fragment>
            } else return ""
        };

        const home = () => {
            if (this.props.data.loading === false) {
                if (this.props.data.loggingIn === false) {
                    return <LoginForm/>
                } else return <TrackList/>
            }
        };

        const loading = () => {
            if (this.props.data.loading === true) {
                return <img
                    src={"https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1"}/>
            }
        };

        return (
            <Fragment>
                {loading()}
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
