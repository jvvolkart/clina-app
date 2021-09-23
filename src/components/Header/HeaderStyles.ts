import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const HeaderBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: '0',
  width: '100%',
  height: '64px',
  background: '#fff',
});

export const HeaderContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const LeftSide = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  'span': {
      display: 'flex',
      marginLeft: '40px',
      color: '#7A35FF',
      fontSize: '14px',

      'svg': {
        fontSize: '16px',
        marginTop: '2px',
        marginRight: '2px',
      }
  }
});

export const RightSide = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  'svg': {
      color: '#4F4F4F',
  }
});
