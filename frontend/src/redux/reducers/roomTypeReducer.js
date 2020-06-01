import produce from 'immer';

import { FETCH_LIST_ROOMTYPE_SUCCESS, FETCH_ROOMTYPE_DETAIL_SUCCESS } from 'redux/actionTypes/roomActionType';


const initialState={
    listRoomType: [],
    detailRoomType:{
        

       images:[{

       }],
       extras:[{
           
       }]
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