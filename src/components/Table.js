import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  let i=0;
  const classes = useStyles();

  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const phone = localStorage.getItem('phone');
  const reviews = JSON.parse(localStorage.getItem('reviews'));
  console.log(reviews);

  return (
    <TableContainer component={Paper} style={{marginTop:'30px', marginRight:'20px'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow style={{backgroundColor:'#f7e6ff'}}>
            <TableCell >Form Name</TableCell>
            <TableCell align="right">Question No.</TableCell>
            <TableCell align="right">Phone No.</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Response</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((row) =>{
              i = i + 1
              return (<TableRow key={i}>
              <TableCell component="th" scope="row">
                {'Aromatic Bar'}
              </TableCell>
              <TableCell align="right">{i}</TableCell>
              <TableCell align="right">{phone}</TableCell>
              <TableCell align="right">{email}</TableCell>
              <TableCell align="right">{row}</TableCell>
              <TableCell align="right">{name}</TableCell>
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
