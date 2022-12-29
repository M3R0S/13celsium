import { ReactNode } from "react"

type TWrapper = "navbarAndFooter" | "navbarMenu"

export interface IWrapper {
    uiType: TWrapper
    className?: string
    children: ReactNode
}

export interface IACCORDANCE_WRAPPER {
    navbarAndFooter: string
    navbarMenu: string
}