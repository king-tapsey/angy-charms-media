import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { colors } from '../theme'
import Lion from '../images/lion.jpg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Home = () => {
    const [expanded, setExpanded] = useState('panel1')
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : '')
    }
    return (
        <>
            <Box
                spacing={2}
                sx={{
                    display: 'center', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height:'70vh',
                    width: '100%',
                    bgcolor: colors.primary[900],
                    backgroundImage: `url(${Lion})`,
                    backgroundSize: 'cover'
                }}
            >
                <Stack alignItems='center' spacing={2} sx={{ px: {xs: 2, md: 5, lg: 20 } }}>
                    <Typography variant='h2' color='primary'>Marketing that cannot be ignored</Typography>
                    <Typography variant='p' color='white'>
                        Introducing your business to marketing that echoes your brand into unreachable audiences. 
                        Where Marketing Campaigns reach for more than creating awareness, but grow into creating movements and momentum in the marketplace!
                    </Typography>
                </Stack>
            </Box>
            <Box
                spacing={2}
                sx={{
                    display: 'center', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height:'60vh',
                    // width: '100%',
                    bgcolor: colors.primary[100]
                }}
            >
                <Container sx={{ px: {sx: 5, md: 10}, justifyContent: 'space-between', alignContent: ''}}>
                    <Stack alignItems='center' spacing={2}>
                        <Typography variant='p'>
                            At Angy Charms Media, out goal is to create marketing campaigns that will get your brand noticed. 
                            We utilize rarely known marketing techniques to drive leads, capture customer attention and foster customer loyalty. 
                            Whether your business is starting out or establlished, you can trust us with product launch campaigns, social media presence growth, online advertising, email marketing - whatever you need! 
                            Consider contacting us today and let's embark on a journey to your business gaining market dominance.
                        </Typography>
                        <Button 
                            variant='contained' 
                            color='secondary'
                            size='large'
                            sx={{ borderRadius: '50px', px: 10, py: 2}}
                        >
                            Contact Us
                        </Button>
                    </Stack>
                </Container>
            </Box>
            <Grid container justifyContent='flex-start' alignItems='center' columns={{ xs: 6, md: 12 }} bgcolor={colors.grey[700]} >
                <Grid item xs={6} sx={{ p: {xs: 5, lg: 10} }}>
                    <Typography variant='h3' color={colors.secondary[400]} align='left'>Services</Typography>
                </Grid>
                <Grid item xs={6} sx={{ p: {xs: 4, lg: 10}, bgcolor: {xs: `${colors.grey[600]}`, md: `${colors.secondary[300]}`} }}>
                    <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: `${colors.grey[700]}` }}>
                            <Typography variant='h6' color={colors.secondary[300]}>Online Ads</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ bgcolor: `${colors.secondary[400]}` }}>
                            <Typography align='left'>
                                We have great minds ready to craft for your business campaigns that will drive in revenue. 
                                We implement a linchpin model to ensure you get recurring revenues from your converted customers.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: `${colors.grey[700]}` }}>
                            <Typography variant='h6' color={colors.secondary[300]}>Social Media Management</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ bgcolor: `${colors.secondary[400]}` }}>
                            <Typography align='left'>
                                You can trust us to create for you a social media presence that makes your brand roar. 
                                Think mild penetration, or attention grabbing strategies - 
                                we are well capable of aligning your social media presence growth to your overall business strategy!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: `${colors.grey[700]}` }}>
                            <Typography variant='h6' color={colors.secondary[300]}>Email Marketing</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ bgcolor: `${colors.secondary[400]}` }}>
                            <Typography align='left'>
                                Whether your business already has an email mailing list or is planning to have one, we are ready to help you leverage the power of newsletters and targeted marketing. 
                                We write tantalizing pieces of copy that will leave your clients thinking about your brand all day.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion square expanded={expanded === 'panel4'}  onChange={handleChange('panel4')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: `${colors.grey[700]}` }}>
                            <Typography variant='h6' color={colors.secondary[300]}>Campaign Planning</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ bgcolor: `${colors.secondary[400]}` }}>
                            <Typography align='left'>
                                Are you planning to launch a new product, or revive awareness of an existing product.
                                Is your business in one of these states: starting out, doing well, or performing poorly?
                                In either case, do not worry. We specialize in creating campaigns that put your business on the map for market dominance.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
            <Stack spacing={2} p={{ xs: 5, lg: 10}} bgcolor={colors.grey[100]}>
                <Typography variant='h3' align='left' py={2} color={colors.secondary[600]}>Why Work With Us?</Typography>
                <Typography variant='h5' align='left' color={colors.primary[600]}>Strategic Approach</Typography>
                <Typography variant='p' align='left' color={colors.grey[700]}>
                    We don't believe in one-size-fits-all. Every brand is unique, and so is our approach. 
                    Our strategies are tailored to your specific goals and audience.
                </Typography>
                <Typography variant='h5' align='left' color={colors.primary[600]}>Creative Excellence</Typography>
                <Typography variant='p' align='left' color={colors.grey[700]}>
                    Innovation is at our core. Expect fresh, imaginative ideas that set your brand apart from the noise.
                </Typography>
                <Typography variant='h5' align='left' color={colors.primary[600]}>Results-Driven</Typography>
                <Typography variant='p' align='left' color={colors.grey[700]}>
                    We're not just about pretty words and visuals; we're about achieving measurable results. Your success is our success.
                </Typography>
            </Stack>
            <Box>
                <Typography variant='h3' align='left' color={colors.primary[700]} p={{ xs: 5, lg: 10 }}>Ready To Take Action?</Typography>
                <Grid container justifyContent='flex-start' alignItems='center' columns={{ sx: 6, md: 12 }}>
                    <Grid item xs={6} px={{ xs: 5, lg: 10}} pb={{ xs: 5, lg: 10 }}>
                        <Typography align='left'>
                            Ready to take your brand to the next level? Let's embark on this journey together! <br/><br/>
                            Go on and contact us at sales@angycharms.com to book an appointment with our team so we can discuss the way forward.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} px={{ xs: 5, lg: 10}} pb={{ xs: 5, lg: 10 }}>
                        <Button 
                            variant='contained' 
                            // color={colors.primary[700]}
                            size='large'
                            sx={{ 
                                borderRadius: '50px', 
                                bgcolor: `${colors.primary[700]}`,
                                px: 10, 
                                py: 2
                            }}
                        >
                            Book an appointment
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home