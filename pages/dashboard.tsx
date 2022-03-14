import type { NextPage } from 'next'
import styles from '@styles/Home.module.css'
import { Grid, Paper, Typography } from '@mui/material'
import makeStyles from '@styles/styled/useStyle'
import useSwr from 'swr'
import Menu from '@components/menu'
import TableUser from '@components/tableUser'
import TableProducts from '@components/tableProducts'

// @ts-ignore
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {

  const classes = makeStyles();

  const { data } = useSwr(`/api/user/list`, fetcher)

  return (
    <Grid container spacing={2} className={classes.grid}>
      <Menu />
      <Grid item xs={3}>
        <Paper sx={{ height: 100, p: 2, width: '100%', background: '#1a868e' }}
          className={classes.card}
        >
          <Typography color="white" variant="subtitle1">Total de Usuarios</Typography>
          <Typography color="white" variant="subtitle2" fontSize={24}>{data?.tamanho}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper sx={{ height: 100, p: 2, width: '100%', background: '#1a868e' }}
          className={classes.card}
        >
          <Typography color="white" variant="subtitle1">Total de Funcionarios</Typography>
          <Typography color="white" variant="subtitle2" fontSize={24}>{data?.func}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper sx={{ height: 100, p: 2, width: '100%', background: '#1a868e' }}
          className={classes.card}
        >
          <Typography color="white" variant="subtitle1">Total de Produtos</Typography>
          <Typography color="white" variant="subtitle2" fontSize={24}>{data?.productSize}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper sx={{ height: 100, p: 2, width: '100%', background: '#1a868e' }}
          className={classes.card}
        >
          <Typography color="white" variant="subtitle1">Total de máquinas</Typography>
          <Typography color="white" variant="subtitle2" fontSize={24}>10</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ height: 125, p: 2, width: '100%' }} className={classes.alignPaper}>
          teste
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper sx={{ height: 430, p: 2, width: '100%' }} className={classes.paper}>1</Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper sx={{ height: 430, p: 2, width: '100%' }} className={classes.paper}>
          <TableUser />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ height: 430, p: 2, width: '100%' }} className={classes.paper}>
          <TableProducts />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ height: 50, p: 2, width: '100%' }} className={styles.footer}>footer</Paper>
      </Grid>
    </Grid>
  )
}

export default Home
