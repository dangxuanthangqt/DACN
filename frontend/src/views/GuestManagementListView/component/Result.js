import { Avatar, Button, Card, CardContent, CardHeader, Divider, Link, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, TablePagination } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableFooter from '@material-ui/core/TableFooter';
import { format } from 'date-fns';
import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { useTheme } from '@material-ui/styles';

Result.propTypes = {

};
const useStyles = makeStyles(theme => (
    {
        root: {
             flexShrink: 0,
            // marginLeft: theme.spacing(2.5),
          },
        content: {
            padding: 0,
        },
        nameCell: {
            display: 'flex',
            alignItems: 'center'
        },
        avatar: {
            height: 42,
            width: 42,
            marginRight: theme.spacing(1)
        },

    }
))
function TablePaginationActions(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
function Result(props) {
    const classes = useStyles();
    const { guests, length } = props;
    const match = useRouteMatch();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    //const emptyRows = rowsPerPage - Math.min(rowsPerPage, length - page * rowsPerPage);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    //console.log(match);
    return (
        <Card className={classes.root}>
            <CardHeader
                title="All Guest"
            >
            </CardHeader>
            <Divider>
            </Divider>
            <CardContent className={classes.content}
            >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Name
                        </TableCell>
                            <TableCell>
                                Phone number
                        </TableCell>
                            <TableCell>
                                Birthday
                        </TableCell>
                            <TableCell>
                                Status
                        </TableCell>
                            <TableCell>
                                Role
                        </TableCell>
                            <TableCell align='right'>
                                Action
                        </TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {
                            (rowsPerPage > 0
                                ? guests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : guests).map((guest, index) => (
                                <TableRow key={index}>
                                    <TableCell >
                                        <div className={
                                            classes.nameCell
                                        }>
                                            <Avatar>
                                                {guest.firstName}
                                            </Avatar>
                                            <div>
                                                <Link
                                                    color='inherit'
                                                    component={RouterLink}
                                                    to={`${match.url}/${guest.id}`}
                                                    variant='h6'

                                                >
                                                   {guest.firstName}&nbsp;{guest.lastName}
                                                </Link>
                                                <div>{guest.email}</div>
                                            </div>
                                        </div>

                                    </TableCell>
                                    <TableCell>
                                        {guest.phone}
                                    </TableCell>
                                    <TableCell>
                                    {format(new Date(guest.birthday), 'dd/MM/yyyy')}
                                    </TableCell>
                                     <TableCell>
                                        {guest.status === "ACTIVE" ? <Button style={
                                            {
                                                width: "5rem",
                                                color:"white",
                                                backgroundColor:"green",
                                            }
                                        }>Active</Button>:<Button style={
                                            {   color:"white",
                                                backgroundColor:"red",
                                                width: "5rem",
                                            }
                                        }>Inactive</Button>
                                    }
                                    </TableCell>
                                    <TableCell>
                                        {guest.roleEntities.map((item , index)=>{
                                            if(item.name === "ROLE_USER") return <Button key={index} style={
                                                {   color:"white",
                                                    backgroundColor:"#1976d2",
                                                    marginRight: "5px"
                                                }
                                            }>User</Button>;
                                            else{
                                                return <Button key={index} style={
                                                    {   color:"white",
                                                        backgroundColor:"#e65100",
                                                    }
                                                }>Admin</Button>
                                            }
                                    }) 
                                    }
                                    </TableCell> 
                                    {/* <TableCell>
                                        <ReviewStars value={guest.rating}></ReviewStars>
                                    </TableCell> */}
                                    <TableCell align="right">
                                        <Button
                                            color="primary"
                                            component={RouterLink}
                                            size="small"
                                            to={`${match.url}/${guest.id}`}
                                            variant="outlined"
                                        >
                                            View
                                    </Button>
                                    </TableCell>
                                
                                </TableRow>

                            ))
                        }
                    </TableBody>
                    <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
                </Table>

            </CardContent>
        </Card>
    );
}

export default Result;