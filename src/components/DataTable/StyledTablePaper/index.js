import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import useResponsive from '../../../hooks/useResponsive';

const StyledTablePaper = styled(Paper)(({ theme }) => {

    const isResponsive = useResponsive();
    const skeletonWidth = isResponsive ? '100%' : '60%';

    return (
        {
            backgroundColor: theme.status.bgtableheader,
            width: skeletonWidth,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '0px'
        }
    )
}
);

export default StyledTablePaper;