import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../theme";

const Logo = () => {
  const data = ["Faster Delivery", "COD", "10 am To 9 pm Service"];
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        p: 5,
        mt: 5,
        mb: 5,
      }}
    >
      <Box
        sx={{
        m:'auto',
          maxWidth: "1400px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => {
          return (
            <Box
              sx={{
                mr:2,
                ml:2,
                p: 2,
                border: "1px solid" + theme.palette.background.light,
                width: "300px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.background.light,
                  fontWeight: theme.typography.fontWeightBold,
                }}
              >
                {item}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Logo;
