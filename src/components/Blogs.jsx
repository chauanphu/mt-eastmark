import { Box, Button, Grid } from '@mui/material'
import BlogCard from "./Cards/BlogCard"

const Products = () => {
    const items = [
        { name: '#Name1', img: '', price: "289,000" },
        { name: '#Name2', img: '', price: "289,000" },
        { name: '#Name3', img: '', price: "289,000" },
    ]
    return (
        <>
            <Grid container spacing={2} justifyContent={{ xs: "center", md: "space-between" }}>
                {items.map((item) => {
                    return (
                        <BlogCard key={item.name} item={item}></BlogCard>
                    )
                })}
            </Grid>
            <Box display="flex" justifyContent="center">
                <Button sx={{ mt: 4, color: "green", borderColor: "green", fontWeight: "bold" }} variant="outlined">Xem them</Button>
            </Box>
        </>
    )
}

export default Products