import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ body, title, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div
      className="backdrop-grayscale-0 backdrop-blur-sm bg-white/20 fixed w-full top-0 left-0 h-screen"
      onClick={onDismiss}
    >
      <div
        className="w-6/12 bg-zinc-900 text-slate-50 px-8 py-10 rounded-md mx-auto my-52"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="font-bold text-3xl mb-5">{title}</h1>
        <p>{body}</p>
        <div className="flex gap-7 my-5 justify-end p-5 w-full">{actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
