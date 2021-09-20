import { Typography, makeStyles, Container, Grid } from '@material-ui/core'
import TopBanner from '../../components/TopBanner'
import Image from 'next/image'
import MovingTable from '../../components/MovingTable'
import moving from '../../data/movingData'
import packing from '../../data/packingData'
import customerGroupOne from '../../data/customerGroupOneData'
import customerGroupTwo from '../../data/customerGroupTwoData'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: 'inline-block',
  },
  gridItem: {
    margin: 'auto',
    textAlign: 'center',
    padding: '0rem 1rem 0rem 1rem',
  },
  imageText: {
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
  text: {
    textAlign: 'left',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  rateBottom: {
    marginTop: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  rateTitle: { paddingBottom: '1rem', textAlign: 'center' },
  div: {
    backgroundColor: '#f8f8f8',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },

  heading: {
    textAlign: 'center',
    [theme.breakpoints.up('xs')]: {
      fontSize: '5vmax',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '4vmax',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3vmax',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.5vmax',
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
}))

export default function Recommendations() {
  const classes = useStyles()

  return (
    <>
      <TopBanner>
        <Typography variant='h2' className={classes.pageTitle}>
          Testimonials
        </Typography>
      </TopBanner>

      <>
        <div className={classes.div}>
          <Container maxWidth='lg'>
            <Grid container spacing={10}>
              <Grid item xs={12} md={5} lg={6} className={classes.gridItem}>
                <Typography variant='h3' style={{ color: '#CC2936' }}>
                  Experience
                </Typography>
                <Typography variant='h3' style={{ color: '#CC2936' }}>
                  Matters
                </Typography>
              </Grid>
              <Grid item xs={12} md={7} lg={6} className={classes.gridItem}>
                <Typography variant='h6' className={classes.text}>
                  Over the years we have successfully moved some of the most
                  affluent families in Illinois. Because of the privacy act we
                  cannot list the names of these people. Many of the top real
                  estate agents and brokers recommend our services to ensure
                  that their customer’s moving experience is a good one.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div
          style={{
            padding: '1rem',
            marginTop: '4rem',
          }}
        >
          <Typography
            variant='h3'
            className={classes.heading}
            style={{ marginBottom: '5rem' }}
          >
            Our Commerical Customers
          </Typography>

          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6} className={classes.gridItem}>
              <MovingTable data={customerGroupOne} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <MovingTable data={customerGroupTwo} />
            </Grid>
          </Grid>
        </div>
        <div style={{ padding: '3rem', backgroundColor: '#f8f8f8' }}></div>
      </>
    </>
  )
}
