import React from "react";

import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import Image from "../../assets/images/ibarhem.jpg";

export default function ChipAvatar() {
  return (
    <Stack style={{}} direction="row" spacing={5}>
      <Chip
        style={{ height: 40, backgroundColor: "#fff", fontWeight: 600 }}
        avatar={
          <Avatar
            style={{ height: 35, width: 35, borderRadius: "50%" }}
            src={Image}
            alt="ibrahim"
          />
        }
        label="Ibrahim Omar"
        variant="outlined"
      />
    </Stack>
  );
}
