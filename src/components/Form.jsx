import emailjs from 'emailjs-com';
import { FormGroup, TextField, Button, InputAdornment } from "@mui/material"


import { useState } from "react"

const SERVICE_ID = "service_uq2oteh"
const TEMPLATE_ID = "template_5uj1vsq"
const PUBLIC_KEY = 'jLgP61qPVm5XZ6mpz'

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [content, setContent] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

        var templateParams = {
            content: content,
            phone: phone,
            name: name,
            email: email,
        }
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                alert('Gửi email thành công')
            })
            .catch(err => {
                alert('Gửi email thất bại. Vui lòng thử lại')
                console.log(err)
            });
    };

    return (
        <form onSubmit={sendEmail}>
            <FormGroup variant="standard">
                <TextField variant="filled" sx={{ backgroundColor: 'white' }} value={name} label="Tên" onChange={(e) => { setName(e.target.value) }} />
                <TextField variant="filled" sx={{ backgroundColor: 'white' }} value={email} margin="normal" label="Email" onChange={(e) => { setEmail(e.target.value) }} />
                <TextField variant="filled" sx={{ backgroundColor: 'white' }} InputProps={{
                    startAdornment: <InputAdornment position="start">(+84)</InputAdornment>,
                }} value={phone} margin="normal" label="SĐT" onChange={(e) => { setPhone(e.target.value) }} />

                <TextField variant="filled" sx={{ backgroundColor: 'white' }} rows={5} multiline value={content} margin="normal" label="Nội dung" onChange={(e) => { setContent(e.target.value) }} />

                <Button type="submit" variant="outlined" sx={{ backgroundColor: 'blue', py: 1.5, color: 'white', borderColor: "blue" }}>Gửi email</Button>
            </FormGroup>
        </form>
    )
}

export default Form