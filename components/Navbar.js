import React from 'react'
import Link from 'next/link'
import { makeStyles, Hidden } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MobileMenu from './MobileMenu'

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
    boxShadow: 'rgba(0, 0, 0, 0.03) 0px 1px 2px 0px',
  },
  toolbar: {
    paddingRight: '4rem',
    paddingLeft: '4rem',
  },
  title: {
    flexGrow: 1,
    color: '#CC2936',
    fontSize: '250%',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position='fixed' elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h5' className={classes.title}>
            March Movers
          </Typography>
          <Hidden smDown>
            <Link href='/'>
              <Button className={classes.menuButton}>Home</Button>
            </Link>

            <Link href='/services'>
              <Button className={classes.menuButton}>services</Button>
            </Link>

            <Link href='/recommendations'>
              <Button className={classes.menuButton}>Recommendations</Button>
            </Link>
          </Hidden>

          <Hidden mdUp>
            <MobileMenu />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  )
}
