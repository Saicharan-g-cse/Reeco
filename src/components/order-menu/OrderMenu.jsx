import React from 'react';
import Div from '../utils/Div';
import { Divider, Stack, styled } from '@mui/material';
import BadgeIcon from '@mui/icons-material/BadgeOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

const Caption = styled('h5')({
    color: 'gray',
    fontWeight: 'bold',
});

export default function OrderMenu() {
    return (
        <Div style={{ marginTop: '16px' }}>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                sx={{ p: 2 }}
                style={{
                    border: '2.3px solid whitesmoke',
                    borderRadius: '15px',
                }}
            >
                <Stack sx={{ pl: 3 }} spacing={1}>
                    <Caption>Supplier</Caption>
                    <h4>East coast fruits & vegtables</h4>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack spacing={1}>
                    <Caption>Shipping data</Caption>
                    <h4 variant={'h6'}>Thu, Feb 10</h4>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack spacing={1}>
                    <Caption>Total</Caption>
                    <h4 variant={'h6'}>$1,500.0</h4>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack spacing={1}>
                    <Caption>Category</Caption>
                    <Stack direction={'row'} spacing={1}>
                        <BadgeIcon />
                        <ManageAccountsOutlinedIcon />
                        <RecordVoiceOverOutlinedIcon />
                        <AccountTreeOutlinedIcon />
                    </Stack>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack spacing={1}>
                    <Caption>Department</Caption>
                    <h4 variant={'h6'}>300-400-200</h4>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack sx={{ pr: 3 }} spacing={1}>
                    <Caption>Status</Caption>
                    <h4 variant={'h6'}>Awaiting your approvel</h4>
                </Stack>
            </Stack>
        </Div>
    );
}
