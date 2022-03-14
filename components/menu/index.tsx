import { Grid, Paper, Typography } from '@mui/material'
import makeStyles from '@styles/styled/useStyle'
import React from 'react'

export default function Menu() {
  const classes = makeStyles();
  return (
    <Grid item xs={12}>
      <Paper sx={{ height: 50, p: 2, width: '100%' }} className={classes.alignPaper}>Menu</Paper>
    </Grid>
  )
}