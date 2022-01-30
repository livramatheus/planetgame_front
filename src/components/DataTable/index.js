import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

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

function DataTable(props) {

    let { rows, cols } = props;

    return (
        rows && (
            <Paper style={{ width: '60%' }}>
                <TableContainer>
                    <Table aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                {
                                    cols.map((col) => {
                                        return <StyledHeader key={col}>{col}</StyledHeader>
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ borderRadius: '0px' }}>
                            {rows.map((row) => (
                                <StyledRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    style={{ borderRadius: '0px' }}
                                >
                                    <StyledCell component="th" scope="row" style={{ borderRadius: '0px' }}>
                                        {row.name}
                                    </StyledCell>
                                </StyledRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        )
    );
}

export default DataTable;