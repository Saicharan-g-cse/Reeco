import { Stack, styled, useTheme } from '@mui/material';
import React from 'react';
import Cart from './Cart';
import ProfileMenu from './ProfileMenu';
import Div from '../utils/Div';

const Link = styled('a')({
    textDecoration: 'none',
    color: 'white',
    cursor: 'pointer',
});

export default function NavBar() {
    const theme = useTheme();
    return (
        <Div
            style={{
                backgroundColor: theme.palette.primary.main,
                color: 'white',
            }}
        >
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Stack direction={'row'} spacing={5} alignItems={'center'}>
                    <h2>Recco</h2>
                    <Link style={{ color: 'white' }}>Store</Link>
                    <Link style={{ color: 'white' }}>Orders</Link>
                    <Link style={{ color: 'white' }}>Analytics</Link>
                </Stack>
                <Stack direction={'row'} spacing={5} alignItems={'center'}>
                    <Cart cartItemCount={4} />
                    <ProfileMenu />
                </Stack>
            </Stack>
        </Div>
    );
}
