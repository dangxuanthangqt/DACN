import produce from "immer"
import { FETCH_LIST_GUEST_SUCCESS, FETCH_GUEST_INFOR_REQUEST, FETCH_GUEST_INFOR_SUCCESS } from "redux/actionTypes/guestActionType";

const intitialState = {
    // guestList: [],
    // guestInfor:{
    //     birthday: new Date()
    // },
    // invoices:[]
    body:[
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
    length : 0,
    guestInfor :  {
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

            default:
                return draft;
        }

    })

)
export default myReducer;