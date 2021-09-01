import React from 'react'
import { makeStyles, Typography, Paper, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('xs')]: {
      height: '250px',
    },
    [theme.breakpoints.up('md')]: {
      height: '300px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '20vmax',
    },
  },
  title: {
    textAlign: 'center',
    margin: 'auto',
    paddingTop: '7rem',
  },
}))

export default function ButtonAppBar({ children }) {
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={0}>
      <Container className={classes.title}>{children}</Container>
    </Paper>
  )
}
