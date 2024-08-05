import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  fetchAlbumsByArtist,
  fetchSongsByAlbum,
  fetchSongsByArtist,
  fetchSongsByGenre,
  fetchTotalAlbumsRequest,
  fetchTotalArtistsRequest,
  fetchTotalGenresRequest,
  fetchTotalSongsRequest,
} from "../redux/slices/statisticsSlice";
import { StatTable, TableCell, TableHeader } from "../styles/table";
import {
  StatCard,
  StatContainer,
  StatCounterContainer,
  Title,
} from "../styles/statistics";
import { LoadingIndicator } from "../components/LoadingComponent";
import { ErrorDisplay } from "../components/errorDisplay";
import { useAppSelector } from "../hooks";

export default function StatisticsPage() {
  const dispatch: AppDispatch = useDispatch();

  const albumsByArtist = useSelector(
    (state: RootState) => state.statistics.albumsPerArtist
  );
  const songsByArtist = useSelector(
    (state: RootState) => state.statistics.songsPerArtist
  );
  const songsByGenre = useSelector(
    (state: RootState) => state.statistics.songsPerGenre
  );
  const songsByAlbum = useSelector(
    (state: RootState) => state.statistics.songsPerAlbum
  );

  const totalSongs = useAppSelector((state) => state.statistics.totalSongs);
  const totalArtists = useSelector(
    (state: any) => state.statistics.totalArtists
  );
  const totalGenres = useAppSelector((state) => state.statistics.totalGenres);
  const totalAlbums = useAppSelector((state) => state.statistics.totalAlbums);
  const loading = useAppSelector((state) => state.statistics.loading);
  const error = useAppSelector((state) => state.statistics.error);

  useEffect(() => {
    dispatch(fetchTotalSongsRequest());
    dispatch(fetchTotalArtistsRequest());
    dispatch(fetchTotalGenresRequest());
    dispatch(fetchTotalAlbumsRequest());
  }, []);

  useEffect(() => {
    dispatch(fetchAlbumsByArtist());
    dispatch(fetchSongsByArtist());
    dispatch(fetchSongsByGenre());
    dispatch(fetchSongsByAlbum());
  }, [dispatch]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorDisplay />;
  }

  return (
    <div>
      <StatCounterContainer>
        <StatCard>{totalSongs} Songs</StatCard>
        <StatCard>{totalGenres} Genres</StatCard>
        <StatCard>{totalArtists} Artists</StatCard>
        <StatCard>{totalAlbums} Albums</StatCard>
      </StatCounterContainer>
      <Title>Music Statistics</Title>
      <StatContainer>
        <div>
          <h2>Albums per Artist</h2>
          <StatTable>
            <thead>
              <tr>
                <TableHeader>Artist</TableHeader>
                <TableHeader>Albums Count</TableHeader>
              </tr>
            </thead>
            <tbody>
              {albumsByArtist.length > 0 &&
                albumsByArtist.map((artist) => (
                  <tr key={artist._id}>
                    <TableCell>{artist._id}</TableCell>
                    <TableCell>{artist.albumsCount}</TableCell>
                  </tr>
                ))}
            </tbody>
          </StatTable>
        </div>
        <div>
          <h2>Songs per Artist</h2>
          <StatTable>
            <thead>
              <tr>
                <TableHeader>Artist</TableHeader>
                <TableHeader>Songs Count</TableHeader>
              </tr>
            </thead>
            <tbody>
              {songsByArtist.length > 0 &&
                songsByArtist.map((artist) => (
                  <tr key={artist._id}>
                    <TableCell>{artist._id}</TableCell>
                    <TableCell>{artist.songsCount}</TableCell>
                  </tr>
                ))}
            </tbody>
          </StatTable>
        </div>
        <div>
          <h2>Songs per Genre</h2>
          <StatTable>
            <thead>
              <tr>
                <TableHeader>Genre</TableHeader>
                <TableHeader>Songs Count</TableHeader>
              </tr>
            </thead>
            <tbody>
              {songsByGenre.length > 0 &&
                songsByGenre.map((genre) => (
                  <tr key={genre._id}>
                    <TableCell>{genre._id}</TableCell>
                    <TableCell>{genre.songsCount}</TableCell>
                  </tr>
                ))}
            </tbody>
          </StatTable>
        </div>
        <div>
          <h2>Songs per Album</h2>
          <StatTable>
            <thead>
              <tr>
                <TableHeader>Album</TableHeader>
                <TableHeader>Songs Count</TableHeader>
              </tr>
            </thead>
            <tbody>
              {songsByAlbum.length > 0 &&
                songsByAlbum.map((album) => (
                  <tr key={album._id}>
                    <TableCell>{album._id}</TableCell>
                    <TableCell>{album.songsCount}</TableCell>
                  </tr>
                ))}
            </tbody>
          </StatTable>
        </div>
      </StatContainer>
    </div>
  );
}
