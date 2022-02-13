import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

const StyledTablePaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.status.bgtableheader,
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '0px'
}));

export default StyledTablePaper;