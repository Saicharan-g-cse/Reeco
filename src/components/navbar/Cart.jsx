import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';

export default function Cart({ cartItemCount }) {
    return (
        <IconButton>
            <Badge badgeContent={cartItemCount} color={'warning'}>
                <ShoppingCartIcon style={{ color: 'white' }} />
            </Badge>
        </IconButton>
    );
}
