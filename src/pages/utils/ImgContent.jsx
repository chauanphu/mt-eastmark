import React from 'react'
import { Container, Box } from '@mui/material'

import Title from './Titile'

const ImgContent = ({ img, children, title = { id: '', value: '' } }) => {
    return (
        <>
            <Title id={title.id} title={title.value} />

            <Container maxWidth='xl' sx={{
                width: { xs: "100%", md: "60%" },
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Box component="img" src={img} alt="Mat" sx={{ width: "100%" }} />
                <Box width="100%" marginTop={2}>
                    {children}
                </Box>
            </Container>
        </>
    );
}

export default ImgContent