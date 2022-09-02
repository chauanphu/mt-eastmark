import React from 'react'
import { Container, Grid, Stack } from '@mui/material'
import { grey } from '@mui/material/colors';

import Title from './Titile'

const IntroTable = ({ items, title }) => {
    return (
        <>
            {/* Introduction */}
            <Title id={title.id} title={title.value} />

            <Container maxWidth='xl' sx={{ mt: 5 }}>
                <Stack>
                    {items.map(item => {
                        return <Grid key={item.key} container sx={{ borderBottom: 1, borderColor: grey[400], py: 2 }}>
                            <Grid item xs={4} sx={{ fontWeight: "bold" }}>{item.key}</Grid>
                            <Grid item xs={8} sx={item.value_style}>{item.value}</Grid>
                        </Grid>
                    })}
                </Stack>
            </Container>
            {/* End Introduction */}
        </>
    );
}

export default IntroTable