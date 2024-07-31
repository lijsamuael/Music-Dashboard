// src/pages/SongsPage.tsx
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
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
  SearchInput,
  StyledOption,
  StyledSelect,
} from "../styles/songs";
import { LoadingIndicator } from "../components/LoadingComponent";
import { ErrorDisplay } from "../components/errorDisplay";

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
  const [searchInput, setSearchInput] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const songs = useSelector((state: any) => state.songs.songs);
  const loading = useSelector((state: any) => state.songs.loading);
  const error = useSelector((state: any) => state.songs.error);

  useEffect(() => {
    dispatch(fetchSongsRequest({ searchInput, selectedFilter }));
  }, [dispatch]);

  const handleEditSong = (updatedSong: Song) => {
    dispatch(updateSongRequest(updatedSong));
    setEditModalIsOpen(false);
  };

  const handleSelectedFilter = (e: any) => {
    const value = e.target.value;
    setSelectedFilter(value);
  };

  const handleSearchInput = (e: any) => {
    const value = e.target.value;
    setSearchInput(value);
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

  const options = [
    { value: "", label: "Select Filter Method" },
    { value: "title", label: "Title" },
    { value: "artist", label: "Artist" },
    { value: "album", label: "Album" },
    { value: "genre", label: "Genre" },
  ];

  useEffect(() => {
    dispatch(fetchSongsRequest({ searchInput, selectedFilter }));
  }, [searchInput]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <Container>
      <Header>
        <FilterContainer>
          <AddSongButton onClick={handleShowFilter}>
            Filter{" "}
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
                {options.map((option) => (
                  <StyledOption key={option.value} value={option.value}>
                    {option.label}
                  </StyledOption>
                ))}
              </StyledSelect>
              {selectedFilter && (
                <SearchInput
                  onChange={handleSearchInput}
                  placeholder={`Filter by ${selectedFilter}`}
                />
              )}
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
