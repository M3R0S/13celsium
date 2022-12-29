import { FC } from "react"

import cl from "./wrapper.module.scss"
import { IWrapper } from "./types"
import { ACCORDANCE_WRAPPER } from "./const"

export const Wrapper: FC<IWrapper> = ({uiType ,className, children}) => {

    const defaultClassName = ACCORDANCE_WRAPPER[uiType]

   return (
       <div className={`${cl[defaultClassName]} ${className}`}>
            {children}
       </div>
   )
}