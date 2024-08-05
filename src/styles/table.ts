import styled from "@emotion/styled";

export const StatTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
`;

export const TableHeader = styled.th`
  background-color: #3e344d;
  color: #fff;
  padding: 10px;
`;

export const TableCell = styled.td`
  background-color: #8d7575;
  color: #fff;
  padding: 10px;
  border: 1px solid #3e344d;
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button<{ color: string }>`
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
