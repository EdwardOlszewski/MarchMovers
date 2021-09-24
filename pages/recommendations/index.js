import { Typography, makeStyles, Container, Grid } from '@material-ui/core'
import TopBanner from '../../components/TopBanner'
import MovingTable from '../../components/MovingTable'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  gridItem: {
    margin: 'auto',
    textAlign: 'center',
    padding: '0rem 1rem 0rem 1rem',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  div: {
    backgroundColor: '#f8f8f8',
    paddingBottom: '3rem',
  },
  text: {
    textAlign: 'left',
    fontWeight: 1,
  },
}))

export default function Recommendations({ companies }) {
  const classes = useStyles()
  let dataArray1 = []
  let dataArray2 = []
  const mainArrayLenght = companies.length

  for (let i = 0; i < mainArrayLenght; i++) {
    if (i < mainArrayLenght / 2) {
      dataArray1[i] = companies[i]
    } else {
      dataArray2[i] = companies[i]
    }
  }

  return (
    <>
      <Head>
        <title>Testimonials</title>
      </Head>
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
                <Typography variant='h5' className={classes.text}>
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
            marginTop: '3rem',
            marginBottom: '2rem',
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
              <MovingTable data={dataArray1} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <MovingTable data={dataArray2} />
            </Grid>
          </Grid>
        </div>
        <div style={{ padding: '3rem', backgroundColor: '#f8f8f8' }}></div>
      </>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.PRODUCTION_URL}/api/companies`)
  const { data } = await res.json()

  return {
    props: {
      companies: data,
    },
  }
}
