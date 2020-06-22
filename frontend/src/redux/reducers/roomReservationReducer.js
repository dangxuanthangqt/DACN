import { id } from "date-fns/locale";
import { element } from "prop-types";

const { default: produce } = require("immer");
const {
  GET_ALL_ROOM_RESERVATION_SUCCESS,
  RESET_LIST_ROOM_RESERVATION_ON_REDUX,
  GET_ALL_RESERVATION_SUCCESS,
  FILTER_FOLLOW_COMPLETED_STATUS,
  FILTER_FOLLOW_PENDDING_STATUS,
  FILTER_FOLLOW_CANCELLED_STATUS,
  CHANGE_STATUS_PAYMENT_SUCCESS,
} = require("redux/actionTypes/roomReservationActionType");

const initialState = {
  listRoomReservation: [
    {
      roomReservationDTOList: [{}],
    },
  ],
  groups: [],
  items: [],
  pendingCount: 0,
  completeCount: 0,
  totalCount: 0,
  cancelledCount: 0,
  listReservation: [],
  dataModalReservation: {},
  dataModalPayment: { user: {} },
  dataReservationInYear: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
};
const myReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_ALL_ROOM_RESERVATION_SUCCESS:
        let tempItems = [];
        let tempPendingCount = 0;
        let tempCompleteCount = 0;
        let tempTotalCount = 0;
        let tempCancelledCount = 0;
        try {
          draft.listRoomReservation = action.payload;
          let tempGroups = action.payload.map((room, index) => {
            room.roomReservationDTOList.forEach((element) => {
              let temp = {
                id: element.id,
                group: room.id,
                start: new Date(element.startDate),
                end: new Date(element.endDate),
                title: element.email,
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
              if (element.status !== "CANCELLED") {
                tempItems.push(temp);
              }

              if (element.status === "PENDING") {
                tempPendingCount += 1;
              } else if (element.status === "COMPLETED") {
                tempCompleteCount += 1;
              } else {
                tempCancelledCount += 1;
              }
              tempTotalCount += 1;
            });

            return {
              id: room.id,
              title: room.name,
            };
          });
          draft.cancelledCount = tempCancelledCount;
          draft.totalCount = tempTotalCount;
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

      case GET_ALL_RESERVATION_SUCCESS:
        draft.listReservation = action.payload.sort((a, b) => {
          let temp1 = new Date(a.createDate);
          let temp2 = new Date(b.createDate);
          if (temp1.getTime() < temp2.getTime()) {
            return 1;
          } else if (temp1.getTime() > temp2.getTime()) return -1;
          return 0;
        });
        let temp = [];
        let test =0;
        for (let i = 1; i <= 12; i++) {
          let count = 0;
          
          action.payload.forEach((element) => {
            let createDate = new Date(element.createDate);
            test ++;
            let nowYear = new Date().getFullYear();
            if (createDate.getMonth() + 1 === i && createDate.getFullYear() === nowYear ) {
              
              count++;
            }
          });
        
          temp.push(count);
        }
     //   console.log(test);
        draft.dataReservationInYear = temp;
        return draft;
      case FILTER_FOLLOW_COMPLETED_STATUS:
        draft.listReservation = draft.listReservation
          .filter((item) => {
            return item.status === "COMPLETED";
          })
          .sort((a, b) => {
            let temp1 = new Date(a.createDate);
            let temp2 = new Date(b.createDate);
            if (temp1.getTime() < temp2.getTime()) {
              return 1;
            } else if (temp1.getTime() > temp2.getTime()) return -1;
            return 0;
          });
        return draft;
      case FILTER_FOLLOW_PENDDING_STATUS:
        draft.listReservation = draft.listReservation
          .filter((item) => {
            return item.status === "PENDING";
          })
          .sort((a, b) => {
            let temp1 = new Date(a.createDate);
            let temp2 = new Date(b.createDate);
            if (temp1.getTime() < temp2.getTime()) {
              return 1;
            } else if (temp1.getTime() > temp2.getTime()) return -1;
            return 0;
          });
        return draft;
      case FILTER_FOLLOW_CANCELLED_STATUS:
        draft.listReservation = draft.listReservation
          .filter((item) => {
            return item.status === "CANCELLED";
          })
          .sort((a, b) => {
            let temp1 = new Date(a.createDate);
            let temp2 = new Date(b.createDate);
            if (temp1.getTime() < temp2.getTime()) {
              return 1;
            } else if (temp1.getTime() > temp2.getTime()) return -1;
            return 0;
          });
        return draft;
      case "SET_DATA_MODAL_RESEVATION_DETAIL":
        draft.dataModalReservation = action.payload;
        return draft;
      case "SET_DATA_MODAL_PAYMENT_DETAIL":
        draft.dataModalPayment = action.payload;
        return draft;
      case CHANGE_STATUS_PAYMENT_SUCCESS:
        let tempArray = [...draft.listReservation];
        let index = tempArray.findIndex(
          (element) => element.reservation.id === action.payload.id
        );

        let temp1 = {
          ...tempArray[index],
          reservation: {
            ...tempArray[index].reservation,
            status: "PAID",
          },
        };

        tempArray.splice(index, 1, temp1);
        //  tempArray[index] = {...temp1};

        return {
          ...draft,
          listReservation: [...tempArray],
        };
      case RESET_LIST_ROOM_RESERVATION_ON_REDUX:
        draft.listRoomReservation = [];
        draft.groups = [];
        draft.pendingCount = 0;
        draft.completeCount = 0;
        return draft;
      case "RESET_ROOM_RESERVATION_STORE":
        return {
          listRoomReservation: [
            {
              roomReservationDTOList: [{}],
            },
          ],
          groups: [],
          items: [],
          pendingCount: 0,
          completeCount: 0,
          totalCount: 0,
          cancelledCount: 0,
          listReservation: [],
          dataModalReservation: {},
          dataModalPayment: { user: {} },
          dataReservationInYear: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
        }
      default:
        return draft;
    }
  });
};
export default myReducer;
