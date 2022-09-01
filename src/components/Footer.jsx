import React from 'react';
import emailjs from 'emailjs-com';

import { Box, Typography, Grid, Container, List, ListItem, ListItemText, ListItemIcon, SvgIcon, FormGroup, TextField, Button, InputAdornment } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {
    grey, blueGrey
} from "@mui/material/colors"

import { useState } from "react"

const SERVICE_ID = "service_uq2oteh"
const TEMPLATE_ID = "template_5uj1vsq"
const PUBLIC_KEY = 'jLgP61qPVm5XZ6mpz'

const Footer = () => {
    const ZaloIcon = (props) => {
        return (
            <SvgIcon {...props}>
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 15.580078 6 C 12.00899 9.7156859 10 14.518083 10 19.5 C 10 24.66 12.110156 29.599844 15.910156 33.339844 C 16.030156 33.549844 16.129922 34.579531 15.669922 35.769531 C 15.379922 36.519531 14.799687 37.499141 13.679688 37.869141 C 13.249688 38.009141 12.97 38.430859 13 38.880859 C 13.03 39.330859 13.360781 39.710781 13.800781 39.800781 C 16.670781 40.370781 18.529297 39.510078 20.029297 38.830078 C 21.379297 38.210078 22.270625 37.789609 23.640625 38.349609 C 26.440625 39.439609 29.42 40 32.5 40 C 36.593685 40 40.531459 39.000731 44 37.113281 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 33 15 C 33.55 15 34 15.45 34 16 L 34 25 C 34 25.55 33.55 26 33 26 C 32.45 26 32 25.55 32 25 L 32 16 C 32 15.45 32.45 15 33 15 z M 18 16 L 23 16 C 23.36 16 23.700859 16.199531 23.880859 16.519531 C 24.050859 16.829531 24.039609 17.219297 23.849609 17.529297 L 19.800781 24 L 23 24 C 23.55 24 24 24.45 24 25 C 24 25.55 23.55 26 23 26 L 18 26 C 17.64 26 17.299141 25.800469 17.119141 25.480469 C 16.949141 25.170469 16.960391 24.780703 17.150391 24.470703 L 21.199219 18 L 18 18 C 17.45 18 17 17.55 17 17 C 17 16.45 17.45 16 18 16 z M 27.5 19 C 28.11 19 28.679453 19.169219 29.189453 19.449219 C 29.369453 19.189219 29.65 19 30 19 C 30.55 19 31 19.45 31 20 L 31 25 C 31 25.55 30.55 26 30 26 C 29.65 26 29.369453 25.810781 29.189453 25.550781 C 28.679453 25.830781 28.11 26 27.5 26 C 25.57 26 24 24.43 24 22.5 C 24 20.57 25.57 19 27.5 19 z M 38.5 19 C 40.43 19 42 20.57 42 22.5 C 42 24.43 40.43 26 38.5 26 C 36.57 26 35 24.43 35 22.5 C 35 20.57 36.57 19 38.5 19 z M 27.5 21 C 27.39625 21 27.29502 21.011309 27.197266 21.03125 C 27.001758 21.071133 26.819727 21.148164 26.660156 21.255859 C 26.500586 21.363555 26.363555 21.500586 26.255859 21.660156 C 26.148164 21.819727 26.071133 22.001758 26.03125 22.197266 C 26.011309 22.29502 26 22.39625 26 22.5 C 26 22.60375 26.011309 22.70498 26.03125 22.802734 C 26.051191 22.900488 26.079297 22.994219 26.117188 23.083984 C 26.155078 23.17375 26.202012 23.260059 26.255859 23.339844 C 26.309707 23.419629 26.371641 23.492734 26.439453 23.560547 C 26.507266 23.628359 26.580371 23.690293 26.660156 23.744141 C 26.819727 23.851836 27.001758 23.928867 27.197266 23.96875 C 27.29502 23.988691 27.39625 24 27.5 24 C 27.60375 24 27.70498 23.988691 27.802734 23.96875 C 28.487012 23.82916 29 23.22625 29 22.5 C 29 21.67 28.33 21 27.5 21 z M 38.5 21 C 38.39625 21 38.29502 21.011309 38.197266 21.03125 C 38.099512 21.051191 38.005781 21.079297 37.916016 21.117188 C 37.82625 21.155078 37.739941 21.202012 37.660156 21.255859 C 37.580371 21.309707 37.507266 21.371641 37.439453 21.439453 C 37.303828 21.575078 37.192969 21.736484 37.117188 21.916016 C 37.079297 22.005781 37.051191 22.099512 37.03125 22.197266 C 37.011309 22.29502 37 22.39625 37 22.5 C 37 22.60375 37.011309 22.70498 37.03125 22.802734 C 37.051191 22.900488 37.079297 22.994219 37.117188 23.083984 C 37.155078 23.17375 37.202012 23.260059 37.255859 23.339844 C 37.309707 23.419629 37.371641 23.492734 37.439453 23.560547 C 37.507266 23.628359 37.580371 23.690293 37.660156 23.744141 C 37.739941 23.797988 37.82625 23.844922 37.916016 23.882812 C 38.005781 23.920703 38.099512 23.948809 38.197266 23.96875 C 38.29502 23.988691 38.39625 24 38.5 24 C 38.60375 24 38.70498 23.988691 38.802734 23.96875 C 39.487012 23.82916 40 23.22625 40 22.5 C 40 21.67 39.33 21 38.5 21 z" />
            </SvgIcon>
        );
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [content, setContent] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

        var templateParams = {
            content: content,
            phone: phone,
            name: name,
            email: email,
        }
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                alert('Gửi email thành công')
            })
            .catch(err => {
                alert('Gửi email thất bại. Vui lòng thử lại')
                console.log(err)
            });
    };

    return (
        <footer id="footer">
            <Box>
                <Box sx={{
                    py: 3,
                    backgroundColor: grey[900]
                }}>
                    <Container maxWidth='lg'>
                        <Grid container>
                            <Grid sx={{ color: "white" }} item lg={3}>
                                <Typography sx={{
                                    mt: 2,
                                    color: 'green'
                                }} variant="h5">Liên hệ</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon sx={{ color: "white" }}><PhoneIcon /></ListItemIcon>
                                        <ListItemText variant="body1">
                                            0909 049 996
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon sx={{ color: "white" }}><ZaloIcon fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100px" height="100px" /></ListItemIcon>
                                        <ListItemText variant="body1">
                                            0909 049 996
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon sx={{ color: "white" }}><EmailIcon /></ListItemIcon>
                                        <ListItemText variant="body1">
                                            phuclinh@baoholaodong.com
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid sx={{ color: "white", mt: 2, ml: 2 }} item lg={4}>
                                <Typography sx={{ color: 'green' }} variant="h5">Vị trí</Typography>
                                <List>
                                    <ListItemText >
                                        Vành đai 3 – Lò Lu, P. Long Trường, TP Thủ Đức, TP HCM
                                    </ListItemText>
                                    <ListItemText sx={{ my: 2 }}>
                                        <iframe
                                            title="google-map"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.8298203115496!2d106.60610188976361!3d10.838947415056875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a4a74b55809%3A0xa1c2b8a88cdedec7!2sC%C3%94NG%20TY%20TNHH%20SX%20TM%20DV%20CH%C3%82U%20GIA%20PH%C3%81T!5e0!3m2!1sen!2s!4v1661824687577!5m2!1sen!2s" sx={{
                                                border: 0
                                            }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </ListItemText>
                                </List>
                            </Grid>
                            <Grid sx={{ mt: 2, my: 2, width: '100%' }} item lg={4}>
                                <Typography sx={{ color: 'green', mb: 2 }} variant="h5">Form</Typography>
                                <form onSubmit={sendEmail}>
                                    <FormGroup variant="standard">
                                        <TextField variant="filled" sx={{ backgroundColor: 'white' }} value={name} label="Tên" onChange={(e) => { setName(e.target.value) }} />
                                        <TextField variant="filled" sx={{ backgroundColor: 'white' }} value={email} margin="normal" label="Email" onChange={(e) => { setEmail(e.target.value) }} />
                                        <TextField variant="filled" sx={{ backgroundColor: 'white' }} InputProps={{
                                            startAdornment: <InputAdornment position="start">(+84)</InputAdornment>,
                                        }} value={phone} margin="normal" label="SĐT" onChange={(e) => { setPhone(e.target.value) }} />

                                        <TextField variant="filled" sx={{ backgroundColor: 'white' }} rows={5} multiline value={content} margin="normal" label="Nội dung" onChange={(e) => { setContent(e.target.value) }} />

                                        <Button type="submit" variant="outlined" sx={{ backgroundColor: 'blue', py: 1.5, color: 'white', borderColor: "blue" }}>Gửi email</Button>
                                    </FormGroup>
                                </form>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 3,
                backgroundColor: blueGrey
                [900]
            }}>
                <Typography color="white" textAlign="center"> © 2022 || Công ty TNHH Châu Gia Phát</Typography>
            </Box>
        </footer>
    )
}

export default Footer