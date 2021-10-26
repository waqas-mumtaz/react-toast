import React, { useState, useEffect, useContext } from 'react';
import { Button } from './components/Button';
import { Toast } from './components/Toast';
import { useToastState } from './context/toastContext';
import useToast from "./hooks/useToast"
const App = () => {
  const [position, setPosition] = useState('bottomRight');
  const [extra, setExtra] = useState(false);
  const [description, setDescription] = useState(false);

  // const [toasts, setToasts] = useState([]);

  // useEffect(() => {
  //   if (toasts.length > 0) {
  //     const timer = setTimeout(() => setToasts(toasts => toasts.slice(1)), 1000)
  //     return () => clearTimeout(timer)
  //   }
  // }, [toasts])

  // const addToast = (toast) => {
  //   setToasts([...toasts, toast]);
  // };

  const { addToast } = useToast();
  // const [state, dispatch] = useTest();
  const state = useToastState();

  console.log("toastState", state)
  let count = 1;
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className=" flex-1 md:max-w-5xl rounded-xl flex  flex-col gap-y-8 items-center bg-white py-20">
        <Button onClick={() => addToast({
          duration: 5000,
          position: "bottomRight",
          title: `Toast`,
          description: 'Ipsum voluptate commodo et quis elit sunt eiusmod do ipsum. Cillum ipsum eiusmod et Lorem proident pariatur consequat veniam tempor commodo ad culpa non occaecat.',
          type: "danger",
          extra: true,
        })}>toast</Button>
        {/* <Toast toasts={items} /> */}
        <div className="flex md:flex-row flex-col gap-3 justify-around">
          <select
            className="block border border-gray-200"
            onChange={(e) => setPosition(e.target.value)}
          >
            <option>position</option>
            <option value="topCenter">Top Center</option>
            <option value="topLeft">Top Left</option>
            <option value="topRight">Top Right</option>
            <option value="bottomLeft">Bottom Left</option>
            <option value="bottomRight" selected>
              Bottom Right
            </option>
          </select>
          <div>
            <input
              type="checkbox"
              id="extra"
              name="extra"
              onChange={(e) => setExtra(e.target.checked)}
              value={true}
            />
            <label for="extra" className="pl-2">
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
            <label for="description" className="pl-2">
              show description
            </label>
          </div>
        </div>
        {/* <div className="flex  md:flex-row flex-col  items-center gap-1">
          {['info', 'success', 'warning', 'danger'].map((item, index) => (
            <Button
              intent={item}
              onClick={() =>
                dangerouslySetToast({
                  duration: 5000,
                  position: position,
                  title: `Toast ${item}: ${count++}`,
                  description:
                    description &&
                    'Ipsum voluptate commodo et quis elit sunt eiusmod do ipsum. Cillum ipsum eiusmod et Lorem proident pariatur consequat veniam tempor commodo ad culpa non occaecat.',
                  type: item,
                  extra: extra,
                })
              }
            >
              {item}
            </Button>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default App;
