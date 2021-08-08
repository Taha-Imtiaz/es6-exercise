import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import ListItem from './../ListItem/ListItem';
import { StyledTableCell } from './../../utility/utilityfunctions';

const List = ({filteredUsers}) => {
  
  
  
  
  return (
    <div>
      <h2>User List</h2>

      <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {filteredUsers && filteredUsers.map((user) => (
        <ListItem user={user} />
      ))}
        </TableBody>
      </Table>
    </TableContainer>

     
    </div>
  );
};

export default List;
