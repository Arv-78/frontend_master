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
        margin: 'auto 0',
    }
}))

export default useStyles;