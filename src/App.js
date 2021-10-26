import React from 'react';
import ToastContainer from './containers/ToastContainer';
import DialogContainer from './containers/DialogContainer';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <ToastContainer />
      <DialogContainer />
    </div>
  );
};

export default App;
