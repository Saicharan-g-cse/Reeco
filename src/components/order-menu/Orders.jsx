import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ordersData from './data.json';
import { Stack } from '@mui/material';
import OrderState from './order-status/OrderState';

const columns = [
    {
        field: 'orderImage',
        headerName: '',
        width: 65,
        renderCell: (params) => (
            <Stack sx={{ pl: 1 }} alignItems={'center'}>
                <img
                    src={params.id & 1 ? 'Apple.png' : 'Avocado.jpg'}
                    width={45}
                    height={45}
                    alt={'Img'}
                />
            </Stack>
        ),
    },
    { field: 'productName', headerName: 'Product Name', width: 200 },
    {
        field: 'brand',
        headerName: 'Brand',
        width: 160,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 100,
        editable: true,
        renderCell: (params) => <p>$ {params.value}.00</p>,
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        width: 100,
        editable: true,
        renderCell: (params) => (
            <p>
                <span>
                    <b>{params.value}</b>
                </span>{' '}
                LB
            </p>
        ),
    },
    {
        field: 'total',
        headerName: 'Total',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 270,
        renderCell: (params) => <OrderState item={params} />,
    },
];

function getRandomNum(start, end) {
    return Math.floor(Math.random() * end) + start;
}

const rows = [];
for (let i = 1; i <= ordersData.data.length; i++) {
    rows.push({
        id: i,
        ...ordersData.data[i - 1],
        quantity: getRandomNum(0, 20),
        total: `$${getRandomNum(1, 1000)}.00`,
    });
}

export default function Orders() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                disableRowSelectionOnClick
                sx={{ borderRadius: '15px' }}
            />
        </Box>
    );
}
