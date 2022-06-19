import * as React from 'react'
import { AppBar, Button, Divider, Grid, Link, Paper, Step, StepContent, StepLabel, Stepper, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { NextPage } from 'next'
import Head from 'next/head'
import WithSidePanel, { SidePanelSelection } from './_withsidepanel'
import CustomAppBar from './_customAppBar'
import styles from '../styles/History.module.css'

const History: NextPage = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  const history = [
    {
      title: "2001 誕生",
      events: [
        {
          at: "3月7日",
          desc: "徳島市末広で生まれる",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22235.36135857945!2d134.56464599583617!3d34.06166306183027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35536d16bcbb1b3f%3A0xe57d693159ad584c!2z44CSNzcwLTA4NjYg5b6z5bO255yM5b6z5bO25biC5pyr5bqD!5e0!3m2!1sja!2sjp!4v1655019249850!5m2!1sja!2sjp",
        },
      ],
    },
    {
      title: "2003 引越",
      events: [
        {
          at: null,
          desc: "松茂町へ引越",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26421.620592147734!2d134.5751493122335!3d34.12836333228156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35536ef3f5fdd441%3A0xb610aad0dc85ef54!2z5b6z5bO255yM5p2_6YeO6YOh5p2-6IyC55S6!5e0!3m2!1sja!2sjp!4v1655020376221!5m2!1sja!2sjp",
        },
      ],
    },
    {
      title: "2006 引越",
      events: [
        {
          at: "4月",
          desc: "滋賀県大津市へ引越",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26123.448035204652!2d135.83379953976566!3d35.07096228112189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010af8c2fd0b67%3A0x3d922659c8166adf!2z44CSNTIwLTAxMTMg5ruL6LOA55yM5aSn5rSl5biC5Z2C5pys!5e0!3m2!1sja!2sjp!4v1655020499572!5m2!1sja!2sjp",
        },
      ],
    },
    {
      title: "2007 小学校入学",
      events: [
        {
          at: "4月",
          desc: "滋賀県大津市立坂本小学校入学",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.5469004139945!2d135.87288793620925!3d35.06806563675724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010afd98cf7805%3A0xaa3bcd2370c4fdec!2z44CSNTIwLTAxMTMg5ruL6LOA55yM5aSn5rSl5biC5Z2C5pys77yT5LiB55uu77yR77yS4oiS77yV77yXIOWkp-a0peW4gueri-WdguacrOWwj-WtpuagoQ!5e0!3m2!1sja!2sjp!4v1655021117179!5m2!1sja!2sjp",
        },
      ],
    },
    {
      title: "2011 引越・転校",
      events: [
        {
          at: "3月",
          desc: "松茂町へ引越",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26421.620592147734!2d134.5751493122335!3d34.12836333228156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35536ef3f5fdd441%3A0xb610aad0dc85ef54!2z5b6z5bO255yM5p2_6YeO6YOh5p2-6IyC55S6!5e0!3m2!1sja!2sjp!4v1655020376221!5m2!1sja!2sjp",
        },
        {
          at: "4月",
          desc: "松茂町立松茂小学校へ転校",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.657534629286!2d134.58834212991061!3d34.12951613472064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35536ef655c79181%3A0xfeee94ee390ec2fc!2z5p2-6IyC55S656uL5p2-6IyC5bCP5a2m5qCh!5e0!3m2!1sja!2sjp!4v1655021161034!5m2!1sja!2sjp",
        },
      ],
    },
    {
      title: "2013 小学校卒・中学入学",
      events: [
        {
          at: "3月",
          desc: "松茂町立松茂小学校を卒業",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.657534629286!2d134.58834212991061!3d34.12951613472064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35536ef655c79181%3A0xfeee94ee390ec2fc!2z5p2-6IyC55S656uL5p2-6IyC5bCP5a2m5qCh!5e0!3m2!1sja!2sjp!4v1655021161034!5m2!1sja!2sjp",
        },
        {
          at: "4月",
          desc: "松茂町立松茂中学校に入学",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6733.744294553724!2d134.58489493878562!3d34.12929536024286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35536ef5d383a33f%3A0x98803f117ebf1839!2z5p2-6IyC55S656uL5p2-6IyC5Lit5a2m5qCh!5e0!3m2!1sja!2sjp!4v1655021013694!5m2!1sja!2sjp",
        },
      ],
    },
    {
      title: "2016 中学卒・高校入学",
      events: [
        {
          at: "3月",
          desc: "松茂町立松茂中学校を卒業",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6733.744294553724!2d134.58489493878562!3d34.12929536024286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35536ef5d383a33f%3A0x98803f117ebf1839!2z5p2-6IyC55S656uL5p2-6IyC5Lit5a2m5qCh!5e0!3m2!1sja!2sjp!4v1655021013694!5m2!1sja!2sjp",
        },
        {
          at: "4月",
          desc: "徳島県立徳島北高等学校に入学",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8310.567764563804!2d134.53122857002748!3d34.12543119880506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35537222d16cfe0f%3A0x136f180863cb1f!2z5b6z5bO255yM56uL5b6z5bO25YyX6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1655021211936!5m2!1sja!2sjp",
        },
      ],
    },
    {
      title: "2019 高校卒・大学入学",
      events: [
        {
          at: "3月",
          desc: "徳島県立徳島北高等学校を卒業",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8310.567764563804!2d134.53122857002748!3d34.12543119880506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35537222d16cfe0f%3A0x136f180863cb1f!2z5b6z5bO255yM56uL5b6z5bO25YyX6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1655021211936!5m2!1sja!2sjp",
        },
        {
          at: "4月",
          desc: "徳島大学に入学",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26439.635950131476!2d134.54929429934887!3d34.07068077718819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35536d7198123267%3A0x83643d6ef43018af!2z5b6z5bO25aSn5a2m!5e0!3m2!1sja!2sjp!4v1655020950347!5m2!1sja!2sjp",
        },
      ],
    },
    {
      title: "2022 現在",
      events: [
        {
          at: null,
          desc: "理工学部4年",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26439.635950131476!2d134.54929429934887!3d34.07068077718819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35536d7198123267%3A0x83643d6ef43018af!2z5b6z5bO25aSn5a2m!5e0!3m2!1sja!2sjp!4v1655020950347!5m2!1sja!2sjp"
        }
      ]
    }
  ]

  const [mapURL, setMapURL] = React.useState(history[0].events[0].map)

  return (
    <div>
      <Head>
        <title>tkh HP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <CustomAppBar />
      </header>

      <main>
        <WithSidePanel selection={SidePanelSelection.HISTORY}>
          <Box sx={{ padding: 2 }}>
            <Typography variant="h5" component="div">経歴</Typography>
            <Grid container sx={{ mt: 2 }}>
              <Grid item xs={4}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  { history.map((h, i, _) => (
                    <Step key={i}>
                      <StepLabel
                        onClick={() => {
                          setActiveStep(i)
                          setMapURL(history[i].events[0].map)
                        }}>
                          { h.title }
                      </StepLabel>
                      <StepContent>
                        { h.events.map((e, j, _) => (
                          <Typography key={`history-item-${j}`}>
                            { e.at ? `${e.at} ` : "" }
                            <Link href="#" onClick={() => { setMapURL(e.map) }}>
                              { e.desc }
                            </Link>
                          </Typography>
                        ))}
                        {
                          (i < history.length - 1)
                            ? <Button
                                variant="text"
                                sx={{ mt: 2, ml: 20 }}
                                onClick={() => {
                                  setActiveStep(i+1)
                                  setMapURL(history[i+1].events[0].map)
                                }}>
                                  次へ
                              </Button>
                            : null
                        }
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </Grid>
              <Grid item xs={8}>
                <Paper variant="outlined" sx={{ height: 602 }}>
                  <iframe className={styles.map} src={mapURL} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </WithSidePanel>
      </main>
    </div>
  )
}

export default History
