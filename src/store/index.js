import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import linkReducer from './slices/linkSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        links: linkReducer,
    },
});

export {store};
