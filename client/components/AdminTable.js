import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  Toolbar,
  Checkbox,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import api from 'lib/axios';
import useSWR from 'swr';
import useGlobal from 'context/GlobalProvider';
import { useDebugValue } from 'react';
import Router from 'next/router';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  paper: {
    marginBottom: '2rem',
  },
}));

const fetcher = async url => {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

function useUsers() {
  const data = useSWR('/api/users', fetcher);

  return data;
}

export default function AdminTable({ teachers = false }) {
  const { openNotification } = useGlobal();

  const classes = useStyles();
  const { data, error, mutate } = useUsers();
  useDebugValue(data);

  async function setTeacher(user) {
    mutate(
      [
        ...data.map(u => {
          if (u._id === user._id) {
            return {
              ...u,
              isTeacher: !user.isTeacher,
            };
          }
          return u;
        }),
      ],
      false
    );

    try {
      await api.put(`/api/users/${user._id}`, {
        isTeacher: !user.isTeacher,
      });
    } catch (error) {
      console.log(error);
    }

    const message = user.isTeacher ? 'removed from' : 'made a';
    openNotification(`${user.displayName} has been ${message} teacher`);
  }

  if (!data) return 'Loading...';

  const usersArr = data.filter(user => user.isTeacher === teachers);

  return (
    <Paper className={classes.paper}>
      <Toolbar>
        <Typography variant='h6'>
          {teachers ? 'Teachers' : 'Students'}
        </Typography>
      </Toolbar>
      <TableContainer>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Google ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teacher</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersArr.map(user => (
              <TableRow key={user._id}>
                <TableCell>
                  <Avatar src={user.image} />
                </TableCell>
                <TableCell component='th' scope='row'>
                  {user._id}
                </TableCell>
                <TableCell>{user.displayName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={user.isTeacher}
                    onChange={() => setTeacher(user)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
