import MenuIcon from '@mui/icons-material/MenuOutlined'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { styled, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../theme';
import logo from '../images/ACmedia-logo-final.png'
// import logoMinimal from '../images/ACmedia-square-minimum.png'

const NavBar = ({ theme }) => {
    const [open, setOpen] = useState(false)
    const pages = [
        {
            id: "1",
            name: 'TERMS OF SERVICE',
            routesTo: "/terms-of-service"
        }, 
        {
            id: "2",
            name: 'PRIVACY POLICY',
            routesTo: "/privacy-policy"
        }, 
        {
            id: "3",
            name: 'CUSTOMER SUPPORT',
            routesTo: "/customer-support"
        }
    ]

    const handleOpenDrawer = () => setOpen(true)
    const handleCloseDrawer = () => setOpen(false)

    const  DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0,1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        backgroundColor: `${colors.primary[600]}`
    }))

    return (
        <AppBar position='static'>
            <CssBaseline />
            <Container maxWidth='xl' sx={{ bgcolor: `${colors.primary[600]}` }}>
                <Toolbar disableGutters>
                    <IconButton
                        size='large'
                        edge='start'
                        // color='inherit'
                        aria-label='open drawer'
                        onClick={handleOpenDrawer}
                        sx={{ color: 'inherit', display: {xs: 'flex', md: 'none'} }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={open}
                        onClose={handleCloseDrawer}
                        sx={{ 
                            width: 500, 
                            flexGrow: 1, 
                            // boxSizing: 'border-box',
                            display: {xs: 'flex', md: 'none'},
                            '& .MuiDrawer-paper': {
                                bgcolor: `${colors.grey[200]}`
                            }
                         }}
                    >
                        <DrawerHeader>
                            <IconButton sx={{ color: 'black'}} onClick={handleCloseDrawer}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        {pages.map((page) => (
                            <ListItem key={page.id} disablePadding onClick={handleCloseDrawer}>
                                <ListItemButton LinkComponent={RouterLink} to={page.routesTo} >
                                    <ListItemText primary={page.name} sx={{ color: 'black'}}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Drawer>
                    <Link component={RouterLink} to='/' underline='none'>
                        <img 
                            src={logo} 
                            // src={useMediaQuery(theme.breakpoints.up('md')) ? logo : logoMinimal} 
                            alt='' 
                            style={{ 
                                height: useMediaQuery(theme.breakpoints.up('md')) ? '4em' : '4em',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '5px'
                            }} 
                        />
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, my: 0 }}>
                        {pages.map((page) => (
                            <Button
                                key={page.id}
                                // disableRipple
                                // disableTouchRipple
                                disableElevation
                                variant='contained'
                                component={RouterLink}
                                to={page.routesTo}
                                sx={{ py: 3, color: 'black', bgcolor: `${colors.primary[600]}`, display: 'center', borderRadius: '0' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        <Button 
                            variant='contained'  
                            href='mailto:sales@angycharms.com?&amp;&amp;body=%5BCustomize%20body%20here%5D&amp;subject=Appointment%20request%3A%20%5BCustomize%20subject%20here%5D'
                            // color={colors.secondary[600]} 
                            disableElevation 
                            sx={{ 
                                py: 1,
                                px: 3,
                                bgcolor: `${colors.secondary[500]}`,
                                size: 'small',
                                height: {xs: '100'},
                                borderRadius: '50px',
                                display: useMediaQuery('(min-width:400px)') ? 'flex' : 'none'
                            }}
                        >
                            Contact Us
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar