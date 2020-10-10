import reducerContext from "./ReducerContext";

const reducer = (state, action) => {
  switch (action.type) {
    case 'update_first_name':
      return { ...state, firstName: action.payload };
    case 'update_last_name':
      return { ...state, lastName: action.payload };
    default:
      console.log('No action type found');
  }
}

const initialState = {
  firstName: '',
  lastName: '',
}

function changeLastName(dispatch) {
  return (lastName) => {
    dispatch({ type: 'update_last_name', payload: lastName });
  }
}

const changeName = (dispatch) => (firstName) => {
  dispatch({ type: 'update_first_name', payload: firstName });
}

export const { Context, Provider } = reducerContext(reducer, { changeName, changeLastName }, initialState)




