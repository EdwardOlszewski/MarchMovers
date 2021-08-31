import {
  Typography,
  Paper,
  makeStyles,
  Container,
  Grid,
} from '@material-ui/core'
import TopBanner from '../components/TopBanner'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridItem: {
    margin: 'auto',
    textAlign: 'center',
    padding: '0rem 1rem 0rem 1rem',
  },
  imageText: {
    color: '#1B2021',
    [theme.breakpoints.up('md')]: {
      marginTop: '-6rem',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '5vw',
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: '2rem',
      fontSize: '7vw',
    },
  },
  imageTextTwo: {
    color: '#1B2021',
    [theme.breakpoints.only('sm')]: {
      fontSize: '5vw',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '7vw',
    },
  },
  aboutText: {
    textAlign: 'left',
    [theme.breakpoints.only('xl')]: {
      fontSize: '1vw',
    },
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <>
      <TopBanner>
        <Typography variant='h2'>Family owned &</Typography>
        <Typography variant='h3' style={{ color: '#CC2936' }}>
          operated since 1957
        </Typography>
      </TopBanner>

      <>
        <div style={{ backgroundColor: '#f8f8f8', padding: '2rem' }}>
          <Container maxWidth='lg'>
            <Grid container>
              <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                <Image
                  src='/images/familyPic.png'
                  width={'90%'}
                  height={'100%'}
                  layout={'responsive'}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8} className={classes.gridItem}>
                <Typography variant='h3' className={classes.imageText}>
                  We will protect your
                </Typography>
                <br />
                <Typography variant='h3' className={classes.imageTextTwo}>
                  family’s possessions
                </Typography>
                <br />
                <Typography variant='h3' className={classes.imageTextTwo}>
                  like a trusted friend
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
          }}
        >
          <Grid container spacing={10}>
            <Grid item xs={12} md={5} lg={6} className={classes.gridItem}>
              <Typography variant='h3' style={{ color: '#CC2936' }}>
                Owned and operated
              </Typography>
              <Typography variant='h3' style={{ color: '#CC2936' }}>
                by the March family
              </Typography>
              <Typography variant='h3' style={{ color: '#CC2936' }}>
                since 1957
              </Typography>
            </Grid>
            <Grid item xs={12} md={7} lg={6} className={classes.gridItem}>
              <Typography variant='h6' className={classes.aboutText}>
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

        <div
          style={{
            backgroundColor: '#f8f8f8',
            padding: '2rem',
            marginTop: '4rem',
          }}
        ></div>
      </>
    </>
  )
}
