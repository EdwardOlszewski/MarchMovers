import { Typography, makeStyles, Container, Grid } from '@material-ui/core'
import TopBanner from '../../components/TopBanner'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  gridItem: {
    margin: 'auto',
    textAlign: 'center',
    padding: '0rem 1rem 0rem 1rem',
  },
  grayDiv: {
    backgroundColor: '#f8f8f8',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  whiteDiv: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
}))

export default function Recommendations({ companies }) {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Reviews</title>
      </Head>
      <TopBanner>
        <Typography variant='h2' className={classes.pageTitle}>
          Reviews
        </Typography>
      </TopBanner>
      <>
        <div className={classes.grayDiv}>
          <Container maxWidth='lg'>gray div</Container>
        </div>

        <div className={classes.whiteDiv}>
          <Container maxWidth='lg'>
            <Typography variant='h2' className={classes.pageTitle}>
              Reviews
            </Typography>
          </Container>
        </div>
      </>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.PRODUCTION_URL}/api/companies`)
  const { data } = await res.json()

  return {
    props: {
      companies: data,
    },
  }
}
