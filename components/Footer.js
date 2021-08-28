import React from 'react'
import { makeStyles, AppBar, Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'initial',

    marginBottom: 0,
    top: 'auto',
    backgroundColor: '#2b2b2b',
  },
}))

export default function BottomAppBar() {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar}>
      <Toolbar></Toolbar>
    </AppBar>
  )
}
