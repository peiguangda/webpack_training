import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import TrackList from './components/TrackList/TrackList';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Track from "./components/TrackList/Track";
import Login from './components/auth/Login';
import './styles/app.css';
import './styles/appStyles.scss';
// import homeIcon from './images/home.png';

// const homeImg = document.getElementById('home');
// homeImg.src = homeIcon;

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route component={Login}/>
                    <Route exact={true} path='/login' component={Login} />
                    <Route path='/tracks/:id' component={Track}/>
                </Switch>
            </Fragment>
        </BrowserRouter>
    </Provider>, document.getElementById('app')
);
