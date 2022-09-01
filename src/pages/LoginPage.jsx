import { Typography, Box, FormGroup, TextField, Divider, Button } from "@mui/material"
import { green } from '@mui/material/colors'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const LoginPage = () => {
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/admin")
    }

    return (
        <Box height="50vh" display="flex" alignItems="center" justifyContent="center">
            <Box padding={5} border={2} borderColor={green[300]} borderRadius={2}>
                <Typography variant="h4" textAlign="center">
                    Log In
                </Typography>
                <Divider sx={{ my: 2 }} />
                <form onSubmit={handleSubmit}>
                    <FormGroup variant="standard">
                        <TextField value={username} label="Tai khoan" onChange={(e) => { setUser(e.target.value) }} />
                        <TextField value={password} margin="normal" label="Mat khau" onChange={(e) => { setPassword(e.target.value) }} />
                        <Divider sx={{ my: 2 }} />

                        <Button type="submit" variant="outlined" sx={{ py: 1.5, color: 'blue', borderColor: "blue" }}>Dang nhap</Button>
                    </FormGroup>
                </form>
            </Box>
        </Box >)
}

export default LoginPage