import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'redux/reducer/user';
import themeReducer from 'redux/reducer/theme';

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
