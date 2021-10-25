import React from 'react';
import { Button } from '../Button';
import { classNames } from '../../lib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faCheckCircle,
  faInfoCircle,
  faBan,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

const types = {
  info: 'bg-blue-100 border border-blue-300',
  success: 'bg-green-100 border border-green-300',
  warning: 'bg-yellow-100 border border-yellow-300',
  danger: 'bg-red-100 border border-red-300',
};

const icons = {
  info: faInfoCircle,
  success: faCheckCircle,
  warning: faExclamationCircle,
  danger: faBan,
};

const iconColors = {
  info: 'text-blue-500',
  success: 'text-green-500',
  warning: 'text-yellow-500',
  danger: 'text-red-500',
};
export const Alert = ({
  title,
  description,
  type = 'info',
  boxView = false,
  extra = true,
  className,
  onConfirm,
  onCancel,
  dismissable = false,
  onDismiss,
}) => {
  return (
    <div
      className={classNames(
        'flex justify-between relative rounded-md',
        boxView
          ? 'flex-col items-center text-center gap-0 px-5 py-10'
          : 'flex-row gap-x-3 items-start px-6 py-4',
        types[type],
        className
      )}
    >
      <div>
        <FontAwesomeIcon
          icon={icons[type]}
          size={boxView ? '3x' : 'lg'}
          className={iconColors[type]}
        />
      </div>

      <div
        className={`${boxView ? 'flex flex-col items-center pt-6' : 'flex-1'}`}
      >
        {title && <p className="text-lg font-medium leading-tight">{title}</p>}
        {description && <p className="text-md pb-2">{description}</p>}
      </div>
      {extra && (
        <div className={`${boxView ? 'self-center w-full pt-4' : 'self-end'}`}>
          <div className="flex flex-row gap-x-2 justify-center">
            <Button type="white" text="ok" onClick={onConfirm} />
            <Button type="danger" text="cancel" onClick={onCancel} />
          </div>
        </div>
      )}
      {dismissable && (
        <div className={`absolute transform origin-center right-6 top-4`}>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={onDismiss}
            className="hover:cursor-pointer text-gray-700 opacity-50 hover:opacity-100"
          />
        </div>
      )}
    </div>
  );
};
