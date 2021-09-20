import React from 'react'
import Link from 'next/link'
import { makeStyles, Hidden } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MobileMenu from './MobileMenu'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  zoom: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
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
    [theme.breakpoints.up('sm')]: {
      paddingRight: '4rem',
      paddingLeft: '4rem',
    },
  },
  title: {
    flexGrow: 1,
    color: '#CC2936',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3.5vmax',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3vmax',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2vmax',
    },
  },
}))

function ScrollTop(props) {
  const { children, window } = props
  const classes = useStyles()

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.zoom}>
        {children}
      </div>
    </Zoom>
  )
}

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root} id='back-to-top-anchor'>
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

          <MobileMenu />
          <ScrollTop>
            <Fab
              style={{ backgroundColor: '#CC2936', color: 'white' }}
              size='small'
              aria-label='scroll back to top'
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Toolbar>
      </AppBar>
    </div>
  )
}
