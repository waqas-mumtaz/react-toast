import { useContext } from 'react';
import { DispatchContext, StateContext } from '../context/Context';

//toast hook
const useToast = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  // unique id for each toast
  const id = 'toast' + Date.now();
  const addToast = (toast) =>
    toast.title
      ? dispatch({ type: 'ADD_TOAST', payload: { ...toast, id: id } })
      : alert('name is required.');
  const removeToast = (id) => {
    return dispatch({ type: 'REMOVE_TOAST', payload: { id } });
  };

  const changeToastPosition = (position) => {
    return dispatch({ type: 'CHANGE_POSITION', payload: { position } });
  };

  const changeToastDuration = (duration) => {
    return dispatch({ type: 'CHANGE_DURATION', payload: { duration } });
  };

  return {
    addToast,
    removeToast,
    changeToastPosition,
    changeToastDuration,
    getToasts: state.items,
    position: state.position,
    duration: state.duration,
    length: state.items && state.items.length,
  };
};

export default useToast;
