import React from "react";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LogoutIcon from "@mui/icons-material/Logout";

import history from "../../services/history";
import {
  HeaderBox,
  HeaderContainer,
  LeftSide,
  RightSide,
} from "./HeaderStyles";
import Logo from "../../files/images/clina-logo.svg";

export default function Header() {
  const handleClick = () => {
    localStorage.setItem("jwtToken", "");
    history.push("/login");
  };

  return (
    <HeaderBox>
      <HeaderContainer>
        <LeftSide>
          <img
            alt="Logo"
            src={Logo}
            style={{ height: "32px", marginTop: "5px" }}
          />
          <span>
            <AccessTimeIcon /> Salas disponíveis
          </span>
        </LeftSide>
        <RightSide>
          <Tooltip title="Minha conta" placement="bottom">
            <Avatar style={{ background: '#EEEEEE' }}>
              <PersonOutlineIcon />
            </Avatar>
          </Tooltip>
          <Tooltip title="Sair" placement="bottom">
            <IconButton style={{ marginLeft: "10px" }} onClick={handleClick}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </RightSide>
      </HeaderContainer>
    </HeaderBox>
  );
}
