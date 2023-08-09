export interface IPlaylist {
    name: string
    type: string
    songs: ISong[]
    created_at: number
    playlist_cover?: string
    author: IUser
}


export interface ISong {
    title: string,
    audio_path: string
    duration: number
    album_cover: string
}


export interface IUser {
    nickname: string
    email: string
    favourite_songs: ISong[]
    playlists: IPlaylist[]
}