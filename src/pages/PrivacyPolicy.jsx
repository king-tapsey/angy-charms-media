import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { colors } from '../theme'

const PrivacyPolicy = () => {
  return (
    <Box flexGrow={1}>
      <Stack spacing={1} justifyContent='flex-start' alignItems='flex-start' p={{ xs: 5, lg: 10}}>
        <Typography variant='h3' pb={3} color={colors.primary[700]} >Privacy Policy</Typography>
        <Typography variant='h5' color={colors.primary[700]}>1. Information we Collect</Typography>
        <Typography variant='subtitle1' color={colors.primary[600]}>Contact Form Submissions</Typography>
        <Typography align='left'>
          When you contact us through our website, we collect the following information:<br />
          1. Your Name<br />
          2. Your Email Address<br />
          3. Your Phone Number (optional)<br />
          4. Any additional information you choose to provide in the message
        </Typography>

        <Typography variant='h5' color={colors.primary[700]}>2. How We Use Your Information</Typography>
        <Typography variant='subtitle1' color={colors.primary[600]}>Newsletter Subscription</Typography>
        <Typography align='left'>
          By providing your email address, you consent to receive newsletters from Angy Charms Media. We use your email address to send you updates, promotions, and information about our products and services.
        </Typography>
        <Typography variant='subtitle1' color={colors.primary[600]}>Marketing Communications</Typography>
        <Typography align='left'>
          We may use the information you provide to contact you regarding our products, services, and promotions. You can opt out of these communications at any time by following the unsubscribe instructions in the emails we send or by contacting us directly.
        </Typography>

        <Typography variant='h5' color={colors.primary[700]}>3. Information Sharing</Typography>
        <Typography align='left'>
          We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
        </Typography>

        <Typography variant='h5' color={colors.primary[700]}>4. Your Consent</Typography>
        <Typography align='left'>
          By using our website and providing your information, you consent to our privacy policy.
        </Typography>

        <Typography variant='h5' color={colors.primary[700]}>5. Your Rights</Typography>
        <Typography align='left'>
          You have the right to:<br />
          1. Access the personal information we hold about you.<br />
          2. Correct inaccuracies in your personal information.<br />
          3. Request the deletion of your personal information.<br />
          4. To exercise these rights or if you have any questions about our privacy practices, please contact us at 
          <Link underline='hover' color={colors.primary[700]} href='mailto:support@angycharms.com?&amp;&amp;body=%5BCustomize%20body%20here%5D&amp;subject=%5BCustomize%20subject%20here%5D'> support@angycharms.com. </Link> 
        </Typography>
      </Stack>
    </Box>
  )
}

export default PrivacyPolicy