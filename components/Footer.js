import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Grid,
  Container,
  Typography,
  Divider,
} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import BusinessIcon from '@material-ui/icons/Business'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'initial',
    marginBottom: 0,
    top: 'auto',
    backgroundColor: '#2b2b2b',
    padding: '1rem',
    textAlign: 'center',
    margin: 'auto',
  },
  footerTitle: {
    textAlign: 'center',
  },
  copyright: {
    textAlign: 'center',
    padding: '4rem',
  },
  divider: {
    backgroundColor: '#3e3e3e',
    marginBottom: '1rem',
  },
  gridItem: {
    marginTop: '1rem',
  },
  link: {
    width: '100%',
    '&:hover': {
      opacity: '50%',
    },
  },
}))

export default function BottomAppBar() {
  const classes = useStyles()
  const currentYear = new Date()

  return (
    <AppBar className={classes.appBar}>
      <Container maxWidth='md' style={{ textAlign: 'left' }}>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Grid container className={classes.gridItem}>
              <Grid item xs={2} sm={1}>
                <PhoneIcon />
              </Grid>
              <Grid item xs={10} sm={11}>
                <a href='tel:+7084252800'>
                  <Typography variant='subtitle1' className={classes.link}>
                    (708) 425-2800
                  </Typography>
                </a>
              </Grid>
            </Grid>

            <Grid container className={classes.gridItem}>
              <Grid item xs={2} sm={1}>
                <EmailIcon />
              </Grid>
              <Grid item xs={10} sm={11}>
                <a href='mailto:marchmovers@gmail.com'>
                  <Typography variant='subtitle1' className={classes.link}>
                    marchmovers@gmail.com
                  </Typography>
                </a>
              </Grid>
            </Grid>

            <Grid container className={classes.gridItem}>
              <Grid item xs={2} sm={1}>
                <BusinessIcon />
              </Grid>
              <Grid item xs={10} sm={11}>
                <a href='http://maps.google.com/?q=10004 S 76th Ave Suite I Bridgeview, IL 60455'>
                  <Typography variant='subtitle1' className={classes.link}>
                    10004 S 76th Ave Suite I Bridgeview, IL 60455
                  </Typography>
                </a>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={6}>
            <Container
              style={{
                textAlign: 'left',
                width: '22rem',
              }}
            >
              <Typography variant='subtitle1' className={classes.gridItem}>
                Licensed, Insured, and Bonded
              </Typography>
              <Typography variant='subtitle1' className={classes.gridItem}>
                IL MC 16067 Interstate MC 708934 DOT
              </Typography>
              <Typography variant='subtitle1' className={classes.gridItem}>
                2011292
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.copyright}>
        <Divider className={classes.divider} />
        <Typography variant='caption' style={{ marginTop: '1rem' }}>
          © {currentYear.getFullYear()} MARCH MOVERS. ALL RIGHTS RESERVED.
        </Typography>
      </Container>
    </AppBar>
  )
}
