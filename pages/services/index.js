import { Typography, makeStyles, Container, Grid } from '@material-ui/core'
import TopBanner from '../../components/TopBanner'
import Image from 'next/image'
import MovingTable from '../../components/MovingTable'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  gridItem: {
    margin: 'auto',
    textAlign: 'center',
  },
  text: {
    textAlign: 'left',
    fontWeight: 1,
  },
  heading: {
    textAlign: 'center',
    paddingTop: '2rem',
  },
  rateBottom: {
    textAlign: 'left',
    padding: '.5rem',
    fontWeight: 1,
  },
  div: {
    backgroundColor: '#f8f8f8',

    paddingBottom: '2rem',
  },
  packingSub: {
    marginTop: '1rem',
    textAlign: 'center',
  },
  serviceList: {
    color: '#CC2936',
  },
  btmRateContainer: {
    marginTop: '2rem',
    paddingBottom: '2rem',
    [theme.breakpoints.up('lg')]: {
      width: '90%',
    },
  },
  pageTitle: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '5vmax',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '3vmax',
    },
  },
}))

export default function Services({ movingRates, packingRates }) {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <TopBanner>
        <Typography variant='h2' className={classes.pageTitle}>
          What We Offer
        </Typography>
      </TopBanner>

      <>
        <div className={classes.div}>
          <Container maxWidth='lg'>
            <Typography
              variant='h3'
              style={{ color: '#CC2936', marginBottom: '4rem' }}
              className={classes.heading}
            >
              Low Cost Storage
            </Typography>
            <Grid container spacing={10}>
              <Grid item xs={12} sm={12} md={6} className={classes.gridItem}>
                <Typography variant='h5' className={classes.text}>
                  We offer a state-of-the-art indoor storage facility. All
                  furniture is containerized in 5′ x 7′ x 7′ storage vaults.
                  Each vault will hold approximately one room of furniture.
                  These vaults are sealed shut and almost air tight. This allows
                  our storage customers to leave their antiques and treasured
                  furniture for long periods of time without risk of damage. Our
                  warehouse is equipped with a 24-hour video surveillance
                  system, sprinkler system, as well as a newly replaced roof.
                  All oversize furniture is wrapped in moving blankets,
                  shrink-wrapped, and stored in our racking system.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} className={classes.gridItem}>
                <Typography variant='h5' className={classes.text}>
                  The warehouse is not open to the public. Furniture can be
                  accessed by appointment only. The customer will receive an
                  itemized list of all items stored and the condition of these
                  items prior to storing them. All padding and protection for
                  furniture being stored is included free. All furniture is
                  covered under our scratch and nick policy at no charge. March
                  Movers should be listed as “additional insured” on storage
                  customers’ homeowner’s or renter’s policy for all catastrophic
                  damages (eg: fire, tornado, flooding, etc.). March Movers does
                  not supply this type of insurance coverage.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div
          style={{
            width: '100%',
            textAlign: 'center',
            margin: 'auto',
            marginTop: '3rem',
            marginBottom: '3rem',
          }}
        >
          <Container maxWidth='lg'>
            <Grid container spacing={5}>
              <Grid item xs={10} sm={5} md={4} className={classes.gridItem}>
                <Image
                  src='/images/1.png'
                  width={'90%'}
                  height={'70%'}
                  layout={'responsive'}
                  alt='storagePicture1'
                />
              </Grid>
              <Grid item xs={10} sm={5} md={4} className={classes.gridItem}>
                <Image
                  src='/images/2.png'
                  width={'90%'}
                  height={'70%'}
                  layout={'responsive'}
                  alt='storagePicture2'
                />
              </Grid>
              <Grid item xs={10} sm={5} md={4} className={classes.gridItem}>
                <Image
                  src='/images/3.png'
                  width={'90%'}
                  height={'70%'}
                  layout={'responsive'}
                  alt='storagePicture3'
                />
              </Grid>
            </Grid>
          </Container>
        </div>

        <div
          style={{
            backgroundColor: '#f8f8f8',
            padding: '2rem',
            paddingTop: '4rem',
          }}
        >
          <Container maxWidth='lg'>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                sm={6}
                md={5}
                lg={6}
                className={classes.gridItem}
              >
                <Typography className={classes.serviceList} variant='h4'>
                  Expert Packing
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={7}
                lg={6}
                className={classes.gridItem}
              >
                <Typography variant='h5' className={classes.text}>
                  All furniture is padded & rubberbanded in the home before it
                  is moved.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div
          style={{
            backgroundColor: '#f8f8f8',
            padding: '2rem',
            paddingTop: '4rem',
          }}
        >
          <Container maxWidth='lg'>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                sm={6}
                md={5}
                lg={6}
                className={classes.gridItem}
              >
                <Typography className={classes.serviceList} variant='h4'>
                  Pianos & Organs
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={7}
                lg={6}
                className={classes.gridItem}
              >
                <Typography variant='h5' className={classes.text}>
                  Over the years, many piano companies have used our services
                  for pianos that their moving crews couldn&apos;t deliver.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div
          style={{
            backgroundColor: '#f8f8f8',
            padding: '2rem',
            paddingTop: '4rem',
          }}
        >
          <Container maxWidth='lg'>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                sm={6}
                md={5}
                lg={6}
                className={classes.gridItem}
              >
                <Typography className={classes.serviceList} variant='h4'>
                  Hoisting services
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={7}
                lg={6}
                className={classes.gridItem}
              >
                <Typography variant='h5' className={classes.text}>
                  We offer hoisting serivces on large bulk items. Couches, large
                  Tv's, etc..
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Container maxWidth='lg'>
            <Typography
              variant='h4'
              style={{ marginBottom: '4rem' }}
              className={classes.heading}
            >
              Our Rates
            </Typography>
            <Grid container spacing={10}>
              <Grid item xs={12} sm={6} md={6} className={classes.gridItem}>
                <MovingTable
                  width={'100%'}
                  title={'Moving Rates'}
                  data={movingRates.data}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <MovingTable
                  width={'100%'}
                  title={'Packing Rates'}
                  data={packingRates.data}
                />
                <Typography variant='subtitle2' className={classes.packingSub}>
                  All packing includes materials and labor
                </Typography>
              </Grid>
            </Grid>
            <Container className={classes.btmRateContainer}>
              <Typography variant='subtitle1' className={classes.rateBottom}>
                * Travel times based on Bridgeview, IL to origin city and
                destination city back to Bridgeview, IL.
              </Typography>
              <Typography variant='subtitle1' className={classes.rateBottom}>
                * Local moving charges will be based on our time with you plus
                our time to and from your pickup and delivery addresses.
              </Typography>
              <Typography variant='subtitle1' className={classes.rateBottom}>
                * Long distance moving will be based on weight of the shipment
                and miles between the origin and destination.
              </Typography>
            </Container>
          </Container>
        </div>
        <div style={{ padding: '3rem', backgroundColor: '#f8f8f8' }}></div>
      </>
    </>
  )
}

export const getStaticProps = async () => {
  const [movingRatesRes, packingRatesRes] = await Promise.all([
    fetch(`${process.env.PRODUCTION_URL}/api/movingrates`),
    fetch(`${process.env.PRODUCTION_URL}/api/packingrates`),
  ])

  const [movingRates, packingRates] = await Promise.all([
    movingRatesRes.json(),
    packingRatesRes.json(),
  ])

  return { props: { movingRates, packingRates } }
}
