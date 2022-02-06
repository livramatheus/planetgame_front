import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { TablePagination } from '@mui/material';
import { useState } from 'react';

const StyledHeader = styled(TableCell)(({ theme }) => ({
    color: theme.status.txttable,
    backgroundColor: theme.status.bgtableheader,
    borderColor: theme.status.bdrtable,
    fontSize: '1.1rem'
}));

const StyledRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.status.bgtableodd,
    },
    '&:nth-of-type(even)': {
        backgroundColor: theme.status.bgtableeven,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledCell = styled(TableCell)(({ theme }) => ({
    border: 0
}));

const StyledPagination = styled(TablePagination)(({ theme }) => ({
    color: theme.status.txttable,
    backgroundColor: theme.status.bgtableheader,
    borderColor: theme.status.bdrtable,
}));

function DataTable(props) {

    let { rows, labels, cols } = props;
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        rows && (
            <Paper style={{ width: '60%' }}>
                <TableContainer>
                    <Table aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                {
                                    labels.map((lbl) => {
                                        return <StyledHeader key={lbl}>{lbl}</StyledHeader>
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ borderRadius: '0px' }}>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <StyledRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        style={{ borderRadius: '0px' }}
                                    >
                                        {
                                            cols.map((col) => {
                                                return (
                                                    <StyledCell
                                                        key={col}
                                                        component="th"
                                                        scope="row"
                                                        style={{ borderRadius: '0px' }}>
                                                        {row[col]}
                                                    </StyledCell>
                                                )
                                            })
                                        }
                                    </StyledRow>
                                ))}
                            {emptyRows > 0 && (
                                <StyledRow style={{ height: 52 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </StyledRow>
                            )}
                        </TableBody>
                    </Table>
                    <StyledPagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            </Paper>
        )
    );
}

export default DataTable;