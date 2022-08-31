import React from 'react'
import { Box } from '@mui/system'
import { Typography, Container } from '@mui/material'
import { IntroCarousel, Products, Blogs } from './components'

import { orange } from '@mui/material/colors';

const HomePage = () => {
    return (
        <>
            {/* Carousel */}
            <Box fluid>
                <IntroCarousel></IntroCarousel>
            </Box>
            {/* Product Category */}
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
                mb: 2,
                py: 5,
                backgroundColor: orange[50]
            }}>
                <Typography variant="h4">Danh Mục Sản Phẩm</Typography>
            </Box>
            <Container sx={{
                height: '100%'
            }} maxWidth="xl">
                <Products />
            </Container>
            {/* Blogs section */}
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
                mb: 2,
                py: 5,
                backgroundColor: orange[50]
            }}>
                <Typography variant="h4">Các Bài Viết Có Ích</Typography>
            </Box>
            <Container sx={{ mt: 5 }}>
                <Blogs />
            </Container>
            {/* Footer */}

        </>
    )
}

export default HomePage