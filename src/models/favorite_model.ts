export interface Game {
    id: string
    name: string
    thumbnail: string
    rate: number
}

export interface GameCreate {
    name: string
    thumbnail: string
    rate: number
}