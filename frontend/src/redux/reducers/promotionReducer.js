import produce from 'immer';
import { FETCH_LIST_ROOMTYPE_SUCCESS1, ADD_PROMO_SUCCESS, FETCH_LIST_PROMOS_SUCCESS, FETCH_LENGTH_PROMO_SUCCESS, FETCH_LIST_ACTIVE_PROMO_SUCCESS } from 'redux/actionTypes/promoActionType';


const initialState = {
    length:0,
    roomtypeSelect : [],
    listPromos:[{
        "id": 1,
        "promoCode": "string",
        "description": "string",
        "dollarDiscount": 10.0,
        "percentDiscount": 10.0,
        "startDate": "2020-06-09",
        "endDate": "2020-06-09",
        "roomType": {
            "id": 2,
            "name": "single basic",
            "price": 150.0,
            "type": "single",
            "size": 150.0,
            "capacity": 1.0,
            "description": "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "images": [
                {
                    "id": 4,
                    "name": "https://firebasestorage.googleapis.com/v0/b/thang1-265415.appspot.com/o/room-type%2Fdetails-4.jpeg?alt=media&token=da9f13af-5069-40b7-9c3e-500109840530"
                },
                {
                    "id": 6,
                    "name": "https://firebasestorage.googleapis.com/v0/b/thang1-265415.appspot.com/o/room-type%2Fdetails-3.jpeg?alt=media&token=57c1f81f-6470-40a6-82be-de1c5fe16daf"
                },
                {
                    "id": 5,
                    "name": "https://firebasestorage.googleapis.com/v0/b/thang1-265415.appspot.com/o/room-type%2Fdetails-2.jpeg?alt=media&token=074343c3-0128-4e51-bdb2-7b7b983289aa"
                }
            ],
            "extras": [
                {
                    "id": 11,
                    "name": "Complimentary refreshments"
                },
                {
                    "id": 10,
                    "name": "Soft, oversized bath towels"
                },
                {
                    "id": 8,
                    "name": "Comfortable beds"
                },
                {
                    "id": 12,
                    "name": "Adequate safety/security"
                },
                {
                    "id": 9,
                    "name": "Plush pillows and breathable bed linens"
                }
            ],
            "thumbnail": "https://firebasestorage.googleapis.com/v0/b/thang1-265415.appspot.com/o/room-type%2Froom-2.jpeg?alt=media&token=92dc2007-8359-4a97-8992-e316bda8f4af"
        }
    }]
};
var myReducer = (state = initialState, action) => (
    produce(state, draft => {
        switch (action.type) {
            case FETCH_LIST_ROOMTYPE_SUCCESS1:{
                draft.roomtypeSelect = action.payload;
                return draft;
            }
            case ADD_PROMO_SUCCESS:{
                draft.listPromos = action.payload;
                return draft;
            }
            case FETCH_LIST_PROMOS_SUCCESS:{
                draft.listPromos = action.payload;
                return draft;
            }
            case FETCH_LENGTH_PROMO_SUCCESS:{
                draft.length = action.payload;
                return draft;
            }
            case FETCH_LIST_ACTIVE_PROMO_SUCCESS:{
                draft.listPromos = action.payload;
                return draft;
            }
            default:
                return draft;
        }
    })
)
export default myReducer;