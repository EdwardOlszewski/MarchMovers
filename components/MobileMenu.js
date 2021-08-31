import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { makeStyles, Hidden, IconButton } from '@material-ui/core'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  hamburgerIcon: {
    marginTop: '-1rem',
    color: 'black',
  },
})

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
    >
      <List>
        <Link href='/'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </Link>

        <Link href='/services'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <AssignmentOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Services'} />
          </ListItem>
        </Link>

        <Link href='/recommendations'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <ThumbUpOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Recommendations'} />
          </ListItem>
        </Link>
      </List>

      <Divider />

      <List>
        <a href='tel:+7084252800'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <PhoneOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'(708) 425-2800 '} />
          </ListItem>
        </a>

        <a href='mailto:marchmovers@gmail.com'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <EmailOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'marchmovers @gmail.com'} />
          </ListItem>
        </a>

        <a href='http://maps.google.com/?q=10004 S 76th Ave Suite I Bridgeview, IL 60455'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <BusinessOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={'10004 S 76th Ave Suite I Bridgeview, IL 60455'}
            />
          </ListItem>
        </a>
      </List>
    </div>
  )

  return (
    <Hidden lgUp>
      <React.Fragment key={'left'}>
        <IconButton
          onClick={toggleDrawer('left', true)}
          className={classes.hamburgerIcon}
        >
          <MenuIcon fontSize='large' />
        </IconButton>

        <SwipeableDrawer
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </Hidden>
  )
}
