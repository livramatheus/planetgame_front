import { styled } from '@mui/material/styles';
import { Skeleton } from '@mui/material';

const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
    backgroundColor: theme.status.bgtableheader,
    borderRadius: '0px'
}));

export default StyledSkeleton;