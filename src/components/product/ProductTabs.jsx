import styles from "./ProductTabs.module.scss";
import TabContext from "@mui/lab/TabContext";
import TableRow from "@mui/material/TableRow";
import User from "../user/User";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { useState } from "react";
import { formatDistance, parseISO, subDays } from "date-fns";
import { styled } from "@mui/system";
import TableContainer from "@mui/material/TableContainer";

export default function ProductTabs({ text, bids }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const dateFunc = (date) => {
  //   formatDistance(subDays(date, 3), new Date(), { addSuffix: true });
  // };

  const StyledTableRow = styled(TableRow)({
    background: "rgba(78, 36, 242, 0.15)",
    width: "578px",
    height: "64px",
    "&:nth-of-type(even)": {
      background: "rgba(78, 36, 242, 0.5)",
    },
  });

  return (
    <div className={styles["product-tabs"]}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1 }}>
          <TabList onChange={handleChange}>
            <Tab label="Details" value="1" className={styles["tab-details"]} />
            <Tab label="Bids" value="2" className={styles["tab-bids"]} />
          </TabList>
        </Box>
        <TabPanel value="1">{text}</TabPanel>
        <TabPanel value="2">
          <TableContainer>
            <TableBody>
              {bids.map((bid, i) => (
                <StyledTableRow
                  className={(styles["table-row"], `table-row-${i}`)}
                >
                  <TableCell >
                    <User {...bid.user} />
                  </TableCell>
                  <TableCell style={{color: "#24F25E"}}>{bid.amount} ETH</TableCell>
                  <TableCell>
                    {formatDistance(parseISO(bid.date, 3), new Date(), {
                      addSuffix: true,
                    })}
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </TableContainer>
        </TabPanel>
      </TabContext>
    </div>
  );
}
