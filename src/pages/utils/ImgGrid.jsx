import React from 'react'
import { Container, Box, ImageList, ImageListItem } from '@mui/material'

import Title from './Titile'

const ImgGrid = ({ images, children, title, cols }) => {
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
                <Box width="100%" marginTop={2}>
                    <ImageList sx={{ width: "100%", height: 600 }} gap={12} cols={cols}>
                        {images.map((item, index) => (
                            <ImageListItem key={index}>
                                <img
                                    src={item}
                                    alt={""}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    {children}
                </Box>
            </Container>
            {/* End Introduction */}
        </>
    );
}

export default ImgGrid