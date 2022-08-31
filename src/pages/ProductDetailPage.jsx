//////// Import Material Components ////////
import { Box, Skeleton, Container, Typography, Stack, Rating, Chip, Button } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import Carousel from "../components/Carousel";

import Product from "../services/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Header = () => {
    return (<Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
        mb: 2,
        py: 5,
    }}>
        <Typography variant="h4">Sản phẩm liên quan</Typography>
    </Box>)
}
const ProductDetailPage = () => {
    const [related_products, setRelated] = useState([])
    const [detail, setDetail] = useState({})

    const { id } = useParams()

    useEffect(() => {
        Product.get_related().then(data => setRelated(data))
        Product.get_by_id(id).then(data => setDetail(data))
    }, [id])

    return (<>
        <Container maxWidth="xl">
            <Box display="flex" sx={{
                flexDirection: { xs: 'column', md: 'row' },
                mb: 10
            }}>
                <Box sx={{
                    alignSelf: { xs: 'center', md: 'start' }
                }}>
                    <Skeleton variant="rectangular" width={300} height={400}></Skeleton>
                </Box>
                <Box sx={{
                    mt: { xs: 5, md: 0 },
                    ml: { xs: 0, md: 5 }
                }}>
                    <Stack>
                        <Typography sx={{ typography: { xs: 'h5', md: 'h4' } }}>{detail.name}</Typography>
                        <Typography sx={{ color: 'green', mt: 2, typography: { xs: 'h6', md: 'h5' } }}>{detail.price}đ</Typography>
                        <Rating sx={{ mt: 2, fontSize: "20px" }} name="half-rating" defaultValue={4.5} precision={detail.rating} />
                        <Typography sx={{ mt: 2 }} variant="body1">{detail.description}</Typography>
                        <Box display="flex" flexDirection="row" alignItems="end">
                            <Typography sx={{ mt: 2 }} variant="h6">Size: </Typography>
                            {detail.sizes && detail.sizes.map(size => <Chip label={size} sx={{ mx: 2 }} />)}
                        </Box>
                        <Box display="flex" flexDirection="row" alignItems="end">
                            <Typography sx={{ mt: 2 }} variant="h6">Màu: </Typography>
                            {detail.colors && detail.colors.map(color => <Chip label={color} sx={{ mx: 2 }} />)}
                        </Box>
                        <Box display="flex" flexDirection="row" alignItems="end">
                            <Typography sx={{ mt: 2 }} variant="h6">Chất liệu: </Typography>
                            {detail.materials && detail.sizes.map(material => <Chip label={material} sx={{ mx: 2 }} />)}
                        </Box>
                        <Box sx={{ mt: 4, mx: { xs: "auto", md: '0' } }}>
                            <Button startIcon={<PhoneIcon />} variant="outlined" sx={{ color: 'green' }}>Lien he ngay</Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
            <Box>
                <Header />
                <Carousel items={related_products}></Carousel>
            </Box>
        </Container>
    </>)
}

export default ProductDetailPage