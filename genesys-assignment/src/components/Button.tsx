import React, { MouseEventHandler } from 'react';
import { Button as ReactBootstrapButton } from 'react-bootstrap';

type ButtonProps = {
    className?: string,
    disabled?: boolean,
    size?: "sm" | "lg",
    text: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <ReactBootstrapButton
            variant={"outline-primary"}
            { ... props }
        >
            {props.text}
        </ReactBootstrapButton>
    );
};