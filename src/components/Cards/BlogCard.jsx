import { Card, CardContent, Typography, Skeleton } from "@mui/material"

const BlogCard = ({ item }) => {
    return (
        <Card sx={{
            maxWidth: 350
        }}>
            <Skeleton variant="rectangular" sx={{
                minWidth: 300,
            }} height={300}></Skeleton>
            <CardContent>
                <Typography textOverflow="ellipsis" variant="h6">Cach de chon dong phuc khach san</Typography>
                <Typography textOverflow="ellipsis" variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vero.   </Typography>
            </CardContent>
        </Card>
    )

}

export default BlogCard