import {
  Typography,
  makeStyles,
  Container,
  Grid,
  Hidden,
} from '@material-ui/core'
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
    marginTop: '5rem',
  },
  whiteDiv: {
    padding: '2rem 0rem 2rem 0rem',
  },
  truckDiv: {
    paddingTop: '8rem',
    marginBottom: '-7rem',
  },
  container: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
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

  imageText: {
    paddingTop: '1rem',
  },

  text: {
    textAlign: 'left',
    fontWeight: 1,
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.2vmax',
    },
  },
  bannerText: {
    color: 'white',
  },
  textContainer: {
    paddingTop: '5rem',
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <>
      <TopBanner id='back-to-top-anchor' />

      <>
        <div className={classes.grayDiv}>
          <Container maxWidth='xl' className={classes.container}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={10}
                sm={5}
                md={4}
                lg={3}
                className={classes.gridItem}
              >
                <Grid>
                  <Image
                    src='/images/familyPic.png'
                    width={'90%'}
                    height={'100%'}
                    layout={'responsive'}
                    alt='familyPicture'
                  />
                </Grid>

                <Grid>
                  <Typography variant='h6' className={classes.imageText}>
                    We will protect your family’s possessions like a trusted
                    friend
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} md={8} lg={8} className={classes.gridItem}>
                <Grid item>
                  <Typography variant='h4'>
                    March Family Owned & Operated Since 1957
                  </Typography>
                </Grid>
                <br />
                <Grid item>
                  <Typography variant='h5' className={classes.text}>
                    Charles J March Sr. became licensed by the Illinois Commerce
                    Commission in 1957. Mr. March came from a family of 8 boys
                    and 7 girls of which all 8 boys started their working
                    careers in the moving business. Charles March Sr.’s father,
                    Percy March, and father-in-law, Heber Davis, both retired as
                    movers in the late 1950s.
                  </Typography>
                </Grid>
                <br />

                <Grid>
                  <Typography variant='h5' className={classes.text}>
                    Charles March Sr. also had a large family of his own: Bob,
                    the oldest, Jim, Jerry, John, Chuck Jr., and Cammie. All of
                    them worked for the family business some time during their
                    lives. Chuck Jr. purchased the company in 1990 and has owned
                    and operated it since. Charles J March Sr. would often show
                    up at moving jobs to make sure that all of the furniture was
                    padded and rubber banded correctly.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </>
    </>
  )
}
