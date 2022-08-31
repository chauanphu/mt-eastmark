import { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Stack, Typography, Skeleton, IconButton, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

import Dropdown from './Dropdown';
//Import State

const Navbar = () => {
    const [tabvalue, setTab] = useState('0');
    const [drawer, setDrawer] = useState(false)

    const handleTabChange = (event, newValue) => {
        setDrawer(false)
        setTab(newValue)
    };
    const toggleDrawer = (event, newValue) => {
        setDrawer(newValue)
    }
    const style = {
        typography: 'h6',
        color: 'green',
        py: 0.5,
    }

    const tabs = [
        {
            name: 'Giới thiệu', url: '#introduction', value: '0', style: style
        },
        {
            name: 'Vị trí', url: '#location', value: '1', style: style
        }, {
            name: 'Tiện ích', url: '#introduction', value: '2', style: style
        },
        {
            name: 'Vị trí', url: '#location', value: '3', style: style
        },
        {
            name: 'Mặt bằng', url: '#introduction', value: '4', style: style
        },
        {
            name: 'Thanh toán', url: '#location', value: '5', style: style
        }, {
            name: 'Hình ảnh thực tế', url: '#introduction', value: '6', style: style
        },
        {
            name: 'Nhà mẫu', url: '#location', value: '7', style: style
        },
        {
            name: 'Liên hệ', url: '#location', value: '8', style: style
        },
    ]
    return (
        <>
            {/* Navbar */}
            <AppBar sx={{
                height: "80px",
                backgroundColor: 'white',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center'
            }}>
                {/* Logo */}
                <IconButton size="large" onClick={event => toggleDrawer(event, true)} sx={{
                    display: { md: 'none' },
                    position: 'absolute',
                }}>
                    <MenuIcon />
                </IconButton>
                <Skeleton sx={{
                    width: 100,
                    height: 70,
                    position: { xs: 'absolute', md: 'block' },
                    margin: { xs: 'auto', md: '0 0 0 50px' },
                    ml: 5,
                    left: 0,
                    right: 0,
                }}></Skeleton>
                <Toolbar sx={{
                    width: 'fit-content',
                    visibility: {
                        xs: 'hidden',
                        md: 'visible',
                    },
                    position: 'absolute',
                    margin: 'auto',
                    left: 0,
                    right: 0,
                }}>
                    <Tabs value={tabvalue} onChange={handleTabChange}>
                        {tabs.map((tab) => (
                            <Tab key={tab.value} component={Link} to={tab.url} label={tab.name} value={tab.value} sx={{
                                typography: {
                                    md: 'h6'
                                },
                                color: 'green'
                            }} />
                        )
                        )}
                    </Tabs>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={drawer} onClose={event => toggleDrawer(event, false)} sx={{ px: 2 }}>
                <Dropdown items={tabs} />
            </Drawer>
        </>
    )
}

export default Navbar