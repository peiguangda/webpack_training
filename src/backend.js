import React from 'react';
import ReactDom from 'react-dom';
import TrackListBackend from './components/TrackList/TrackListBackend';
import {Provider} from 'react-redux';
import store from './store';

ReactDom.render(
    <Provider store={store}>
        <TrackListBackend/>
    </Provider>, document.getElementById('app')
);
