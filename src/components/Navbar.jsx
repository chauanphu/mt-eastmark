import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { AppBar, Toolbar, Tabs, Tab, Skeleton, IconButton, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


//Import State
import Dropdown from './Dropdown';

const Navbar = () => {
    const [tabvalue, setTab] = useState('0');
    const [drawer, setDrawer] = useState(false)
    const theme = useTheme();
    const pc = useMediaQuery(theme.breakpoints.up('md'));

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
            name: 'Tiện ích', url: '#benefit', value: '2', style: style
        },
        {
            name: 'Mặt bằng', url: '#area', value: '4', style: style
        },
        {
            name: 'Thanh toán', url: '#payment', value: '5', style: style
        }, {
            name: 'Hình ảnh thực tế', url: '#real-img', value: '6', style: style
        },
        {
            name: 'Nhà mẫu', url: '#model', value: '7', style: style
        },
        {
            name: 'Liên hệ', url: '#footer', value: '8', style: style
        },
    ]

    return (
        <>
            {/* Navbar */}
            <AppBar sx={{
                height: "80px",
                backgroundColor: 'white',
                position: 'sticky',
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
                {
                    pc && (<Toolbar sx={{
                        width: 'fit-content',
                        display: {
                            xs: 'none',
                            md: 'block',
                        },
                        position: 'absolute',
                        margin: 'auto',
                        left: 0,
                        right: 0,
                    }}>
                        <Tabs value={tabvalue} onChange={handleTabChange}>
                            {tabs.map((tab) => (
                                <Tab key={tab.value} component="a" href={tab.url} label={tab.name} value={tab.value} sx={{
                                    typography: {
                                        md: 'h6'
                                    },
                                    color: 'green'
                                }} />
                            )
                            )}
                        </Tabs>
                    </Toolbar>)
                }
            </AppBar>
            <Drawer anchor='left' open={drawer} onClose={event => toggleDrawer(event, false)} sx={{ px: 2 }}>
                <Dropdown items={tabs} />
            </Drawer>
        </>
    )
}

export default Navbar