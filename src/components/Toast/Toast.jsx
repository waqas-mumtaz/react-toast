import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { classNames } from '../../lib';
import { Alert } from '../Alert';

const positions = {
  topCenter: 'top-4 left-1/2 -translate-x-1/2',
  topLeft: 'top-4 left-4 ',
  topRight: 'top-4 right-4',
  bottomLeft: 'bottom-4 left-4',
  bottomRight: 'bottom-4 right-4',
};

export function dangerouslySetToast({
  children,
  type,
  title,
  description,
  duration = 12000,
  position = 'bottomRight',
  extra,
  onConfirm,
  onCancel,
}) {
  // Create ToastContainer on Document Level when it does not exist
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';

    document.body.appendChild(toastContainer);
  }
  // Update Position of ToastContainer

  toastContainer.className = classNames(
    positions[position],
    'fixed pointer-events-none md:w-2/6 w-full  gap-2 flex transform origin-center',
    position.includes('top') ? 'flex-col' : 'flex-col-reverse'
  );
  // Create a wrapper for the toast  and append it
  const container = document.createElement('div');
  container.id = 'toast' + Date.now();

  toastContainer.appendChild(container);
  // Unmount React component and Remove wrapper after x milliseconds
  const timer = setTimeout(() => {
    unmount(toastContainer, container);
  }, duration);
  // render the Ract component inside the wrapper
  render(
    <Alert
      dismissable
      className="pointer-events-auto shadow-lg "
      onDismiss={() => {
        // Cancel automatic unmount when component is manually unmounted
        clearTimeout(timer);
        unmount(toastContainer, container);
      }}
      boxView={false}
      type={type}
      title={title}
      description={description}
      extra={extra}
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      {children}
    </Alert>,
    container
  );
}

function unmount(parent, container) {
  unmountComponentAtNode(container);
  parent.removeChild(container);
}
