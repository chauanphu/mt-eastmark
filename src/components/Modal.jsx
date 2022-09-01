import { Typography, Box, Modal } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Form from './Form';

const My_Modal = () => {
    const [modal, setShowModal] = useState(false)
    const [opened, setOpen] = useState(false)

    const theme = useTheme();
    const pc = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const lim = pc ? [5000, 6000] : [4300, 5300]

            if (window.scrollY >= lim[0] && window.scrollY <= lim[1]) {
                setShowModal(true);
            } else {
                setShowModal(false);
            }
        });
    }, [pc]);
    return (
        <Modal
            open={!opened && modal}
            onClose={() => { setOpen(true) }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: 250, md: 400 },
                bgcolor: 'white',
                border: '1px solid #000',
                borderRadius: 5,
                boxShadow: 24,
                p: 4,
            }}>
                <Typography sx={{ color: 'green', mb: 2, textAlign: 'center' }} variant="h4">Contact Form</Typography>
                <Form />
            </Box>
        </Modal>
    )
}

export default My_Modal