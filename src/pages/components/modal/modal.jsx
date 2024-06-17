import React from "react";
import { ZModal, _ } from "packages";

const Modal = () => {
  const openModal = () => {
    ZModal.confirm({
      title: "标题",
      content:
        "代码是写给人看的代码是写给人看的代码是写给人看的代码是写给人看的",
      // slot: <input></input>,
      // html: '<h1>123</h1>',
      width: 320,
    });
  };

  return (
    <div className="modal">
      <button onClick={openModal}>OPEN MODAL</button>
    </div>
  );
};

export default Modal;
