import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Grid,
  Container,
  Typography,
  Divider,
  Hidden,
} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import BusinessIcon from '@material-ui/icons/Business'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'initial',
    marginBottom: 0,
    top: 'auto',
    backgroundColor: '#2b2b2b',
    textAlign: 'center',
    margin: 'auto',
    paddingTop: '5rem',
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
  truckDiv: {
    paddingTop: '5rem',
    marginBottom: '-100px',
    backgroundColor: 'white',
  },
}))

export default function BottomAppBar() {
  const classes = useStyles()
  const currentYear = new Date()

  return (
    <>
      <div className={classes.truckDiv}>
        <Container maxWidth='false'>
          <Grid container spacing={1}>
            <Hidden mdDown>
              <Grid item xs={12} sm={12} lg={6} className={classes.gridItem}>
                <Image
                  src='/images/truckLeft.png'
                  width={'100%'}
                  height={'40%'}
                  layout={'responsive'}
                  alt='truckPicture'
                />
              </Grid>
            </Hidden>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className={classes.gridItem}
            >
              <Image
                src='/images/truckRight.png'
                width={'100%'}
                height={'40%'}
                layout={'responsive'}
                alt='truckPicture2'
              />
            </Grid>
          </Grid>
        </Container>
      </div>
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
    </>
  )
}
