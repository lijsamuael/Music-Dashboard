import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddSongButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    /* background: ${({ theme }) => theme.colors.secondary}; */
  }
`;

export const StyledSelect = styled.select`
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  background-color: #3e344d;
  &:focus {
    outline: none;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const StyledOption = styled.option`
  color: white;
  padding: 10px;
  font-size: 16px;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  max-width: 400px;
  background-color: #3e344d;
  border-radius: 4px;
`;
