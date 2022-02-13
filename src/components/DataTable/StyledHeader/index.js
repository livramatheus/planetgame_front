import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledHeader = styled(TableCell)(({ theme }) => ({
    color: theme.status.txttable,
    backgroundColor: theme.status.bgtableheader,
    borderColor: theme.status.bdrtable,
    fontSize: '1.1rem'
}));

export default StyledHeader;