export interface AlbumByArtist {
    _id: string;
    albumsCount: number;
  }
  
  export interface SongByArtist {
    _id: string;
    songsCount: number;
  }
  
  export interface SongByAlbum {
    _id: string;
    songsCount: number;
  }
  
  export interface SongByGenre {
    _id: string;
    songsCount: number;
  }