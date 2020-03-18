import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const booksReducer = (state = [], action) => {

	console.log("booksReducer called", action)

  switch (action.type) {
    case CREATE_BOOK:
      console.log("hello world");
			return [ ...state, action.book ];
    case REMOVE_BOOK:
      break;
    default:
      break;
  }
  return state;
};

export default booksReducer;
