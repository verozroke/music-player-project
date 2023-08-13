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
  id: string,

  name: string
  email: string
  favouriteSongIds: SongId[]
  playlistIds: PlaylistId[],
  createdAt: Date
  updatedAt: Date
}


export type LoginUserDto = {
  email: string
  password: string
}


export type CreateUserDto = {
  email: string
  password: string
  name: string

}



export type PlaylistId = string
export type SongId = string