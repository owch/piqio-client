import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST, SET_ERROR_MESSAGE, SET_USER_ID, SET_EMAIL, SET_AUTH_TOKEN } from '../constants/app-constants';

const assign = Object.assign


const initialState = {
  formState: {
    username: '',
    password: ''
  },
  currentlySending: false,
  loggedIn: false,
  authtoken: '',
  email: '',
  userid: '',
  errorMessage: ''
};

// Takes care of changing the application state
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return assign({}, state, {
        formState: action.newState
      });
      break;
    case SET_AUTH:
      return assign({}, state, {
        loggedIn: action.newState
      });
      break;
    case SET_EMAIL:
      return assign({}, state, {
        email: action.newState
      });
      break;
    case SET_USER_ID:
      return assign({}, state, {
        userid: action.newState
      });
      break;
    case SET_AUTH_TOKEN:
      return assign({}, state, {
        authtoken: action.newState
      });
      break;
    case SENDING_REQUEST:
      return assign({}, state, {
        currentlySending: action.sending
      });
      break;
    case SET_ERROR_MESSAGE:
      return assign({}, state, {
        errorMessage: action.message
      });
    default:
      return state;
  }
}