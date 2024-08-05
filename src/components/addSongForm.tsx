// src/components/AddSongForm.tsx
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { addSongRequest } from "../redux/slices/songsSlice";
import { genres } from "../constants";
import { useAppDispatch } from "../hooks";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.button`
  padding: 10px;
  background: #f50909;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;

  cursor: pointer;
`;

const Action = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSelect = styled.select`
  background-color: white;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  /* background-color: #000; */
  appearance: none;
  cursor: pointer;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface AddSongFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSong: (newSong: Song) => void;
}

const AddSongForm: React.FC<AddSongFormProps> = ({
  isOpen,
  onClose,
  onAddSong,
}) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSong: Song = {
      _id: Date.now().toString(),
      title,
      artist,
      album,
      genre,
    };
    dispatch(addSongRequest(newSong));
    onAddSong(newSong);
    setTitle("");
    setArtist("");
    setAlbum("");
    setGenre("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            required
          />
          <StyledSelect
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Genre
            </option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </StyledSelect>
          <Action>
            <Button type="submit">Add Song</Button>
            <CloseButton onClick={onClose}>Close</CloseButton>
          </Action>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddSongForm;
