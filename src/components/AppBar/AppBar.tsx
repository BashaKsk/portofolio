import { Tabs, AppBar, Typography, Tab, styled, Box } from "@mui/material";
import React, { useState } from "react";
interface AppBarProps {
  children: React.ReactNode;
}

const StyledTabs = styled(Tabs)({
  cursor: "pointer",
  "& .MuiTabs-indicator": {
    backgroundColor: "#ffffff",
  },
});

const StyledTab = styled(Tab)({
  minWidth: 100,
  outline: "none !important",
  color: "#ffffff",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "bold",
  cursor: "pointer",
  "&.Mui-selected": {
    color: "#ffffff",
  },
});

const AppBarLayout: React.FC<AppBarProps> = ({ children }) => {
  const [value, setValue] = useState("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(newValue);

    const section = document.getElementById(newValue);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          height: 70,
          backgroundColor: "#202022 !important",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          // fontFamily: "Open Sans",
          pr: 10,
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          sx={{
            outline: "none",
          }}
        >
          <StyledTab label="Profile" value={"home"} />
          <StyledTab label="About" value={"about"} />
          <StyledTab label="Projects" value={"ksk2"} />
          <StyledTab label="Technologies" value={"tech"} />
        </StyledTabs>
      </AppBar>

      <Box
        sx={{
          mt: 10,
          px: 2,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default AppBarLayout;
