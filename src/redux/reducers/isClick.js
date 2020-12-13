import { UPDATE_CLICK } from "../actionTypes";

const initialState = {
  isClick: false
};

export default function(state = initialState, action) {
  //console.log(state, action)
  switch (action.type) {
    case UPDATE_CLICK: {
      const isClick = action.payload.isClick;
      return {
        ...state,
        isClick: isClick
      };
    }    
    default:
      return state;
  }
}