// Groups.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import { StatusMsg, LoadingStatusContainer, GroupsContainer, GroupTable, GroupHeader, TableRow, TableHeader, TableCell } from './Groups.style';

const Groups = () => {
  const [groupsData, setGroupsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch groups data from API
    const fetchGroups = async () => {
      try {
        const response = await axios.get('https://oncolympics-api.onrender.com/api/groups');
        setGroupsData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (loading) return <LoadingStatusContainer><StatusMsg>Loading ...</StatusMsg></LoadingStatusContainer>;
  if (error) return <div><StatusMsg>{error}</StatusMsg></div>;

  return (
    <Layout>
      <GroupsContainer>
        {Object.entries(groupsData).map(([groupName, teams], index) => (
          <GroupTable key={index}>
            <GroupHeader>{groupName}</GroupHeader>
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
              {teams.map((team, index) => (
                <TableRow key={index}>
                  <TableCell>{team.teamName}</TableCell>
                  <TableCell>{team.W}</TableCell>
                  <TableCell>{team.D}</TableCell>
                  <TableCell>{team.L}</TableCell>
                  <TableCell>{team.Pts}</TableCell>
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
