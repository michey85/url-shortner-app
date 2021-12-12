import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {URL_SHORTNER} from 'config';


export const createShortLink = createAsyncThunk(
    'links/createShortLink', 
    async (fullUrl) => {
        console.log(fullUrl)
        const response = await fetch(URL_SHORTNER + fullUrl, {method: 'POST'});
        return await response.json();
    }
);

const initialState = {
    items: [],
    loading: 'idle',
};

const linkSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {

    },
    extraReducers: {
        [createShortLink.rejected]: (state) => {
            state.loading = 'rejected';
        },
        [createShortLink.pending]: (state) => {
            state.loading = 'loading';
        },
        [createShortLink.fulfilled]: (state, action) => {
            const {ok, result} = action.payload;
            
            if (ok) state.items.push(result);
            state.loading = 'idle';
        },
    },
});

// export const {} = linkSlice.actions;

export const selectLinks = state => state.links.items;
export const selectLoading = state => state.links.loading;
export default linkSlice.reducer;
