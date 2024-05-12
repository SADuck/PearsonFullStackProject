import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SupportData from "../databases/loginCredentials.supportRequest.json"

const columns = [
  { field: 'Requester', headerName: 'Requester', width: 100 },
  { field: 'RequestType', headerName: 'RequestType', width: 100 },
  { field: 'SchuldeARepair', headerName: 'SchuldeARepair', width: 100 },
  {
    field: 'PartsNeeded',
    headerName: 'PartsNeeded',
    type: 'number',
    width: 200,
    height: 500,
  },
  {
    field: 'ProblemDescription',
    headerName: 'ProblemDescription',
    width: 200,
    height: 500
  },
];

const rows = SupportData

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%', marginTop: "3%", marginBottom: "3%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
