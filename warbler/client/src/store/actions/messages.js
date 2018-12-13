import apiCall from '../../services/api';
import { addError } from './error';
import { LOAD_MESSAGES, REMOVE_MESSAGES } from '../actionTypes';

export const loadMessages = messages => ({
   type: LOAD_MESSAGES,
   messages,
});

export const fetchMessages = () => dispatch =>
   apiCall('get', '/api/messages')
      .then((res) => {
         dispatch(loadMessages(res));
      })
      .catch((err) => {
         addError(err.message);
      });

export const postNewMessage = text => (dispatch, getState) => {
   const {
      currentUser: {
         user: { id },
      },
   } = getState();

   return apiCall('post', `/api/users/${id}/messages`, { text })
      .then((res) => {})
      .catch(err => addError(err.message));
};
