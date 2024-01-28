import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import React from 'react'
import { colors } from '../theme'

const CustomerSupport = () => {
  return (
    <Box flexGrow={1}>
      <Typography variant='h3' align='left' color={colors.primary[700]} p={{ xs: 5, lg: 10 }}>Customer Support</Typography>
      <Grid container justifyContent='flex-start' alignItems='center' columns={{ sx: 6, md: 12 }}>
          <Grid item xs={6} px={{ xs: 5, lg: 10}} pb={{ xs: 5, lg: 10 }}>
              <Typography align='left'>
                  Have any queries? Do not hesitate contacting our customer support on 
                  <Link underline='hover' color={colors.primary[700]} href='mailto:support@angycharms.com?&amp;&amp;body=%5BCustomize%20body%20here%5D&amp;subject=%5BCustomize%20subject%20here%5D'> support@angycharms.com. </Link> 
                  You can click the button to send us an email.<br /><br />While we aim to respond within 1 working day, our response may be delayed due to unforseen challenges.
              </Typography>
          </Grid>
          <Grid item xs={6} px={{ xs: 5, lg: 10}} pb={{ xs: 5, lg: 10 }}>
              <Button 
                  variant='contained' 
                  // color={colors.primary[700]}
                  href='mailto:support@angycharms.com?&amp;&amp;body=%5BCustomize%20body%20here%5D&amp;subject=%5BCustomize%20subject%20here%5D'
                  size='large'
                  sx={{ 
                      borderRadius: '50px', 
                      bgcolor: `${colors.primary[600]}`,
                      px: 10, 
                      py: 2
                  }}
              >
                  Contact Support
              </Button>
          </Grid>
      </Grid>
    </Box>
  )
}

export default CustomerSupport