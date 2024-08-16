// Groups.styles.js
import styled from 'styled-components';

export const GroupsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  padding: 2rem;

  @media only screen and (max-width: 855px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
  }
`;

export const GroupTable = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 18px auto;
  background: #fff;
  @media only screen and (max-width: 855px) {
    margin: 5px auto;
  }
`;

export const GroupHeader = styled.caption`
  caption-side: top;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

export const TableRow = styled.tr`
   
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
  background-color: #4CAF50;
  color: white;
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
`;

export const LoadingStatusContainer = styled.div`
    height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const StatusMsg = styled.p`
    display: flex;
    height: fit-content;
    margin: auto;
    font-size: 24px;
    font-weight: 500;
`;