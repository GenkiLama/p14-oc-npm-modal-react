import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./styles/modal.css";
export function Modal({ text, isOpen, onClose, textColor = "#fff", backgroundColor = "#157846", iconColor = "#000", }) {
    const modalStyle = {
        color: textColor,
        backgroundColor: backgroundColor,
    };
    const iconStyle = {
        color: iconColor,
    };
    return (React.createElement("div", null, isOpen && (React.createElement("div", { className: "modal_wrap" },
        React.createElement("div", { className: "modal_wrap_content", style: modalStyle },
            React.createElement("button", { type: "button", className: "modal_wrap_content_btn", onClick: onClose, "aria-label": "Close modal", style: iconStyle },
                React.createElement(FontAwesomeIcon, { icon: faClose })),
            React.createElement("p", null, text))))));
}
