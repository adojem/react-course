const initialState = {
   count: 0
};

function rootReducer(state = initialState, action) {
   switch (action.type) {
      case 'INCREMENT': {
         const newSate = Object.assign({}, state);
         newSate.count++;
         return newSate;
      }

      case 'DECREMENT': {
         const newSate = { ...state };
         newSate.count--;
         return newSate;
      }

      default:
         return state;
   }
}

const store = Redux.createStore(rootReducer);

function setState(type) {
   if (type) {
      store.dispatch({ type });
   }
   let currentState = store.getState();
   $('#counter').text(currentState.count);
}

$(document).ready(function() {
   setState();

   $('#increment').on('click', function() {
      setState('INCREMENT');
   });

   $('#decrement').on('click', function() {
      setState('DECREMENT');
   });
});
