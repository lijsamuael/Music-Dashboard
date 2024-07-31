// src/pages/SongsPage.tsx
import React, { useEffect, useState } from "react";
import SongTable from "../components/songTable";
import AddSongForm from "../components/addSongForm";
import EditSongForm from "../components/editSongForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  Song,
  deleteSongRequest,
  fetchSongsRequest,
  updateSongRequest,
} from "../redux/slices/songsSlice";
import {
  AddSongButton,
  Container,
  FilterContainer,
  Header,
  StyledOption,
  StyledSelect,
} from "../styles/songs";
import { LoadingIndicator } from "../components/LoadingComponent";
import { ErrorDisplay } from "../components/errorDisplay";
import { genres } from "../constants";

const SongsPage: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState({
    _id: "",
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const songs = useSelector((state: any) => state.songs.songs);
  const loading = useSelector((state: any) => state.songs.loading);
  const error = useSelector((state: any) => state.songs.error);

  useEffect(() => {
    dispatch(fetchSongsRequest({ selectedFilter }));
  }, [dispatch]);

  const handleEditSong = (updatedSong: Song) => {
    dispatch(updateSongRequest(updatedSong));
    setEditModalIsOpen(false);
  };

  const handleSelectedFilter = (e: any) => {
    const value = e.target.value;
    setSelectedFilter(value);
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleEdit = (song: Song) => {
    setCurrentSong(song);
    setEditModalIsOpen(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteSongRequest(id));
  };

  const handleAddSong = (_newSong: {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
  }) => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    dispatch(fetchSongsRequest({ selectedFilter }));
    console.log("selected filter", selectedFilter);
  }, [selectedFilter]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorDisplay />;
  }

  return (
    <Container>
      <Header>
        <FilterContainer>
          <AddSongButton onClick={handleShowFilter}>
            Filter by genre{" "}
            <img
              width={25}
              src={
                showFilter
                  ? "/public/icons/close-dark.png"
                  : "/public/icons/filter-dark.png"
              }
              alt=""
            />
          </AddSongButton>

          {showFilter && (
            <>
              <StyledSelect
                onChange={handleSelectedFilter}
                value={selectedFilter}
              >
                {genres.map((genre) => (
                  <StyledOption key={genre} value={genre}>
                    {genre}
                  </StyledOption>
                ))}
              </StyledSelect>
            </>
          )}
        </FilterContainer>
        <AddSongButton onClick={() => setModalIsOpen(true)}>
          Add Song
        </AddSongButton>
      </Header>

      <SongTable songs={songs} onEdit={handleEdit} onDelete={handleDelete} />

      <AddSongForm
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        onAddSong={handleAddSong}
      />
      <EditSongForm
        onClose={() => setEditModalIsOpen(false)}
        isOpen={editModalIsOpen}
        song={currentSong}
        onEditSong={handleEditSong}
      />
    </Container>
  );
};

export default SongsPage;
