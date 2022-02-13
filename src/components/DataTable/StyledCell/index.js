import { styled } from '@mui/material/styles';
import { TableCell } from '@mui/material';

const StyledCell = styled(TableCell)(({ theme }) => ({
    border: 0,
    borderRadius: '0px'
}));

export default StyledCell;