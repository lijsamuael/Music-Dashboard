// src/components/SongCard.tsx
import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  display: flex;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
  width: 100%;
  max-width: 300px;
  &:hover {
    transform: translateY(-5px);
  }

  //   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
  //     max-width: 400px;
  //   }
`;

const SongInfo = styled.div`
  padding: 16px;
`;

const SongTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: #333;
`;

const Artist = styled.p`
  color: #777;
  margin: 5px 0;
`;

const Album = styled.p`
  color: #999;
  margin: 5px 0;
`;

const Genre = styled.p`
  color: #bbb;
  margin: 5px 0;
`;

interface SongCardProps {
  title: string;
  artist: string;
  album: string;
  genre: string;
  onEdit: () => void;
  onDelete: () => void;
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: 10px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
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

const SongCard: React.FC<SongCardProps> = ({
  title,
  artist,
  album,
  genre,
  onEdit,
  onDelete,
}) => {
  return (
    <Card>
      <SongInfo>
        <SongTitle>{title}</SongTitle>
        <Artist>Artist: {artist}</Artist>
        <Album>Album: {album}</Album>
        <Genre>Genre: {genre}</Genre>
      </SongInfo>
      <ButtonContainer>
        <Button onClick={onEdit}>Edit</Button>
        <Button onClick={onDelete}>Delete</Button>
      </ButtonContainer>
    </Card>
  );
};

export default SongCard;
