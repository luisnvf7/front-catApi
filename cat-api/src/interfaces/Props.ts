import { ChangeEvent } from "react";
import { FC } from "react";


export interface LoadingInterface {
    isLoading: boolean;
    className?: string
}

export interface PaginationProp {
    pressPage: (index: number) => void
}

export interface DropdownProp {
    label: string,
    disabled: boolean,
    values: any[],
    onSelect: (event: ChangeEvent<HTMLSelectElement>) => void
}


export interface GuardProp {
    component: FC;
    path: string;
    exact: boolean;
}

export interface HeaderProp {
    left: string;
    right: string
}