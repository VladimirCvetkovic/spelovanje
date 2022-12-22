export type Slova = Array<Slovo>;

interface Slovo {
    text: string,
    column: number,
    pronunciation: string,
    visible: boolean
}
