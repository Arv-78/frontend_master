import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    login: {
        backgroundColor: '#fff'
    },
    '@media (max-width: 900px)': {
        span: {
          display: 'none',
        }
    },
    loginDiv: {
        display: 'flex',
        margin: '0 25% 0',
        height: '100%',
        flexDirection: 'column'
    },
    leftLogin: {
        marginTop: '15%',
    },
    OtpDiv: {
        marginTop: '4%',
        border: '1px solid rgba(0, 0, 0, 0.15)',
        borderRadius: '40px',
    },
    OutInput: {
        textAlign: 'center',
        position: 'relative',
        bottom: '4px',
        width: '10%',
        height: '23px',
        margin: '0 8px',
        border: 'none',
        borderBottom: '1px solid grey',
        '&:focus':  {
            outline: 'none'
        }
    },
}))

export default useStyles;