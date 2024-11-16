import React, { ReactNode } from "react";

interface GridContainerProps {
    children: ReactNode;
    className?: string;
}

const GridContainer = ({ children, className }: GridContainerProps) => {
    const defaultClass = "w-full max-w-grid mx-auto px-3";
    return (
        <div className={`${defaultClass} ${className ?? ""}`}>{children}</div>
    );
};

export default GridContainer;
