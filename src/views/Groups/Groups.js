// Groups.js
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { GroupsContainer, GroupTable, GroupHeader, TableRow, TableHeader, TableCell } from './Groups.style';

const groups = [
  { name: 'Group A', teams: ['Team 1', 'Team 2', 'Team 3'] },
  { name: 'Group B', teams: ['Team 4', 'Team 5', 'Team 6'] },
  { name: 'Group C', teams: ['Team 7', 'Team 8', 'Team 9'] },
  { name: 'Group D', teams: ['Team 10', 'Team 11', 'Team 12'] },
  { name: 'Group E', teams: ['Team 13', 'Team 14', 'Team 15'] },
  { name: 'Group F', teams: ['Team 16', 'Team 17', 'Team 18'] },
];

const Groups = () => {
  return (
    <Layout>
    <GroupsContainer>
      {groups.map((group, index) => (
        <GroupTable key={index}>
          <GroupHeader>{group.name}</GroupHeader>
          <thead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>W</TableHeader>
              <TableHeader>D</TableHeader>
              <TableHeader>L</TableHeader>
              <TableHeader>Pts</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {group.teams.map((team, index) => (
              <TableRow key={index}>
                <TableCell>{team}</TableCell>
                <TableCell>{Math.floor(Math.random() * 10)}</TableCell> {/* Random W value */}
                <TableCell>{Math.floor(Math.random() * 10)}</TableCell> {/* Random D value */}
                <TableCell>{Math.floor(Math.random() * 10)}</TableCell> {/* Random L value */}
                <TableCell>{Math.floor(Math.random() * 30)}</TableCell> {/* Random Pts value */}
              </TableRow>
            ))}
          </tbody>
        </GroupTable>
      ))}
    </GroupsContainer>
    </Layout>
  );
};

export default Groups;
