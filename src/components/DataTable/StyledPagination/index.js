import { styled } from '@mui/material/styles';
import { TablePagination } from '@mui/material';

const StyledPagination = styled(TablePagination)(({ theme }) => ({
    color: theme.status.txttable,
    backgroundColor: theme.status.bgtableheader,
    borderColor: theme.status.bdrtable,
}));

export default StyledPagination;