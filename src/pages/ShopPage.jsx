import { Container, Box } from "@mui/material"

import { Outlet } from "react-router-dom"

const ShopPage = () => {

    return (
        <>
            <Container maxWidth='xl'>
                <Box marginBottom={5}>
                </Box>
                {/* <Breadcrumbs aria-label="breadcrumb" sx={{ my: 3 }} separator=">">
                    <Link underline="hover" color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Typography color="text.primary">Breadcrumbs</Typography>
                </Breadcrumbs> */}
                <Outlet />
            </Container>
        </>
    )
}

export default ShopPage