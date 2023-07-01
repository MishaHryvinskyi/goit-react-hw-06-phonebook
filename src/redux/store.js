import { configureStore } from '@reduxjs/toolkit';
import { createReducer, createAction } from '@reduxjs/toolkit';



const contactsReducer = createReducer(0, {

})

export const store = configureStore({
    reducer: {
         contacts: contactsReducer,
        // filters: filtersReducer,
    },

});