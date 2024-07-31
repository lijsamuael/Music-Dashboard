// src/components/EditSongForm.tsx
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { StyledSelect } from "../styles/songs";
import { genres } from "../constants";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
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

interface EditSongFormProps {
  song: {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
  };
  onEditSong: (updatedSong: {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
  }) => void;
  isOpen: boolean;
  onClose: () => void;
}

const EditSongForm: React.FC<EditSongFormProps> = ({
  isOpen,
  song,
  onEditSong,
  onClose,
}) => {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [album, setAlbum] = useState(song.album);
  const [genre, setGenre] = useState(song.genre);

  useEffect(() => {
    if (song) {
      setTitle(song.title);
      setArtist(song.artist);
      setAlbum(song.album);
      setGenre(song.genre);
    }
  }, [song]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEditSong({ _id: song._id, title, artist, album, genre });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
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
            <Button type="submit">Update Song</Button>
            <CloseButton onClick={onClose}>Close</CloseButton>
          </Action>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditSongForm;
