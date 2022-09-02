import React from 'react'
import { Container, Box } from '@mui/material'
import { Carousel } from '../../components'

import Title from './Titile'

var utils_image = []

const CarouselContent = ({ images, children, title }) => {
    utils_image = images.map(img => <Box component="img" src={img} alt="Tien ich" sx={{ width: "100%" }} />)

    return (
        <>
            {/* Introduction */}
            <Title id={title.id} title={title.value} />

            <Container maxWidth='xl' sx={{
                width: { xs: "100%", md: "60%" },
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Carousel items={utils_image} />
                <Box width="100%" marginTop={2}>
                    {children}
                </Box>
            </Container>
            {/* End Introduction */}
        </>
    );
}

export default CarouselContent