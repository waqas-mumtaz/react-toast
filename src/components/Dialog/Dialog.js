import React, { useRef } from 'react';
import { Alert } from '../Alert';
import useModal from '../../hooks/useModal';
import { useClickOutside } from '../../hooks/useClickOutside';

export const Dialog = ({ ...props }) => {
  const { setIsModalOpen } = useModal();
  const ref = useRef();

  useClickOutside(ref, () => setIsModalOpen(false));

  return (
    <div className="absolute top-0 left-0 z-50 h-screen w-screen bg-gray-800 bg-opacity-80 flex items-center justify-center">
      <div className="max-w-3xl flex-1" ref={ref}>
        <Alert boxView onDismiss={() => setIsModalOpen(false)} {...props} />
      </div>
    </div>
  );
};
