import React from 'react';
import { classNames } from '../../lib';
import useToast from '../../hooks/useToast';

import { Alert } from '../Alert';

//toast posistions
const positions = {
  topCenter: 'top-4 left-1/2 -translate-x-1/2',
  topLeft: 'top-4 left-4 ',
  topRight: 'top-4 right-4',
  bottomLeft: 'bottom-4 left-4',
  bottomRight: 'bottom-4 right-4',
};

export function Toast() {
  //get toasts from toast hook
  const { getToasts, removeToast, position } = useToast();
  const toastPosition = position ?? 'bottomRight';

  return (
    <div
      className={classNames(
        positions[toastPosition],
        'fixed pointer-events-none md:w-2/6 w-full  gap-2 flex transform origin-center',
        toastPosition.includes('top') ? 'flex-col' : 'flex-col-reverse'
      )}
    >
      {getToasts &&
        getToasts.map((toast, key) => (
          <div id={'toast' + Date.now()} key={key}>
            <Alert
              dismissable
              id={toast.id}
              className="pointer-events-auto shadow-lg "
              onDismiss={() => removeToast(toast.id)}
              boxView={false}
              type={toast.type}
              title={toast.title}
              description={toast.description}
              extra={toast.extra}
              onConfirm={toast.onConfirm}
              onCancel={toast.onCancel}
            />
          </div>
        ))}
    </div>
  );
}
