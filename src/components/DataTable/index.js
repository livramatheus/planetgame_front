import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StyledHeader from './StyledHeader';
import StyledCell from './StyledCell';
import StyledPagination from './StyledPagination';
import StyledRow from './StyledRow';
import StyledSkeleton from './StyledSkeleton';
import StyledTablePaper from './StyledTablePaper';
import { Link } from 'react-router-dom';
import useResponsive from "../../hooks/useResponsive";

function DataTable(props) {

    let { rows, labels, cols, target } = props;
    
    const [page, setPage]               = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
    const isResponsive = useResponsive();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const paperStyle = {
        width: isResponsive ? '100%' : '60%'
    }

    return (
        rows ? (
            <Paper style={paperStyle}>
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
                                    >
                                        {
                                            cols.map((col, x) => {
                                                if (x == 0 && target) {
                                                    return (
                                                        <StyledCell
                                                            key={col}
                                                            component="th"
                                                            scope="row"
                                                        >
                                                            <Link
                                                                to={`/${target}/${row['id']}`}
                                                                style={{
                                                                    fontWeight: 'bold',
                                                                    textDecoration: 'underline',
                                                                    color: ((row && row.approved == 0) ? 'var(--detail1)' : 'var(--text1)'),
                                                                    fontStyle: ((row && row.approved == 0) == 1 ? 'italic' : 'normal')
                                                                }}
                                                            >
                                                                {`${row[col]} ${(row && row.approved == 0) ? '*' : ''}`}
                                                            </Link>
                                                        </StyledCell>
                                                    )
                                                }

                                                return (
                                                    <StyledCell
                                                        key={col}
                                                        component="th"
                                                        scope="row"
                                                    >
                                                        <span>
                                                            {row[col]}
                                                        </span>
                                                    </StyledCell>
                                                )
                                            })
                                        }
                                    </StyledRow>
                                ))}
                            {emptyRows > 0 && (
                                <StyledRow style={{ height: 53 * emptyRows }}>
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
        ) : (
            <StyledTablePaper>
                <StyledSkeleton height={50}  width="98%" />
                <StyledSkeleton height={400} width="98%" />
                <StyledSkeleton height={50}  width="98%" />
            </StyledTablePaper>
        )
    );
}

export default DataTable;