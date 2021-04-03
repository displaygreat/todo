import { ADD_TASK } from '../constans';

export default addTask = ({ id, text, isCompleted }) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});