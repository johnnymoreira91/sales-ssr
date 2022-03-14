import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import useSwr from 'swr'

// @ts-ignore
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const columns: GridColDef[] = [
  { field: 'productUuid', headerName: 'ID', width: 300 },
  { field: 'productName', headerName: 'Product name', width: 230 },
  { field: 'productPrice', headerName: 'Price', width: 100 },
  { field: 'productStock', headerName: 'Stock Total', width: 130 },
  { field: 'onSale', headerName: 'On Sale', width: 130 }
];

export default function TableProducts() {
  const { data } = useSwr(`/api/user/list`, fetcher)
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data?.products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}