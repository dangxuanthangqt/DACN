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
  pendingCount: 0,
  completeCount: 0,
};
const myReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_ALL_ROOM_RESERVATION_SUCCESS:
        let tempItems = [];
        let tempPendingCount = 0;
        let tempCompleteCount = 0;
        try {
          draft.listRoomReservation = action.payload;
          let tempGroups = action.payload.map((room, index) => {
            room.roomReservationDTOList.forEach((element) => {
              let temp = {
                id: element.id,
                group: room.id,
                start: new Date(element.startDate),
                end: new Date(element.endDate),
                title: element.usersBooking.email,
                className:
                  element.status == "PENDING"
                    ? "item-type-pending "
                    : "item-type-completed",
                itemProps: {
                  style: {
                    borderRadius: "3px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",

                    whiteSpace: "nowrap",
                  },
                },
              };
              tempItems.push(temp);
              if (element.status === "PENDING") {
                tempPendingCount += 1;
              } else if (element.status === "COMPLETED") {
                tempCompleteCount += 1;
              }
            });

            return {
              id: room.id,
              title: room.name,
            };
          });
          draft.pendingCount = tempPendingCount;
          draft.completeCount = tempCompleteCount;
          draft.groups = tempGroups.sort((a, b) => {
            if (a.title > b.title) {
              return 1;
            } else if (a.title < b.title) return -1;
            return 0;
          });
          draft.items = tempItems;
        } catch (e) {
          console.log(e);
        }

        return draft;
      case RESET_LIST_ROOM_RESERVATION_ON_REDUX:
        draft.listRoomReservation = [];
        draft.groups = [];
        draft.pendingCount = 0;
        draft.completeCount = 0;
        return draft;
      default:
        return draft;
    }
  });
};
export default myReducer;
