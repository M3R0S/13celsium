export interface IChangeClassName {
    defaultClass: string
    interactiveClass: IInteractiveClass
    trigger: boolean
    isLoading?: boolean
}

interface IInteractiveClass {
    start: string
    loading?: string
    end: string
}