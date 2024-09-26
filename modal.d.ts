/// <reference types="react" />
import "./styles/modal.css";
interface ModalProps {
    text: string;
    isOpen: boolean;
    onClose: () => void;
    textColor?: string;
    backgroundColor?: string;
    iconColor?: string;
}
export declare function Modal({ text, isOpen, onClose, textColor, backgroundColor, iconColor, }: ModalProps): JSX.Element;
export {};
