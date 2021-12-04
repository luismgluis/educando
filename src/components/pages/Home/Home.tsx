import "./Home.scss";
import React, { useState } from "react";
import NavBar from "../../ui/NavBar/NavBar";
import NavBarDrawer from "../../ui/NavBar/NavBarDrawer";
import { useHomeGoTo } from "../../../hooks/useHomeGoTo";
//import useMobile from "../../../hooks/useMobile";
import CustomersScreen from "../../screens/CustomersScreen/CustomersScreen";
import BusinessScreen from "../../screens/BusinessScreen/BusinessScreen";
import RoutersScreen from "../../screens/RoutersScreen/RoutersScreen";
import TeachersScreen from "../../screens/TeacherScreen/TeachersScreen";
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
const TAG = "HOME";
type HomeProps = {
  prop1?: any;
};
const Home: React.FC<HomeProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  const homeGoTo = useHomeGoTo();
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  //const isDesktop = useMobile("desktop");

  return (
    <div className="Home">
      <div className="HomeLeft">
        <NavBarDrawer
          open={visibleDrawer}
          onClose={() => setVisibleDrawer(false)}
        />
      </div>
      <div className="HomeRight">
        <NavBar
          onOpenMenu={() => setVisibleDrawer(!visibleDrawer)}
          menuOpened={visibleDrawer}
        />
        {homeGoTo.screen === "UsersScreen" && <CustomersScreen />}
        {homeGoTo.screen === "BusinessScreen" && <BusinessScreen />}
        {homeGoTo.screen === "RoutersScreen" && <RoutersScreen />}
        {homeGoTo.screen === "TeachersScreen" && <TeachersScreen />}
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
      </div>
      {/* <Box
        sx={{
          width: `calc(100% - ${isDesktop ? 200 : 0}px)`,
          marginLeft: isDesktop ? "200px" : undefined,
        }}
      >
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
      </Box> */}
      {/* {homeGoTo.screen === "EditUser" && <EditProfile userData={userTest} />}
        {homeGoTo.screen === "InfoUser" && (
          <Profile userData={homeGoTo.parms} />
        )}
        {homeGoTo.screen === "AddUser" && <AddUser />} */}

    </div>
  );
};
export default Home;
