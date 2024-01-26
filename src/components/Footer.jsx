import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../theme'

const Footer = () => {
  return (
    <Box justifyContent='center' alignItems='flex-end' >
      <Stack spacing={2} bgcolor={colors.primary[600]}>
        <Typography pt={5}>Contact</Typography>
        <Typography>admin@angycharms.com <br /> +1.234567890</Typography>
        <Typography>Terms of Service Privacy Policy Customer Support</Typography>
        <Typography pb={5}>Tapiwa Magondo made this website.</Typography>
      </Stack>
    </Box>
  )
}

export default Footer