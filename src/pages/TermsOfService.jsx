import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../theme'

const TermsOfService = () => {
  return (
    <Box flexGrow={1}>
      <Stack spacing={1} justifyContent='flex-start' alignItems='flex-start' p={{ xs: 5, lg: 10}}>
        <Typography variant='h3' pb={2} color={colors.primary[700]} >Terms of Service</Typography>
        <Typography variant='h5' color={colors.primary[700]}>1. Acceptance of Terms</Typography>
        <Typography align='left'>
          By accessing or using the services provided by Angy Charms Media, you agree to be bound by these Terms of Service.
        </Typography>
        <Typography variant='h5' color={colors.primary[700]}>2. Use of Services</Typography>
        <Typography align='left'>
          You must be at least 18 years old(or the applicable adult age in your country) to use our services.
          You are responsible for maintaining the confidentiality of your account information.
          You agree to use our services for lawful purposes only.
        </Typography>
        <Typography variant='h5' color={colors.primary[700]}>3. Privacy</Typography>
        <Typography align='left'>
          Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
        </Typography>
        <Typography variant='h5' color={colors.primary[700]}>4. Termination of Services</Typography>
        <Typography align='left'>
          We reserve the right to terminate or suspend your relationship with us and access to our services at our sole discretion, without notice, for any conduct that we believe violates these Terms of Service or is in breach of any law.
        </Typography>
        <Typography variant='h5' color={colors.primary[700]}>5. Limitation of Liability</Typography>
        <Typography align='left'>
          Angy Charms Media is not liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our services.
        </Typography>
        <Typography variant='h5' color={colors.primary[700]}>6. Changes to Terms</Typography>
        <Typography align='left'>
          We reserve the right to update or modify these Terms of Service at any time. Any changes will be effective immediately upon posting to this page.
        </Typography>
        <Typography variant='h5' color={colors.primary[700]}>7. Governing Law</Typography>
        <Typography align='left'>
          These Terms of Service are governed by and construed in accordance with the laws of The United States of America.
        </Typography>
        <Typography variant='h5' color={colors.primary[700]}>8. Contact Information</Typography>
        <Typography align='left'>
          If you have any questions about these Terms of Service, please contact us at support@angycharms.com.
        </Typography>
      </Stack>
    </Box>
  )
}

export default TermsOfService