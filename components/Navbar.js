import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: 'black',
    marginRight: theme.spacing(3),
    fontSize: '120%',
    [theme.breakpoints.only('xl')]: {
      fontSize: '1vw',
    },
  },
  appBar: {
    backgroundColor: 'white',
  },
  toolbar: {
    paddingRight: '4rem',
    paddingLeft: '4rem',
  },
  title: {
    flexGrow: 1,
    color: 'black',
    fontSize: '200%',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position='static' elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6' className={classes.title}>
            March Movers
          </Typography>
          <Link href='/'>
            <Button className={classes.menuButton}>Home</Button>
          </Link>

          <Link href='/recommendation'>
            <Button className={classes.menuButton}>Services</Button>
          </Link>

          <Link href='/recommendation'>
            <Button className={classes.menuButton}>Recommendations</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
