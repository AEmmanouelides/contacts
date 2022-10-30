import axios from "axios";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowId, GridSortModel, GridValueGetterParams, GRID_CHECKBOX_SELECTION_COL_DEF } from '@mui/x-data-grid';
import { FormattedMessage } from "react-intl";
import QuickSearchToolbar from "./QuickSearchToolbar/QuickSearchToolbar";
import { Contact } from "./interfaces/Contact";
import config from "../../config/config.json";

const Contacts = () => {
  const [contacts, setContacts] = useState([] as Contact[]);
  const [pageSize, setPageSize] = useState(config?.grid?.pageSize);

  // 3. List of contacts with format: {avatar} | {first_name last_name} | {checkbox}
  const columns: GridColDef[] = [
    {
      field: 'avatar',
      sortable: false,
      width: 80,
      filterable: false,
      disableColumnMenu: true,
      renderHeader: () => (
        <FormattedMessage id="avatar" description="Avatar header message"/>
      ),
      renderCell: (params: GridRenderCellParams) => (
        !!params.row.avatar //
          ? <Avatar src={params.row.avatar} /> 
          : <Avatar> {(params.row.first_name?.[0])}{(params.row.last_name?.[0])} </Avatar>
      )
    },
    {
      field: 'fullName',
      sortable: false,
      width: 160,
      renderHeader: () => (
        <FormattedMessage id="fullName" description="Full Name header message"/>
      ),
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.first_name || ''} ${params.row.last_name || ''}`,
    },
    {
      field: 'last_name',
      description: 'Only for initial sorting'
    },
    {
      // note: typically checkbox columns are placed to the far left
      ...GRID_CHECKBOX_SELECTION_COL_DEF, // 4. When user clicks on a contact the checkbox should toggle on/off
      width: 100,
    }
 ];
 
  const onRowsSelectionHandler = (ids: GridRowId[]) => {
    // 4. Console.log IDs of all selected contacts
    const selectedRowsData = ids.map((id: GridRowId) => contacts.find((contact: Contact) => contact?.id === id));
    console.log(selectedRowsData.map((x) => x?.id));
  };

  const setContactsData = async (): Promise<void> => {
    try {
      // 1. Fetch Contacts data
      const data: {data: Contact[]} = await axios.get(
        // if pagination was available at the api level consider using something like
        // "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json?page=0&limit=6"
        "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
      );
      setContacts(data?.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => { setContactsData(); }, []);
  
  return (
    <DataGrid
        autoHeight 
        rows={contacts}
        columns={columns}
        onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        pageSize={pageSize}
        rowsPerPageOptions={config?.grid?.rowsPerPageOptions}
        pagination
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        checkboxSelection
        components={{ Toolbar: QuickSearchToolbar  }}
        initialState={{ 
          sorting: {
              sortModel: config?.grid?.initialState?.sorting?.sortModel as GridSortModel // 2. Contact list sorted by last_name
          },
          columns: { 
              columnVisibilityModel: config?.grid?.initialState?.columns?.columnVisibilityModel // Hide last_name column
          } 
        }}
        componentsProps={{
        pagination: {
            labelRowsPerPage: <FormattedMessage id="rowsPerPage" description="Rows per page: pagination message"/>
        }
        }}
    />
  );
};
export default Contacts;
