export interface IPlaylist {

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