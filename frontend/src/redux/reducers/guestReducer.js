import produce from "immer";
import { FETCH_GUEST_INFOR_SUCCESS, FETCH_LIST_GUEST_SUCCESS, SEARCH_USER_SUCCESS } from "redux/actionTypes/guestActionType";

const intitialState = {
  // guestList: [],
  // guestInfor:{
  //     birthday: new Date()
  // },
  // invoices:[]
  body: [
    {
      "id": 1,
      "email": "khanh1025@gmail.com",
      "roleEntities": [
        {
          "id": 2,
          "name": "ROLE_USER"
        }
      ],
      "firstName": "khanh",
      "lastName": "nguyen",
      "status": null,
      "birthday": "2020-05-27",
      "phone": "0382189922"
    }
  ],
  length: 0,
  guestInfor: {
    "id": 1,
    "email": "khanh1025@gmail.com",
    "roleEntities": [
      {
        "id": 2,
        "name": "ROLE_ADMIN"
      }
    ],
    "firstName": "khanh",
    "lastName": "nguyen",
    "status": null,
    "birthday": "2020-05-27",
    "phone": "0382189922"
  }

}
const myReducer = (state = intitialState, action) => (
  produce(state, draft => {
    switch (action.type) {
      case FETCH_LIST_GUEST_SUCCESS:
        {
          draft.body = action.payload.body;
          draft.length = action.payload.length;
          return draft;
        }
      case FETCH_GUEST_INFOR_SUCCESS:
        {
          draft.guestInfor = action.payload;
          return draft;
        }
      case SEARCH_USER_SUCCESS: {
        draft.body = action.payload.body;
        draft.length = action.payload.length;
        return draft;
      }
      default:
        return draft;
    }

  })

)
export default myReducer;