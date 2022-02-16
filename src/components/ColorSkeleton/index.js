import { styled } from '@mui/material/styles';
import { Skeleton } from '@mui/material';

const ColorSkeleton = styled(Skeleton)(({ theme }) => ({
    backgroundColor: theme.status.bgtableeven,
    margin: 'auto'
}));

export default ColorSkeleton;