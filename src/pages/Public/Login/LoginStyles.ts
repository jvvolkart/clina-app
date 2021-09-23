import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';
import { Form } from '@rocketseat/unform';

export const Container = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  '.sign-up': {
    width: '360px',
    marginTop: '30px',

    'span': {
        color: '#4F4F4F',
        fontSize: '13px',
        fontWeight: '500',
        
        'a': {
            color: '#212E89',
            cursor: 'pointer',

            '&:hover': {
                textDecoration: 'underline',
            }
        }
    }
  }
});

export const LoginBox = styled(Paper)({
    height: '350px',
    width: '330px',
    padding: '36px 20px',
    border: '1px solid #CFCFCF',
    boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 8%), 0px 5px 8px 0px rgb(0 0 0 / 5%), 0px 1px 14px 0px rgb(0 0 0 / 4%)',

    'h5': {
        color: '#4F4F4F',
        margin: '0',
        marginBottom: '5px',
        fontWeight: '600',
    },
    'input': {
        padding: '8px',
        border: '1px solid #CFCFCF',
        borderRadius: '4px',

        '&.focus': {
            borderColor: '#7A35FF',
        }
    },
    'span': {
        color: 'red',
        fontSize: '12px',
        marginLeft: '5px',
    },
    'h2': {
        marginBottom: '10px',
    }
});

export const FormLogin = styled(Form)({
    display: 'flex',
    flexDirection: 'column',

    'button': {
        background: '#7A35FF',
        color: '#fff',
        textTransform: 'capitalize',
        marginTop: '15px',
        
        '&:hover': {
            background: '#632dca'
        },

        'span': {
            color: '#7A35FF',
        },
    },
    'a': {
        color: '#212E89',
        textDecoration: 'underline',
        textAlign: 'center',
        marginTop: '30px',
        fontSize: '14px',
        fontWeight: '500',
    }
  });