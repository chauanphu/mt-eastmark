import React from 'react'
import { Box, Divider, Grid } from '@mui/material'
import ProductCard from "./Cards/ProductCard"

const Products = ({ header, bottom, items, showHeader }) => {
    return (
        <>
            <Box>
                {showHeader && header}
                {showHeader && <Divider sx={{ my: 3 }} />}
                <Grid container spacing={2} columns={{ xs: 2, md: 3, lg: 4 }} justifyContent={{ xs: "center", md: "evenly" }}>
                    {items.map((item) => {
                        return (
                            <ProductCard key={item.id} item={item}></ProductCard>
                        )
                    })}
                </Grid>

                {bottom}

            </Box>
        </>
    )
}

export default Products