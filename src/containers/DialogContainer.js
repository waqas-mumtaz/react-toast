import React from 'react';
import { Dialog } from '../components/Dialog';
import { Button } from '../components/Button';
import useModal from '../hooks/useModal';

const DialogContainer = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
  return (
    <div className=" flex items-center justify-center">
      <div className=" flex-1 md:max-w-5xl rounded-xl flex  flex-col gap-y-8 items-center bg-white py-10">
        <Button intent="danger" onClick={() => setIsModalOpen(true)}>
          Show Dialog
        </Button>
        {isModalOpen && (
          <Dialog
            title="This is an Info Dialog"
            description="Ipsum voluptate commodo et quis elit sunt eiusmod do ipsum. Cillum ipsum eiusmod et Lorem proident pariatur consequat."
          />
        )}
      </div>
    </div>
  );
};

export default DialogContainer;
