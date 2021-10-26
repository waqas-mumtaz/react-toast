import { useContext } from 'react';
import { DispatchContext, StateContext } from '../context/Context';

//modal
const useModal = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  const setIsModalOpen = (bool) => {
    return dispatch({ type: 'OPEN_MODAL', payload: { isModalOpen: bool } });
  };

  return {
    setIsModalOpen,
    isModalOpen: state.isModalOpen,
  };
};

export default useModal;
