import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import useSwr from 'swr'

// @ts-ignore
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'First name', width: 130 },
  { field: 'email', headerName: 'Email', width: 160 },
  { field: 'rg', headerName: 'Rg', width: 130 },
  { field: 'cpf', headerName: 'Cpf', width: 130 },
  { field: 'permissionLevel', headerName: 'Permission', width: 130 }
];

export default function TableUser() {
  const { data } = useSwr(`/api/user/list`, fetcher)
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data?.users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}