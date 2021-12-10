import "./ClassesScreen.scss";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Divider, TextField, Typography } from "@mui/material";

import Class from "../../../classes/Class";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";

import ClassAdd from "./ClassAdd";
import CModal from "../../ui/CModal/CModal";
import ClassSelected from "./ClassSelected";
import { Add, AddCircle, PlusOne } from "@mui/icons-material";
import ClassesInfo from "../../ui/ClassesInfo/ClassesInfo";

const TAG = "CLASSES SCREEN";
type ClassesScreenProps = {};
const ClassEmpty = () => new Class(null);
const ClassesScreen: React.FC<ClassesScreenProps> = () => {
  console.log(TAG, "rendererizamos este componente");

  const [rows, setRows] = useState<Class[]>([]);
  const [search, setSearch] = useState("");
  const [currentClass, setCurrentClass] = useState(ClassEmpty());
  const [addUserEnable, setAddUserEnable] = useState(false);
  const [modifyUser, setModifyUser] = useState(ClassEmpty());

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nombre", width: 130 },
    { field: "lastName", headerName: "Apellidos", width: 130 },
    {
      field: "fullName",
      headerName: "Nombre Completo",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.getValue(params.id, "name") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
    { field: "grade", headerName: "Grado", width: 130 },
    { field: "group", headerName: "Grupo", width: 130 },
  ];

  useEffect(() => {
    const searchValue = search.toLowerCase();
    const rows = [0, 0, 0, 0].map(
      (item, index) =>
        new Class({
          name: "Claudia", //+ index,
          lastName: "Solano Carvajal",
          id: Number(index + 1) + "",
          idCard: "200091912",
          email: "claudia.sc@gmail.com",
          code: "13",
          grade: "4",
          group: "B",
          activeClasses: "Matemáticas-Biología-Danza",
          //ip: "192.168.3.3",
          //router: "nohaynada",
          //email: "grajales805@gmail.com",
          creationDate: 0,
        })
    );

    setRows(
      searchValue.length > 0
        ? rows.filter((item) => {
            const nn = (item.name + " " + item.lastName).toLowerCase();
            if (nn.includes(searchValue)) return true;
            return false;
          })
        : rows
    );
  }, [search]);

  const onRowClick = useCallback((e: GridRowParams) => {
    console.log(TAG, e.row);
    const Class: any = e.row;
    setCurrentClass(Class);
  }, []);

  return (
    <div className="ClassesScreen">
      {/* agregar usuarios */}
      <CModal open={addUserEnable} onClose={() => setAddUserEnable(false)}>
        <ClassAdd
          onClose={() => setAddUserEnable(false)}
          onSave={() => setAddUserEnable(false)}
        />
      </CModal>
      {/* editar usuarios */}
      <CModal
        open={!modifyUser.isEmpty}
        onClose={() => setModifyUser(ClassEmpty())}
      >
        <ClassAdd
          originalClass={modifyUser}
          onClose={() => setModifyUser(ClassEmpty())}
          onSave={() => setModifyUser(ClassEmpty())}
        />
      </CModal>
      <Box p={4}>
        <Box p={4}>
          <div>
            <h1>Información de las clases</h1>
            <ClassesInfo />
          </div>
        </Box>
        <Divider sx={{ my: 1 }}>Listado de estudiantes en clase</Divider>
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
            startIcon={<AddCircle />}
          >
            Estudiante
          </Button>
        </Box>
        <Divider sx={{ my: 1 }} />
        {!currentClass.isEmpty && (
          <ClassSelected
            currentClass={currentClass}
            setCurrentClass={setCurrentClass}
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
        <Divider sx={{ my: 1 }}>
          <Typography variant="caption">
            Toca un estudiante para ver las opciones
          </Typography>
        </Divider>
      </Box>
    </div>
  );
};
export default ClassesScreen;
