import { ButtonHTMLAttributes } from "react";

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, onClick, className, ...props }: TypeButton) {
    return (
        <button {...props} onClick={onClick} className={`p-2 rounded ${className}`}>
            {children}
        </button>
    );
}
