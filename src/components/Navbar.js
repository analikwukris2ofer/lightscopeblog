import React, { useState } from "react";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      // display: (props) => (props.open ? "flex" : "none"),
      // width: "70%",
      display: "none",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: "flex",
    // display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          LightScope GmBH
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          LS
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="chris"
            src="data:image/jpeg;base64,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"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
