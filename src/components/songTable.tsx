// src/components/SongTable.tsx
import React from "react";
import styled from "@emotion/styled";
import { TableCell, TableHeader } from "../styles/table";

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button<{ color: string }>`
  background: ${({ color }) => color};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SongTableProps {
  songs: Song[];
  onEdit: (song: Song) => void;
  onDelete: (index: string) => void;
}

const SongTable: React.FC<SongTableProps> = ({ songs, onEdit, onDelete }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>Title</TableHeader>
            <TableHeader>Artist</TableHeader>
            <TableHeader>Album</TableHeader>
            <TableHeader>Genre</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <TableCell>{song.title}</TableCell>
              <TableCell>{song.artist}</TableCell>
              <TableCell>{song.album}</TableCell>
              <TableCell>{song.genre}</TableCell>
              <TableCell>
                <ButtonContainer>
                  <Button color={"blue"} onClick={() => onEdit(song)}>
                    Edit
                  </Button>
                  <Button color={"red"} onClick={() => onDelete(song._id)}>
                    Delete
                  </Button>
                </ButtonContainer>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default SongTable;
