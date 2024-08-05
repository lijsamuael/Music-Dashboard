import React, { useEffect, useState } from "react";
import SongTable from "../components/songTable";
import AddSongForm from "../components/addSongForm";
import EditSongForm from "../components/editSongForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useAppSelector, useAppDispatch } from "../hooks";

import {
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
import { ErrorDisplay } from "../components/errorDisplay";
import { genres } from "../constants";
import { Song } from "../interfaces/songs";

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

  const dispatch = useAppDispatch();
  const songs = useAppSelector((state) => state.songs.songs);
  const loading = useAppSelector((state) => state.songs.loading);
  const error = useAppSelector((state) => state.songs.error);

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

      <SongTable
        loading={loading}
        songs={songs}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

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
