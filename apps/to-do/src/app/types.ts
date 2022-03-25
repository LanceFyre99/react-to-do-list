export interface IListEntry {
    key: string,
    id: string
    name: string,
    checked: boolean,
    delete: (id: string) => void,
    toggle: (id: string) => void
}