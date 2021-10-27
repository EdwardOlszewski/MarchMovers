import React from 'react'
import { makeStyles, Typography, Paper, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
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
    paddingTop: '7vh',
  },
  paper: {
    marginTop: '6vh',
  },
}))

export default function ButtonAppBar({ children }) {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.paper}>
      <div className='mainTitle'>
        <div className={classes.textContainer}>
          <Typography variant='h4' className={classes.bannerText}>
            Sometimes It&apos;s A Long Way Home,
          </Typography>
          <Typography variant='h4' className={classes.bannerText}>
            But We&apos;ll Get You There Safely.
          </Typography>
        </div>
      </div>
    </Paper>
  )
}
