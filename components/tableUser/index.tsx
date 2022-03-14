import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useSwr from 'swr'

// @ts-ignore
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function createData(
  uuid: string,
  name: string,
  email: string,
  rg: string | null,
  cpf: string | null
) {
  return { uuid, name, email, rg, cpf };
}

interface data {
  uuid: string,
  name: string,
  email: string,
  rg?: string | null,
  cpf?: string | null
}

const rows: any = [
  createData('123', 'Johnny', 'johnny@johnny.com', '34234', '234234')
];

export default function TableUser() {
  const { data } = useSwr(`/api/user/list`, fetcher)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align='center'>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Rg</TableCell>
            <TableCell align="center">Cpf</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.users.map((row: data) => (
            <TableRow
              key={row.uuid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.uuid}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.rg}</TableCell>
              <TableCell align="center">{row.cpf}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}