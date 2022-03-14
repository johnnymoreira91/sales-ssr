import { makeStyles } from '@mui/styles'

export default makeStyles((theme: any) => ({
    grid: {
      width: '99%',
      margin: '0px'
    },
    paper: {
      background: '##737477',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
    },
    alignPaper: {
      background: '##737477',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center'
    },
    card: {
      border: 'none',
      textAlign: 'center',
      borderRadius: 10
    }
  }));