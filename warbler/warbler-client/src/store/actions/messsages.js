import { apiCall } from '../../services/api';
import { addError } from './error';
import { LOAD_MESSAGES, REMOVE_MESSAGES } from '../actionType';

export const loadMessages = messages => ({
   type: LOAD_MESSAGES,
   messages,
});

export const fetchMessages = () => dispatch =>
   apiCall('GET', '/api/messages').then(res =>
      dispatch(loadMessages(res)).catch(err => addError(err.message)));
