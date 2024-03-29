import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AlarmAddIcon from "@mui/icons-material/AlarmAdd";
import { fetchQuotes } from "../store/quotesSlice";
import { Link } from "react-router-dom";
import { removeAlert } from "../store/alertsSlice";

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const alerts = useSelector((state) => state.alerts);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAlertClick = (index) => {
    dispatch(removeAlert(index));
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AlarmAddIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {alerts.length > 0 ? (
          alerts.map((alert, index) => (
            <MenuItem
              key={index}
              onClick={() => handleAlertClick(index)}
              component={Link}
              to={"/quote-manage"}
            >
              {alert.message}
            </MenuItem>
          ))
        ) : (
          <MenuItem onClick={handleClose}>No Alerts</MenuItem>
        )}
      </Menu>
    </div>
  );
}
