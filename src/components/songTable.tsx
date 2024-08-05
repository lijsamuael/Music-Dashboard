// src/components/SongTable.tsx
import React from "react";
import styled from "@emotion/styled";
import {
  Button,
  ButtonContainer,
  Table,
  TableCell,
  TableContainer,
  TableHeader,
} from "../styles/table";
import { Song } from "../interfaces/songs";

interface SongTableProps {
  songs: Song[];
  onEdit: (song: Song) => void;
  onDelete: (index: string) => void;
  loading: boolean;
}

const SongTable: React.FC<SongTableProps> = ({
  songs,
  onEdit,
  onDelete,
  loading,
}) => {
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
                    {loading ? "Deleting" : "Delete"}
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
