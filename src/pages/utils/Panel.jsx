import React from 'react'
import { Container } from '@mui/material'

const Panel = ({ panel }) => {
    return (
        <>
            {/* Panel */}
            <Container sx={{ minWidth: '100%' }}>
                <img src={panel} alt="Panel" width="100%" />
            </Container>
        </>
    );
}

export default Panel