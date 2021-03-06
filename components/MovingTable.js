import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  table: {
    textAlign: 'center',
    margin: 'auto',

    [theme.breakpoints.up('xs')]: {
      width: '70vmin',
    },
    [theme.breakpoints.up('md')]: {
      width: '50vmin',
    },
    [theme.breakpoints.up('xl')]: {
      width: '40vmin',
    },
  },

  title: {
    flex: '1 1 100%',
    paddingBottom: '.5rem',
  },
  text: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '2vmax',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vmax',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1vmax',
    },
  },
  innerDiv: {
    textAlign: 'left',
    margin: 'auto',

    [theme.breakpoints.up('xs')]: {
      width: '60vmin',
    },

    [theme.breakpoints.up('md')]: {
      width: '50vmin',
    },
    [theme.breakpoints.up('xl')]: {
      width: '40vmin',
    },
  },
  tblContainer: {
    overflow: 'hidden',
  },
}))

export default function BasicTable({ title, data }) {
  const classes = useStyles()

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      className={classes.tblContainer}
    >
      <Table className={classes.table} aria-label='simple table'>
        <Typography
          className={classes.title}
          variant='h5'
          id='tableTitle'
          component='div'
        >
          {title}
        </Typography>

        <TableBody>
          {data.map((info) => (
            <TableRow key={info.rate}>
              <TableCell key={info.rate} style={{ borderColor: '#f2f2f2' }}>
                <div className={classes.innerDiv}>
                  <Typography variant='subtitle1' className={classes.text}>
                    {info.name}
                  </Typography>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
