import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ModeProviderProps {
    children: ReactNode | React.JSX.Element | React.JSX.Element[]
}

export interface ButtonProps {
    title: string
    style?: string
    link?: string
    target?: React.HTMLAttributeAnchorTarget
}

export interface ScrollProps {
    children: ReactNode | React.JSX.Element | React.JSX.Element[]
    scrollSpeed: number,
    className?: string
}

export interface NavBarLinkProps {
    name: string
    link: string
}

export interface NavBarProps {
    active?: string,
    PageLinks: NavBarLinkProps[]
}

export interface FooterProps {
    type: 'lg' | 'sm'
}

export interface CardProps {
    tag: string,
    image: StaticImageData | string
    children: ReactNode | React.JSX.Element | React.JSX.Element[]
    price: number,
    bodyStyle?: string
}

export interface ImageLib {
    image: {
        image: StaticImageData;
    }[];
    count: number;
    name: string;
    link: string;
} 

export interface WorksProps {
    endIndex?: number
    showButton?: boolean
    theImage?: ImageLib[]
}

export interface PortfolioProps {
    super: WorksProps
    pageTitle?: string
}

