import { LOAD_MESSAGES, REMOVE_MESSAGES } from '../actionType';

const message = (state = [], action) => {
   switch (action.type) {
      case LOAD_MESSAGES:
         return [...action.message];

      default:
         return state;
   }
};

export default message;
