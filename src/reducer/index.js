export const initialState = {
  position: 'bottomRight',
  duration: 1000,
  items: [],
  isModalOpen: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    // add new toast
    case 'ADD_TOAST':
      return {
        ...state,
        position: action.payload.position,
        duration: action.payload.duration,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_TOAST':
      return {
        ...state,
        items: state.items.filter((e) => e.id !== action.payload.id),
      };

    case 'CHANGE_POSITION':
      return {
        ...state,
        position: action.payload.position,
      };

    case 'CHANGE_DURATION':
      return {
        ...state,
        duration: action.payload.duration,
      };

    case 'OPEN_MODAL':
      return {
        ...state,
        isModalOpen: action.payload.isModalOpen,
      };

    default:
      throw new Error('Should not be reached!');
  }
};
