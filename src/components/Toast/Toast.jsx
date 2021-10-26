import React, { useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { classNames } from "../../lib";
import { Alert } from "../Alert";

const positions = {
  topCenter: "top-4 left-1/2 -translate-x-1/2",
  topLeft: "top-4 left-4 ",
  topRight: "top-4 right-4",
  bottomLeft: "bottom-4 left-4",
  bottomRight: "bottom-4 right-4",
};

export function Toast({ toasts, position = "topLeft" }) {
  return (
    <div
      className={classNames(
        positions[position],
        "fixed pointer-events-none md:w-2/6 w-full  gap-2 flex transform origin-center",
        position.includes("top") ? "flex-col" : "flex-col-reverse"
      )}
    >
      {toasts.map((item, key) => (
        <div id={"toast" + Date.now()}>
          <Alert
            dismissable
            className="pointer-events-auto shadow-lg "
            onDismiss={() => {
              // Cancel automatic unmount when component is manually unmounted
            }}
            boxView={false}
            type={item.type}
            title={item.title}
            description={item.description}
            extra={item.extra}
            onConfirm={item.onConfirm}
            onCancel={item.onCancel}
          />
        </div>
      ))}
    </div>
  );
}
