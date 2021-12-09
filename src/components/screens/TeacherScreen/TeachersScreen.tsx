import "./TeachersScreen.scss";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Container, Divider, TextField } from "@mui/material";

import Teacher from "../../../classes/Teacher";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";
import Business from "../../../classes/Business";
import TeacherAdd from "./TeacherAdd";
import CModal from "../../ui/CModal/CModal";
import TeacherSelected from "./TeacherSelected";
import { useCurrentUser } from "../../../hooks/currentUser";
import { useCurrentBusiness } from "../../../hooks/currentBusiness";
import Api from "../../../api/Api";


const TAG = "TEACHERS SCREENS";
type TeachersScreenProps = {};
const TeacherEmpty = () => new Teacher(null);
const TeachersScreen: React.FC<TeachersScreenProps> = () => {
  console.log(TAG, "rendererizamos este componente");

  const [rows, setRows] = useState<Teacher[]>([]);
  const [search, setSearch] = useState("");
  const [currentTeacher, setCurrentTeacher] = useState(TeacherEmpty());
  const [addUserEnable, setAddUserEnable] = useState(false);
  const [modifyUser, setModifyUser] = useState(TeacherEmpty());
  const me = useCurrentUser();
  const cBusiness = useCurrentBusiness();
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Nombre", width: 130 },
    { field: "lastName", headerName: "Apellido", width: 130 },
    { field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.getValue(params.id, "name") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
    { field: "subject", headerName: "Asignatura", width: 130 },
  ];

  useEffect(() => {
    const searchValue = search.toLowerCase();
    // const rows = [0, 0, 0, 0].map(
    //   (item, index) =>
    //     new Teacher({
    //       name: "Andrés", //+ index//
    //       lastName: "Murillo",
    //       subject: "Matemáticas",
    //       id: Number(index + 1) + "",
    //       idCard: "1234566",
    //       email: "afmurillor@gmail.com",
    //       creationDate: 0,
    //     })
    // );
    const rows = teachers;
    setTeachers(
      searchValue.length > 0
        ? rows.filter((item) => {
            const nn = (item.name + " " + item.lastName).toLowerCase();
            if (nn.includes(searchValue)) return true;
            if (item.subject.includes(searchValue)) return true;
            return false;
          })
        : rows
    );
  }, [search, teachers]);

    useEffect(() => {
      const unsubs = Api.database.teacher.getTeachersListener(
        cBusiness,
        (res) => {
          setTeachers(res);
        }
      );
      return () => unsubs();
    }, [cBusiness]);



  //   setRows(
  //     searchValue.length > 0
  //       ? rows.filter((item) => {
  //           const nn = (item.name + " " + item.lastName).toLowerCase();
  //           if (nn.includes(searchValue)) return true;
  //           return false;
  //         })
  //       : rows
  //   );
  // }, [search]);

  const onRowClick = useCallback((e: GridRowParams) => {
    console.log(TAG, e.row);
    const teacher: any = e.row;
    setCurrentTeacher(teacher);
  }, []);

  return (
    <Container className="TeachersScreen">
      {/* agregar usuarios */}
      <CModal open={addUserEnable} onClose={() => setAddUserEnable(false)}>
        <TeacherAdd
          onClose={() => setAddUserEnable(false)}
          onSave={() => setAddUserEnable(false)}
        />
      </CModal>
      {/* editar usuarios */}
      <CModal
        open={!modifyUser.isEmpty}
        onClose={() => setModifyUser(TeacherEmpty())}
      >
        <TeacherAdd
          originalTeacher={modifyUser}
          onClose={() => setModifyUser(TeacherEmpty())}
          onSave={() => setModifyUser(TeacherEmpty())}
        />
      </CModal>
      <Box p={4}>
        <TeacherSelected
          currentTeacher={currentTeacher}
          setCurrentTeacher={setCurrentTeacher}
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
        {!currentTeacher.isEmpty && (
          <TeacherSelected
            currentTeacher={currentTeacher}
            setCurrentTeacher={setCurrentTeacher}
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
        <Divider sx={{ my: 1 }}>Toca un docente para editarlo</Divider>
      </Box>
    </Container>
  );
};
export default TeachersScreen;
