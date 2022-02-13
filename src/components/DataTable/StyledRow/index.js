import { styled } from '@mui/material/styles';
import { TableRow } from '@mui/material';

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
    borderRadius: '0px'
}));

export default StyledRow;