

var initialState={
    showLoading: false
}
 const myReducer=(state = initialState, action)=>{
    switch (action.type) {
        case "SHOW_LOADING":
            return{
                showLoading: true
            }
        case "HIDE_LOADING":
            return {
                showLoading: false
            }
    
        default:
            return state;
    }
}
export default myReducer;