import { configureStore, createReducer } from '@reduxjs/toolkit';
import parcelReducer from '../features/parcel/parcelSlice';
import authReducer from '../features/auth/authSlice' 
import orderReducer from '../features/order/orderSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    parcels: parcelReducer,
    auth : authReducer,
    order : orderReducer,
    user : userReducer,
  },
});
