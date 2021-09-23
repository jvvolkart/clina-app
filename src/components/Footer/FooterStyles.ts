import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const FooterInfos = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#898989',
  fontSize: '14px',

  'a': {
    marginLeft: '20px',
    color: '#898989',

    '&:hover': {
      color: '#7A35FF',
    }
  },
  'hr': {
    display: 'block',
    height: '1px',
    border: '0',
    borderTop: '1px solid #cecece',
    margin: '0.7em 0',
    padding: '0',
  }
});