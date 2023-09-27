import React from 'react';
import Div from '../utils/Div';
import SearchBar from './SearchBar';
import { IconButton, Stack } from '@mui/material';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import Button from '../utils/Button';
import Orders from './Orders';

export default function OrderList() {
    return (
        <Div>
            <Stack
                sx={{ pt: 3, pb: 3, pl: 5, pr: 5 }}
                style={{
                    border: '2.3px solid whitesmoke',
                    borderRadius: '15px',
                }}
            >
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <SearchBar />
                    <Stack direction={'row'} spacing={2.5}>
                        <Button outlined>Add Item</Button>
                        <IconButton>
                            <PrintOutlinedIcon color={'primary'} />
                        </IconButton>
                    </Stack>
                </Stack>
                <br />
                <Orders />
            </Stack>
        </Div>
    );
}
