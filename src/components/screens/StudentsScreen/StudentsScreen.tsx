import "./StudentsScreen.scss";
import React, { useCallback, useEffect, useState } from "react";
import {
  //Avatar,
  Button,
  //Card,
  //CardHeader,
  Divider,
  //IconButton,
 // Modal,
  TextField,
  //Typography,
} from "@mui/material";

import Student from "../../../classes/Student";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";
import Business from "../../../classes/Business";
import StudentAdd from "./StudentAdd";
import CModal from "../../ui/CModal/CModal";
import StudentSelected from "./StudentSelected";

const TAG = "STUDENTS SCREENS";
type StudentsScreenProps = {};
const StudentEmpty = () => new Student(null);
const StudentsScreen: React.FC<StudentsScreenProps> = () => {
  console.log(TAG, "rendererizamos este componente");

  const [rows, setRows] = useState<Business[]>([]);
  const [search, setSearch] = useState("");
  const [currentStudent, setCurrentStudent] = useState(StudentEmpty());
  const [addUserEnable, setAddUserEnable] = useState(false);
  const [modifyUser, setModifyUser] = useState(StudentEmpty());

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

    // {
    //   field: "ip",
    //   headerName: "IP",
    //   width: 110,
    // },
  ];

  useEffect(() => {
    const searchValue = search.toLowerCase();
    const rows = [0, 0, 0, 0].map(
      (item, index) =>
        new Student({
          name: "Paula", //+ index,
          lastName: "Vergara Solis",
          id: Number(index + 1) + "",
          idCard: "200192839",
          email: "paula.vs@gmail.com",
          code: "23",
          grade: "4",
          group: "C",
          activeClasses: "Español-Inglés-Cocina",
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
            if (item.code.includes(searchValue)) return true;
            return false;
          })
        : rows
    );
  }, [search]);

  const onRowClick = useCallback((e: GridRowParams) => {
    console.log(TAG, e.row);
    const Student: any = e.row;
    setCurrentStudent(Student);
  }, []);

  return (
    <div className="StudentsScreen">
      {/* agregar usuarios */}
      <CModal open={addUserEnable} onClose={() => setAddUserEnable(false)}>
        <StudentAdd
          onClose={() => setAddUserEnable(false)}
          onSave={() => setAddUserEnable(false)}
        />
      </CModal>
      {/* editar usuarios */}
      <CModal
        open={!modifyUser.isEmpty}
        onClose={() => setModifyUser(StudentEmpty())}
      >
        <StudentAdd
          originalStudent={modifyUser}
          onClose={() => setModifyUser(StudentEmpty())}
          onSave={() => setModifyUser(StudentEmpty())}
        />
      </CModal>
      {// box como en teachers screen}
        
      <Box p={4}>
      <StudentSelected
          currentStudent={currentStudent}
          setCurrentStudent={setCurrentStudent}
          onEdit={(c) => setModifyUser(c)}
        />
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
        {!currentStudent.isEmpty && (
          <StudentSelected
            currentStudent={currentStudent}
            setCurrentStudent={setCurrentStudent}
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
        <Divider sx={{ my: 1 }}>Toca un estudiante para editarlo</Divider>
        </Box>
    };
    </div>
  );
};
export default StudentsScreen;
