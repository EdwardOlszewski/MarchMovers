import React from 'react'
import { makeStyles, Typography, Container } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
  tblContainer: {
    textAlign: 'center',
    margin: 'auto',
    width: '100%',
  },
  title: {
    flex: '1 1 100%',
  },
})

export default function BasicTable({ width, title, data }) {
  const classes = useStyles()

  console.log(data)

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
              <TableCell style={{ borderColor: '#f2f2f2' }} align='center'>
                <Container
                  style={{
                    textAlign: 'left',
                    width,
                  }}
                >
                  <Typography variant='subtitle1'>{info.rate}</Typography>
                </Container>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
