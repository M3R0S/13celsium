import { FC } from "react"

import cl from "./main.module.scss"
import { IMain } from "./types"

export const Main: FC<IMain> = ({children}) => {
   return (
       <main className={cl.main}>
            {children}
       </main>
   )
}