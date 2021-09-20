import { Typography, makeStyles, Container, Grid } from '@material-ui/core'
import TopBanner from '../components/TopBanner'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  //Containers
  gridItem: {
    margin: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('xl')]: {
      padding: '0rem 1rem 0rem 1rem',
    },
  },
  grayDiv: {
    backgroundColor: '#f8f8f8',
    padding: '2rem 0rem 2rem 0rem',
  },
  container: {
    [theme.breakpoints.up('xs')]: {
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '60%',
    },
  },

  //Top Of Page
  pageTitle: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '5vmax',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '3vmax',
    },
  },

  //Image Area
  imageText: {
    color: '#1B2021',
    [theme.breakpoints.up('xs')]: {
      fontSize: '4vmax',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2vmax',
    },
  },

  //About Area
  aboutHeading: {
    color: '#CC2936',
    [theme.breakpoints.up('xs')]: {
      fontSize: '4vmax',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2vmax',
    },
  },
  aboutText: {
    textAlign: 'left',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3vmax',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2vmax',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3vmax',
    },
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <>
      <TopBanner id='back-to-top-anchor'>
        <Typography variant='h2' className={classes.pageTitle}>
          Family owned &
        </Typography>
        <Typography
          variant='h3'
          className={classes.pageTitle}
          style={{ color: '#CC2936' }}
        >
          operated since 1957
        </Typography>
      </TopBanner>

      <>
        <div className={classes.grayDiv}>
          <Container maxWidth='false' className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5} md={4} className={classes.gridItem}>
                <Image
                  src='/images/familyPic.png'
                  width={'90%'}
                  height={'100%'}
                  layout={'responsive'}
                />
              </Grid>
              <Grid item xs={12} sm={7} md={8} className={classes.gridItem}>
                <Typography variant='h3' className={classes.imageText}>
                  We will protect your family’s
                </Typography>
                <br />
                <Typography variant='h3' className={classes.imageText}>
                  possessions like a trusted friend
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div
          style={{
            width: '90%',
            textAlign: 'center',
            margin: 'auto',
            marginTop: '5rem',
            paddingBottom: '2rem',
          }}
        >
          <Grid container spacing={10}>
            <Grid item xs={12} md={5} lg={5} className={classes.gridItem}>
              <Typography variant='h3' className={classes.aboutHeading}>
                Owned and operated by the
              </Typography>
              <br />
              <Typography variant='h3' className={classes.aboutHeading}>
                March family since 1957
              </Typography>
            </Grid>
            <Grid item xs={12} md={7} lg={7} className={classes.gridItem}>
              <Typography variant='h5' className={classes.aboutText}>
                Charles J March Sr. became licensed by the Illinois Commerce
                Commission in 1957. Mr. March came from a family of 8 boys and 7
                girls of which all 8 boys started their working careers in the
                moving business. Charles March Sr.’s father, Percy March, and
                father-in-law, Heber Davis, both retired as movers in the late
                1950s. Charles March Sr. also had a large family of his own:
                Bob, the oldest, Jim, Jerry, John, Chuck Jr., and Cammie. All of
                them worked for the family business some time during their
                lives. Chuck Jr. purchased the company in 1990 and has owned and
                operated it since. Charles J March Sr. would often show up at
                moving jobs to make sure that all of the furniture was padded
                and rubber banded correctly.
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className={classes.grayDiv}>
          <Container maxWidth='false' className={classes.container}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={5} md={6} className={classes.gridItem}>
                <Image
                  src='/images/4.png'
                  width={'100%'}
                  height={'80%'}
                  layout={'responsive'}
                />
              </Grid>
              <Grid item xs={12} sm={5} md={6} className={classes.gridItem}>
                <Image
                  src='/images/5.png'
                  width={'100%'}
                  height={'80%'}
                  layout={'responsive'}
                />
              </Grid>
            </Grid>
          </Container>
        </div>

        <div style={{ padding: '3rem' }}></div>
      </>
    </>
  )
}
