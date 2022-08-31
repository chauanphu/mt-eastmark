import { Box, Typography, Grid, Container, List, ListItem, ListItemText, ListItemIcon } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {
    grey, blueGrey
} from "@mui/material/colors"

const Footer = () => {
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
                                            0945 316 280
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon sx={{ color: "white" }}><PhoneIcon /></ListItemIcon>
                                        <ListItemText variant="body1">
                                            0945 316 280
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
                                <Typography sx={{ color: 'green' }} variant="h5">Cửa hàng</Typography>
                                <List>
                                    <ListItemText >
                                        48/5 Thái Thị Giữ xã Bà Điểm, Hóc
                                        Môn, TP HCM
                                    </ListItemText>
                                    <ListItemText sx={{ my: 2 }}>
                                        Mở cửa: 7:00 - 18:00 | Thứ 2 - 7
                                    </ListItemText>
                                    <ListItemText sx={{ color: 'red' }}>
                                        CN nghỉ
                                    </ListItemText>
                                </List>
                            </Grid>
                            <Grid sx={{ color: "white", mt: 2, my: 2 }} item lg={3}>
                                <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.8298203115496!2d106.60610188976361!3d10.838947415056875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a4a74b55809%3A0xa1c2b8a88cdedec7!2sC%C3%94NG%20TY%20TNHH%20SX%20TM%20DV%20CH%C3%82U%20GIA%20PH%C3%81T!5e0!3m2!1sen!2s!4v1661824687577!5m2!1sen!2s" sx={{
                                    height: 200,
                                    minWidth: 350,
                                    border: 0
                                }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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