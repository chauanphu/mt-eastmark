import React from 'react'
import { Box } from '@mui/system'
import { Typography, Container, Grid, Stack } from '@mui/material'
import { Blogs } from '../components'
import { orange, grey } from '@mui/material/colors';
import { Navbar, Footer } from "../components";

import panel from '../assets/Panel-2.png'

const HomePage = () => {
    const introduction = [
        { key: "Vị trí", value: "Vành đai 3 – Lò Lu, P. Long Trường, TP Thủ Đức, TP HCM" },
        { key: "Chủ đầu tư", value: "Công ty TNHH Xây dựng và Kinh doanh nhà Điền Phúc Thành" },
        { key: "Đơn vị phát triển", value: "Công ty Cổ Phần Đầu Tư Bất Động Sản Rio Land" },
        { key: "Tổng thầu", value: "Phước Thành" },
        { key: "Tổng diện tích đất", value: "Hơn 200.000 m2" },
        { key: "Đất xây dựng nhà ở", value: "92.376,4 m2" },
        { key: "Mật độ xây dựng", value: "25,6%" },
        { key: "Quy mô", value: "07 block cao 14 – 22 tầng" },
        { key: "Số lượng sản phẩm", value: "1.720 căn" },
        { key: "Diện tích căn hộ", value: "63 – 65 – 70 – 73 – 95 – 99 – 134 – 199m2 từ 1-3PN" },
        { key: "Tổng vốn đầu tư", value: "4500 tỷ" },
        { key: "Thời gian khởi công", value: "Quý 4/2021" },
        { key: "Thời gian bàn giao dự kiến", value: "Quý 4/2024" },
        { key: "Pháp lý", value: "Sổ hồng sở hữu lâu dài (đã có GPXD)" },
    ]
    return (
        <>
            <Navbar></Navbar>

            {/* Carousel */}
            <Container sx={{
                minWidth: '100%',
            }}>
                <img src={panel} alt="Panel" width="100%" sx={{ padding: 0 }} />
            </Container>

            {/* Product Category */}
            <Box id="introduction" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
                mb: 2,
                py: 5,
                backgroundColor: orange[50],
            }}>
                <Typography variant="h5">GIỚI THIỆU TỔNG QUAN DỰ ÁN</Typography>
            </Box>

            <Container sx={{ mt: 5 }}>
                <Stack>
                    <Grid container sx={{ borderBottom: 1, borderColor: grey[400], py: 2 }}>
                        <Grid xs={4} sx={{ fontWeight: "bold" }}>Tên dự án</Grid>
                        <Grid xs={8} sx={{ fontWeight: "bold" }} color="red">MT EASTMARKCITY</Grid>
                    </Grid>
                    {introduction.map(item => {
                        return <Grid key={item.key} container sx={{ borderBottom: 1, borderColor: grey[400], py: 2 }}>
                            <Grid xs={4} sx={{ fontWeight: "bold" }}>{item.key}</Grid>
                            <Grid xs={8}>{item.value}</Grid>
                        </Grid>
                    })}
                </Stack>
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
            <Footer />

        </>
    )
}

export default HomePage