import { ReactNode } from "react";

export interface ModeProviderProps {
    children: ReactNode | React.JSX.Element | React.JSX.Element[]
}

export interface ButtonProps {
    title: string
    style?: string
}

export interface ScrollProps {
    children: ReactNode | React.JSX.Element | React.JSX.Element[]
    scrollSpeed: number,
    className?: string
}