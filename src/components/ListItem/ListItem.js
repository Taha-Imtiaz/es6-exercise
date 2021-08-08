import React, { Fragment } from 'react'
import { StyledTableCell, StyledTableRow } from './../../utility/utilityfunctions';
import Modal from './../Modal/Modal';

const ListItem = ({user}) => {
    var {name, username, email, address:{street}, phone,id} = user
    const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
    return (
        <Fragment>
        <StyledTableRow key={id} onClick={handleOpenModal}>
              <StyledTableCell component="th" scope="row">
                {name}
              </StyledTableCell>
              <StyledTableCell align="right">{username}</StyledTableCell>
              <StyledTableCell align="right">{email}</StyledTableCell>
              <StyledTableCell align="right">{street}</StyledTableCell>
              <StyledTableCell align="right">{phone}</StyledTableCell>
            </StyledTableRow>
            {open && <Modal open = {open} handleCloseModal = {handleCloseModal} user = {user}/>}

            </Fragment>
    )
}

export default ListItem
