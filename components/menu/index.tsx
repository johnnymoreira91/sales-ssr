import { Grid, Paper, Typography } from '@mui/material'
import makeStyles from '@styles/styled/useStyle'
import React from 'react'
import MenuDashBoard from './menuDashBoard'

export default function Menu() {
  const classes = makeStyles();
  return (
    <Grid item xs={12}>
      <Paper sx={{ height: 50, p: 2, width: '100%' }} className={classes.alignPaper}><MenuDashBoard /></Paper>
    </Grid>
  )
}