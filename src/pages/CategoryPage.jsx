///////// Import Custom Components /////////
import Products from "../components/Products";
import Dropdown from "../components/Dropdown";


///////// Import Material Components /////////
import MenuIcon from '@mui/icons-material/Menu';
import SortIcon from '@mui/icons-material/Sort';
import {
    Box, Button, TextField, Autocomplete,
    Pagination, Typography
} from "@mui/material"
//

//////////////////// Import React ////////////////////
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";

///////// Import State /////////
import Category from '../services/category';
import Product from '../services/products';

const Header = () => {
    return (
        <Box display="flex" flexDirection="row" marginBottom={1} sx={{ justifyContent: { xs: "space-between", md: 'end' } }} >
            <Button startIcon={<SortIcon />}>
                Giá giảm dần
            </Button>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={[]}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Tìm kiếm sản phẩm"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                sx={{
                    ml: 2,
                    minWidth: { xs: 150, md: 200 }
                }}
            />
        </Box>
    )
}

const Bottom = ({ count = 0, onChange = (event, page) => { } }) => {
    const page = Math.ceil(count / 12)
    return (
        <>
            {
                (page > 1) &&
                <Pagination sx={{
                    '.MuiPagination-ul': {
                        display: 'flex',
                        justifyContent: 'center'
                    }
                }} count={page} onChange={onChange} />
            }
        </>
    )

}

const EmptyPage = () => {
    return (
        <Box height="50vh" display="flex">
            <Typography sx={{
                typography: { xs: "h4", md: "h3" },
                postion: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                margin: 'auto',
                textAlign: 'center'
            }} color="gray">Chua cap nhat hang hoa</Typography>
        </Box >)
}

const CategoryPage = () => {
    //State
    const [categories, setCategory] = useState([])
    const [products, setProduct] = useState([])
    const [count, setCount] = useState(0)

    const updateData = (event, page) => {
        Product.get_all(page)
            .then(res => {
                const { total_count, data } = res
                setCount(total_count)
                return data
            })
            .then(data => {
                setProduct(data)
            })
    }
    //Effects
    useEffect(() => {
        Category.get_all()
            .then(res => {
                return res.json()
            })
            .then(data => {
                setCategory(data)
            })
        updateData()
    }, [])

    return (
        (categories.length > 0) ?
            <Box display="flex" flexDirection="row">
                {/* Category */}
                <Box sx={{
                    display: { xs: 'none', md: 'block' }
                }} marginRight={5}>
                    <Box sx={{ backgroundColor: "green", display: "flex", justifyContent: 'center', padding: 2 }}>
                        <MenuIcon sx={{ mr: 1 }} />
                        <Typography>Danh mục sản phẩm</Typography>
                    </Box>
                    <Dropdown items={categories} />
                </Box>
                {/* Main Content */}
                <Box sx={{
                    width: {
                        xs: '100%',
                        md: '80%'
                    }
                }}>
                    <Routes>
                        <Route path="/" element={<Products header={<Header />} showHeader={false} bottom={
                            <Bottom count={count} onChange={updateData} />
                        } items={products} />}></Route>
                    </Routes>
                </Box>
            </Box> :
            <EmptyPage />
    )
}

export default CategoryPage