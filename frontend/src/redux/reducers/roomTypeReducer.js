import produce from 'immer';

import {  } from 'module';
import { DataRoomType } from 'assets/fakeData/DataRoomType';
import { FETCH_ROOMTYPE_DETAIL_SUCCESS, FETCH_LIST_ROOMTYPE_REQUEST, FETCH_LIST_ROOMTYPE_SUCCESS } from 'redux/actionTypes/roomActionType';

const initialState={
    listRoomType: [],
    detailRoomType:{
       images:[{

       }],
       extras:[]
    }

}
var myReducer = (state = initialState, action) => (
    produce(state, draft => {
        switch (action.type) {
            case FETCH_LIST_ROOMTYPE_SUCCESS:{
                draft.listRoomType = action.payload;
                return draft;
            }
            case FETCH_ROOMTYPE_DETAIL_SUCCESS:{
                draft.detailRoomType= action.payload;
                return draft;
            }
            default:
                return draft;
        }
    })
)
export default myReducer;