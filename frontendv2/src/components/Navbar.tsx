import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { useContext } from "react";
import { Context } from "../helperMethods/context";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  const { user } = useContext(Context);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          href={"/" + user.userId}
        />
        <BottomNavigationAction
          label="Add/Edit Plant"
          icon={<AddIcon />}
          href={"/" + user.userId + "/" + "add"}
        />
        <BottomNavigationAction
          label="Subscription"
          icon={<PaymentIcon />}
          href={"/" + user.userId + "/" + "subscription"}
        />
      </BottomNavigation>
    </Paper>
  );
}