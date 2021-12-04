import "./CustomersScreen.scss";
<<<<<<< Updated upstream
import React, { useCallback, useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import Customer from "../../../classes/Customer";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";
import Business from "../../../classes/Business";
import CustomerAdd from "./CustomerAdd";
import CModal from "../../ui/CModal/CModal";
import CustomerSelected from "./CustomerSelected";

const TAG = "USERS SCREENS";
type CustomersScreenProps = {};
const customerEmpty = () => new Customer(null);
const CustomersScreen: React.FC<CustomersScreenProps> = () => {
  console.log(TAG, "rendererizamos este componente");

  const [rows, setRows] = useState<Business[]>([]);
  const [search, setSearch] = useState("");
  const [currentCustomer, setCurrentCustomer] = useState(customerEmpty());
  const [addUserEnable, setAddUserEnable] = useState(false);
  const [modifyUser, setModifyUser] = useState(customerEmpty());

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nombre", width: 130 },
    { field: "lastName", headerName: "Apellido", width: 130 },
    {
      field: "ip",
      headerName: "IP",
      width: 110,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.getValue(params.id, "name") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
  ];

  useEffect(() => {
    const searchValue = search.toLowerCase();
    const rows = [0, 0, 0, 0].map(
      (item, index) =>
        new Customer({
          name: "Pepe P" + index,
          lastName: "apapap",
          id: Number(index + 1) + "",
          idCard: "1234566",
          ip: "192.168.3.3",
          router: "asdasdaaa",
          email: "grajales805@gmail.com",
          creationDate: 0,
        })
    );

    setRows(
      searchValue.length > 0
        ? rows.filter((item) => {
            const nn = (item.name + " " + item.lastName).toLowerCase();
            if (nn.includes(searchValue)) return true;
            if (item.ip.includes(searchValue)) return true;
            return false;
          })
        : rows
    );
  }, [search]);

  const onRowClick = useCallback((e: GridRowParams) => {
    console.log(TAG, e.row);
    const customer: any = e.row;
    setCurrentCustomer(customer);
  }, []);

  return (
    <div className="CustomersScreen">
      {/* agregar usuarios */}
      <CModal open={addUserEnable} onClose={() => setAddUserEnable(false)}>
        <CustomerAdd
          onClose={() => setAddUserEnable(false)}
          onSave={() => setAddUserEnable(false)}
        />
      </CModal>
      {/* editar usuarios */}
      <CModal
        open={!modifyUser.isEmpty}
        onClose={() => setModifyUser(customerEmpty())}
      >
        <CustomerAdd
          originalCustomer={modifyUser}
          onClose={() => setModifyUser(customerEmpty())}
          onSave={() => setModifyUser(customerEmpty())}
        />
      </CModal>
      <Box p={4}>
        <Box display="flex" alignItems="center" justifyItems="center">
          <TextField
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar..."
          />
          <Divider orientation="vertical" sx={{ mx: 2, height: "100%" }} />
          <Button
            color="info"
            variant="contained"
            onClick={() => setAddUserEnable(!addUserEnable)}
          >
            Nuevo
          </Button>
        </Box>
        <Divider sx={{ my: 1 }} />
        {!currentCustomer.isEmpty && (
          <CustomerSelected
            currentCustomer={currentCustomer}
            setCurrentCustomer={setCurrentCustomer}
            onEdit={(c) => setModifyUser(c)}
          />
        )}

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            onRowClick={onRowClick}
          />
        </Box>
        <Divider sx={{ my: 1 }}>Toca un cliente para editarlo</Divider>
      </Box>
    </div>
  );
=======
import React, { Fragment } from "react";
import SearchBar from "../../ui/SearchBar/SearchBar";
const TAG = "USERS SCREENS";
type CustomersScreenProps = {
  prop1?: any;
};
const CustomersScreen: React.FC<CustomersScreenProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  return (
    <Fragment>
      <SearchBar />
    </Fragment>
    );
>>>>>>> Stashed changes
};
export default CustomersScreen;
