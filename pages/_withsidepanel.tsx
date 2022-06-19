import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Box, Paper } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import HistoryIcon from '@mui/icons-material/History'
import InfoIcon from '@mui/icons-material/Info'
import Link from 'next/link'
import { ReactNode } from 'react'
import styles from '../styles/WithSidePanel.module.css'

export enum SidePanelSelection {
  DASHBOARD = 0,
  HISTORY = 1,
  ABOUT = 2
}

interface WithSidePanelProps {
  selection: SidePanelSelection
  children?: ReactNode
}

function WithSidePanel(props: WithSidePanelProps) {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100%", pt: 4 }}>
      <div className={styles.withsidepanel}>
        <div className={styles.sidepanel}>
          {/* <List sx={{ width: 300, bgcolor: "background.paper" }}> */}
          <List sx={{ width: 300, bgcolor: "background.default" }}>
            {/* <ListItem selected={props.selection === SidePanelSelection.DASHBOARD} disablePadding> */}
            <ListItem dense>
              <Link href="/dashboard">
                <ListItemButton selected={props.selection === SidePanelSelection.DASHBOARD} className={styles.listItem}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="概略"/>
                </ListItemButton>
              </Link>
            </ListItem>
            {/* <ListItem selected={props.selection === SidePanelSelection.HISTORY} disablePadding> */}
            <ListItem dense>
              <Link href="/history">
                <ListItemButton selected={props.selection === SidePanelSelection.HISTORY} className={styles.listItem}>
                  <ListItemIcon>
                    <HistoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="経歴"/>
                </ListItemButton>
              </Link>
            </ListItem>
            {/* <ListItem selected={props.selection === SidePanelSelection.ABOUT} disablePadding> */}
            <ListItem dense>
              <Link href="/about">
                <ListItemButton selected={props.selection === SidePanelSelection.ABOUT} className={styles.listItem}>
                  <ListItemIcon>
                   <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About"/>
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
          {/* <Divider orientation="vertical"/> */}
        </div>
        <div className={styles.content}>
          <Paper sx={{ mr: 4, mb: 4}}>
            { props.children }
          </Paper>
        </div>
      </div>
    </Box>
  )
}

export default WithSidePanel
