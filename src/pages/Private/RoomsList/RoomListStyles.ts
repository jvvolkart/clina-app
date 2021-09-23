import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const TopInfos = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '80px',
});
export const BottomInfos = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});
export const Localizations = styled(Box)({
  display: 'flex',
  color: '#4F4F4F',
  fontSize: '14px',

  'svg': {
    fontSize: '20px',
  }
});

export const Filters = styled(Box)({
  display: 'flex',
  marginTop: '30px',

  '& > div': {
    marginRight: '15px'
  },

  'input': {
    padding: '8px',
  },
  'label': {
    top: '-8px',
  },
  '#simple-select': {
    padding: '8px',
  }
});

export const AvailableRooms = styled(Typography)({
  marginTop: '22px',
  marginBottom: '0',
  color: '#4F4F4F',
  fontSize: '14px',
});

export const RoomContent = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  'button': {
    marginLeft: '40px',
    padding: '0px 80px',
    height: '40px',
    textTransform: 'capitalize',
  },
});

export const Value = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  'h5': {
    margin: '0',
    fontSize: '24px',
    
    'span': {
      fontSize: '20px',
      fontWeight: '400',
      color: '#4F4F4F',
    }
  },
});