import React from 'react'
import { makeStyles, Typography, Paper, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('xs')]: {
      height: '300px',
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
    paddingBottom: '3rem',
  },
  bannerText: {
    color: 'white',
  },
  textContainer: {
    paddingTop: '5rem',
  },
}))

export default function ButtonAppBar({ children }) {
  const classes = useStyles()

  return (
    <Paper elevation={0}>
      <Container className={classes.title}>
        <div className='mainTitle'>
          <div className={classes.textContainer}>
            <Typography variant='h5' className={classes.bannerText}>
              sometimes it&apos;s a long way home,
            </Typography>
            <Typography variant='h5' className={classes.bannerText}>
              but we&apos;ll get you there safely.
            </Typography>
          </div>
        </div>
      </Container>
    </Paper>
  )
}
