import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { colors } from '../theme'
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box justifyContent='center' alignItems='flex-end' >
      <Stack spacing={2} bgcolor={colors.primary[600]}>
        <Typography pt={5}>Contact</Typography>
        <Box>
          <Link underline='hover' color='inherit' href='mailto:admin@angycharms.com?&amp;&amp;body=%5BCustomize%20body%20here%5D&amp;subject=%5BCustomize%20subject%20here%5D'>admin@angycharms.com <br/></Link>
          <Link underline='hover' color='inherit' href='tel:+1 (782) 772-2979'>+1 (782) 772-2979</Link>
        </Box>
        <Box pb={5}>
          <Link underline='hover' color='inherit' component={RouterLink} to='terms-of-service'>Terms of Service </Link> 
          <Link underline='hover' color='inherit' component={RouterLink} to='privacy-policy'>Privacy Policy </Link> 
          <Link underline='hover' color='inherit' component={RouterLink} to='customer-support'>Customer Support</Link>
        </Box>
      </Stack>
    </Box>
  )
}

export default Footer