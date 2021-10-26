import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Toast } from '../components/Toast';
import useToast from '../hooks/useToast';

const ToastContainer = () => {
  const [extra, setExtra] = useState(false);
  const [description, setDescription] = useState(false);
  const { addToast, changeToastPosition, position, duration } = useToast();

  const toastTemplate = (type) => ({
    title: `This is a/an ${type} toast`,
    type: type,
    description:
      description &&
      'Ipsum voluptate commodo et quis elit sunt eiusmod do ipsum. Cillum ipsum eiusmod et Lorem proident pariatur consequat.',
    extra: extra,
    position: position,
    duration: duration,
  });

  return (
    <div className=" flex items-center justify-center">
      <Toast />
      <div className=" flex-1 md:max-w-5xl rounded-xl flex  flex-col gap-y-8 items-center bg-white py-20">
        <div className="flex  md:flex-row flex-col  items-center gap-1">
          {['info', 'warning', 'success', 'danger'].map((type, key) => (
            <Button
              intent={type}
              onClick={() => addToast(toastTemplate(type))}
              key={key}
            >
              toast
            </Button>
          ))}
        </div>
        {/* different options for toast */}
        <div className="flex md:flex-row flex-col gap-3 justify-around">
          <select
            className="block border border-gray-200"
            defaultValue="bottomRight"
            onChange={(e) => changeToastPosition(e.target.value)}
          >
            <option>position</option>
            <option value="topCenter">Top Center</option>
            <option value="topLeft">Top Left</option>
            <option value="topRight">Top Right</option>
            <option value="bottomLeft">Bottom Left</option>
            <option value="bottomRight">Bottom Right</option>
          </select>
          <div>
            <input
              type="checkbox"
              id="extra"
              name="extra"
              onChange={(e) => setExtra(e.target.checked)}
              value={true}
            />
            <label htmlFor="extra" className="pl-2">
              extra buttons
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="description"
              name="description"
              onChange={(e) => setDescription(e.target.checked)}
              value={true}
            />
            <label htmlFor="description" className="pl-2">
              show description
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastContainer;
