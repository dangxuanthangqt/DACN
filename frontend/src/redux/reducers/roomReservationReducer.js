import { id } from "date-fns/locale";

const { default: produce } = require("immer");
const {
  GET_ALL_ROOM_RESERVATION_SUCCESS,
  RESET_LIST_ROOM_RESERVATION_ON_REDUX,
} = require("redux/actionTypes/roomReservationActionType");

const initialState = {
  listRoomReservation: [
    {
      roomReservationDTOList: [
        {
          userBooking: {},
        },
      ],
    },
  ],
  groups: [],
  items: [],
};
const myReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_ALL_ROOM_RESERVATION_SUCCESS:
        let tempItems = [];
        try{
            draft.listRoomReservation = action.payload;
            let tempGroups = action.payload.map((room, index) => {
              room.roomReservationDTOList.forEach((element) => {
                let temp = {
                  id: element.id,
                  group: room.id,
                  start: new Date(element.startDate),
                  end: new Date(element.endDate),
                  title: element.usersBooking.email
                };
                tempItems.push(temp);
              });
    
              return {
                id: room.id,
                title: room.name,
              };
            });
            draft.groups = tempGroups.sort();
            draft.items = tempItems;
        }catch(e){
            console.log(e)
        }
       
        return draft;
      case RESET_LIST_ROOM_RESERVATION_ON_REDUX:
        draft.listRoomReservation = [];
        draft.groups =[];
        return draft;
      default:
        return draft;
    }
  });
};
export default myReducer;
