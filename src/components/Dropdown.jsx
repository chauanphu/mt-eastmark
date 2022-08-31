import { Box, List, ListItem, ListItemText, ListItemButton, Link, IconButton, Collapse } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { useState } from 'react';
const Dropdown = ({ items, isSub = false }) => {
    const [open, setOpen] = useState(false)
    const handleExpand = () => {
        setOpen(!open)
    }
    return (
        <List sx={{
            ml: isSub ? 2 : 0
        }}>
            {items.map((el, index) => {
                return (
                    <Box key={index}>
                        <ListItem sx={{ padding: 0 }}>
                            <ListItemButton component={Link} to={el.url}>
                                <ListItemText sx={{ ...el.style }} disableTypography>{el.name}</ListItemText>
                            </ListItemButton>
                            {
                                (el.sub_items === []) ?
                                    (!open ?
                                        (<IconButton edge="end" onClick={handleExpand} sx={{ mr: 1 }}>
                                            <ExpandMoreIcon />
                                        </IconButton>) :
                                        (<IconButton edge="end" onClick={handleExpand} sx={{ mr: 1 }}>
                                            <ExpandLessIcon />
                                        </IconButton>)
                                    )
                                    :
                                    (<></>)
                            }
                        </ListItem>
                        {
                            el.sub_items ?
                                (<Collapse in={open}>
                                    <Dropdown items={el.sub_items} isSub={true} />
                                </Collapse>) :
                                (<></>)
                        }

                    </Box>
                )
            })}
        </List >
    )
}

export default Dropdown