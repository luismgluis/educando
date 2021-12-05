import "./Home.scss";
import React, { useState } from "react";
import NavBar from "../../ui/NavBar/NavBar";
import NavBarDrawer from "../../ui/NavBar/NavBarDrawer";
import { useHomeGoTo } from "../../../hooks/useHomeGoTo";
import useMobile from "../../../hooks/useMobile";
import CustomersScreen from "../../screens/CustomersScreen/CustomersScreen";
import BusinessScreen from "../../screens/BusinessScreen/BusinessScreen";
import RoutersScreen from "../../screens/RoutersScreen/RoutersScreen";
import { Box } from "@mui/material";
const TAG = "HOME";
type HomeProps = {
  prop1?: any;
};
const Home: React.FC<HomeProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  const homeGoTo = useHomeGoTo();
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const isDesktop = useMobile("desktop");

  return (
    <div className="Home">
      <div className="HomeLeft">
        <NavBarDrawer
          open={visibleDrawer}
          onClose={() => setVisibleDrawer(false)}
        />
      </div>
      <div className="HomeRight">
        <Box
          sx={{
            width: `80%`,
            marginLeft: isDesktop ? "20%" : undefined,
          }}
        >
          <NavBar
            onOpenMenu={() => setVisibleDrawer(!visibleDrawer)}
            menuOpened={visibleDrawer}
          />
          {homeGoTo.screen === "StudentsScreen" && <CustomersScreen />}
          {homeGoTo.screen === "BusinessScreen" && <BusinessScreen />}
          {homeGoTo.screen === "TeachersScreen" && <RoutersScreen />}
        </Box>
      </div>

      {/* {homeGoTo.screen === "EditUser" && <EditProfile userData={userTest} />}
        {homeGoTo.screen === "InfoUser" && (
          <Profile userData={homeGoTo.parms} />
        )}
        {homeGoTo.screen === "AddUser" && <AddUser />} */}
    </div>
  );
};
export default Home;
