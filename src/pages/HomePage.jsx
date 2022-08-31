import React from 'react'
import { Box } from '@mui/system'
import { Typography, Container, Grid, Stack } from '@mui/material'
import { Carousel } from '../components'
import { orange, grey } from '@mui/material/colors';
import { Navbar, Footer } from "../components";

import panel from '../assets/Panel-2.png'
import mat_bang from '../assets/Mat_Bang.png'

var utils_image = []

for (let i = 1; i <= 8; i++) {
    var util = require('../assets/utils/' + i + '.JPG')
    utils_image.push(<Box component="img" src={util} alt="Mat" sx={{ width: "100%" }} />,)
}

var utils_text = [
    ["Cổng chính có bảo vệ", "Công viên", "Chốt an ninh", "Ban quản lý khu dân cư", "Khu thương mại", "Hồ bơi người", "Hồ bơi trẻ em", "Nhà điều hành, quản lý hồ bơi"],
    ["Khu dịch vụ", "Khu cafe", "Khu hồ cảnh quan 7.000 m2", "Khu đồi cảnh", "Khu vui chơi ngoài trời của bé", "Công viên ven sông", "Trường học, trường mầm non", "Shophouse"],
    ["TTMT, dịch vụ, Officetel", "Hồ bơi nghỉ dưỡng", "Khu tắm nắng", "Khu chăm sóc sức khỏe", "Phòng sinh hoạt cộng đồng", "Nhà hàng, cafe ven sông"]
]
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
                <img src={panel} alt="Panel" width="100%" />
            </Container>

            {/* Product Category */}
            <Box id="introduction" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 2,
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

            <Box id="introduction" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
                mb: 2,
                py: 5,
                backgroundColor: orange[50],
            }}>
                <Typography variant="h5">VỊ TRÍ ĐẮC ĐỊA</Typography>
            </Box>

            <Container id="location" sx={{
                width: { xs: "100%", md: "60%" },
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Box component="img" src={mat_bang} alt="Mat" sx={{ width: "100%" }} />
                <Box width="100%" marginTop={2}>
                    <Typography variant="subititle1" fontWeight="bold">
                        Tuyến hiện hữu:
                    </Typography>
                    <Box component="ul">
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Cao tốc TPHCM  Long Thành – Dầu Dây –> Võ Chí Công –>Nguyễn Duy Trinh –>Trường Lưu –> MT Eastmark City."}
                        </Typography>
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Cao tốc TPHCM – Long Thành – Dầu Dây –> Võ Chí Công –> Lã Xuân Oai –> Trường Lưu –> MT Eastmark City."}
                        </Typography>
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Nguyễn Duy Trinh –> Trường Lưu –> MT Eastmark City."}
                        </Typography>
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Xa Lộ Hà Nội –> Lê Văn Việt –> Lã Xuân Oai –> Trường Lưu –> MT Eastmark City."}
                        </Typography>
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Xa Lộ Hà Nội –> đường D2 –> Võ Chí Công –> Lã Xuân Oai –> Trường Lưu – MT Eastmark City."}
                        </Typography>
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Cầu Đồng Nai –> Nguyễn Xiển –> Nguyễn Duy Trinh –> Trường Lưu –> MT Eastmark City."}
                        </Typography>
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Nguyễn Văn Linh –> Võ Chí Công –> Nguyễn Duy Trinh –> Trường Lưu –> MT Eastmark City."}
                        </Typography>
                    </Box>

                    <Typography variant="subititle1" marginTop={2} fontWeight="bold">
                        Tuyến sắp và đang triển khai:
                    </Typography>
                    <Box component="ul">
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Cao tốc TPHCM – Long Thành – Dầu Dây –> Đường Vành Đai 3 –> MT Eastmark City."}
                        </Typography>
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Cao tốc TPHCM – Long Thành – Dầu Dây –> Đỗ Xuân Hợp –> Liên Phường –> Trường Lưu –> MT Eastmark City."}
                        </Typography>
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Mai Chí Thọ –> Liên Phường –> MT Eastmark City."}
                        </Typography>
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Võ Chí Công –> Lò Lu –> MT Eastmark City."}
                        </Typography>
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Xa Lộ Hà Nội –> Vành đai 3 –> MT Eastmark City."}
                        </Typography>
                        <Typography component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                            {"Cầu Đồng Nai –> Vành đai 3 –> MT Eastmark City."}
                        </Typography>
                    </Box>
                </Box>
            </Container>

            <Box id="introduction" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
                mb: 2,
                py: 5,
                backgroundColor: orange[50],
            }}>
                <Typography variant="h5">TIỆN ÍCH DỰ ÁN</Typography>
            </Box>
            <Container id="location" sx={{
                width: { xs: "100%", md: "60%" },
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Carousel items={utils_image} />
                <Box width="100%" marginTop={2}>
                    <Typography variant="subititle1" fontWeight="bold">
                        Các tiện ích nổi bật trong khu căn hộ MT Eastmark City như:
                    </Typography>
                    <Box display="flex" justifyContent={{ xs: "start", md: "space-between" }} flexDirection={{ md: "row", xs: "column" }}>
                        {utils_text.map((col, col_index) => {
                            return (
                                <Box key={col_index} component="ul">
                                    {col.map((row, row_index) => {
                                        return (
                                            <Typography key={row_index} component="li" marginBottom={1} fontSize={{ xs: 15, md: 18 }}>
                                                {row}
                                            </Typography>
                                        )
                                    })}
                                </Box>
                            )
                        })}
                    </Box>

                </Box>
            </Container>
            <Footer />

        </>
    )
}

export default HomePage