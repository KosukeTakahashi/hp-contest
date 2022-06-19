import * as React from 'react'
import { AppBar, Toolbar, Typography, Divider, useScrollTrigger } from '@mui/material'

export interface ElevationScrollProps {
  window?: () => Window
  children: React.ReactElement
}

const ElevationScroll = (props: ElevationScrollProps) => {
  const { children, window } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const CustomAppBar = () => {
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" elevation={0} color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" color="text.primary">
                tkh HP
            </Typography>
          </Toolbar>
          <Divider />
        </AppBar>
      </ElevationScroll>
    </React.Fragment>)
}

export default CustomAppBar
