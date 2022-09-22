import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import {
  Stack,
  Tabs,
  ImageList,
  ButtonGroup,
  Button,
  Icon,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import "./Chikncard.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


export default function Chikncard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(()=>{
    setValue( props.selected == 'CHIKN' ? 0 : props.selected == 'ROOSTR' ? 1 : 2)
  },[props.selected])
  return (
    <div>
      <Stack direction="row" sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <Grid container justifyContent="center">
          <Grid xs={10}>
            <Card sx={{ background: "#2A2C54", borderRadius: "12px" }}>
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    background: "#222343",
                  }}
                >
                  <Tabs
                    value={value}
                    textColor="#fff"
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{ color: "#fff" }}
                  >
                    <Tab  label="CHIKN" {...a11yProps(0)} />
                    <Tab label="ROOSTR" {...a11yProps(1)} />
                    <Tab label="FARMLAND" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Typography variant="h5" color="error">
                    Sale
                  </Typography>
                  <Grid container>
                    <Grid xs={12}>
                      <ButtonGroup 
                      
                        variant="outlined"
                        aria-label="outlined button group"
                        color="error"
                      >
                        {" "}
                        <Button className="btn1">For Sale</Button>
                        <Button className="btn2" sx={{bgcolor:"#3b3d76"}}>Show All</Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid
                      xs={12}
                      container
                      justifyContent="end"
                      sx={{ color: "#fff", margin: "10px" }}
                    >
                      Floor Value: 0{" "}
                      <img src="/download.svg" width="15" alt="" />
                    </Grid>
                    <Grid xs={12} sx={{ margin: "10px" }}>
                      <Typography variant="h5" color="error">
                        You own 0 chikn
                      </Typography>
                    </Grid>
                    <Grid xs={12} className="desktopbtn" >
                      <ButtonGroup
                     size="small"
                        variant="outlined"
                        aria-label="outlined button group"
                        color="error"
                      >
                        {" "}
                        <Button  className="btn1"  sx={{padding:"12px",bgcolor:"#3b3d76"}}>Lowest price</Button>
                        <Button>Highest price</Button>
                        <Button>Highest rank</Button>
                        <Button>Lowest rank</Button>
                        <Button>Lowest #</Button>
                        <Button>Highest kg</Button>
                        <Button>Recently sold</Button>
                        <Button  className="btn2">Recently listed</Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid xs={12} className="mobilebtn" >
                      <ButtonGroup
                     orientation="vertical"
                     size="large"
                        variant="outlined"
                        aria-label="outlined button group"
                        color="error"
                      >
                        {" "}
                        <Button  className="btnmobile1">Lowest price</Button>
                        <Button>Highest price</Button>
                        <Button>Highest rank</Button>
                        <Button>Lowest rank</Button>
                        <Button>Lowest #</Button>
                        <Button>Highest kg</Button>
                        <Button>Recently sold</Button>
                        <Button  className="btnmobile2">Recently listed</Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid xs="12" md="5" lg="5" xl="5">
                      <Paper
                       className="btn3"

                        component="form"
                        sx={{
                          p: "0",
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          background: "#222343",
                          border: "1px solid",
                          marginTop: "30px",
                        }}
                      >
                        <Button
                         className="btn1"
                          sx={{ p: "10px" }}
                          variant="contained"
                          color="error"
                          aria-label="search"
                        >
                          Search
                        </Button>
                        <InputBase
                          sx={{ ml: 1, flex: 1, color: "lightblue" }}
                          placeholder="Enter chikn ID or name"
                          inputProps={{ "aria-label": "search google maps" }}
                        />
                      </Paper>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Typography variant="h5" color="error">
                    Sale
                  </Typography>
                  <Grid container>
                    <Grid xs={12}>
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined button group"
                        color="error"
                      >
                        {" "}
                        <Button  className="btn1" >For Sale</Button>
                        <Button  className="btn2">Show All</Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid
                      xs={12}
                      container
                      justifyContent="end"
                      sx={{ color: "#fff", margin: "10px" }}
                    >
                      Floor Value: 0{" "}
                      <img src="/download.svg" width="15" alt="" spacing />
                    </Grid>
                    <Grid xs={12} sx={{ margin: "10px" }}>
                      <Typography variant="h5" color="error">
                        You own 0 roostr
                      </Typography>
                    </Grid>
                    <Grid xs={12} className="desktopbtn" >
                      <ButtonGroup
                     size="small"
                        variant="outlined"
                        aria-label="outlined button group"
                        color="error"
                      >
                        {" "}
                        <Button  className="btn1" sx={{padding:"12px"}}>Lowest price</Button>
                        <Button>Highest price</Button>
                        <Button>Highest rank</Button>
                        <Button>Lowest rank</Button>
                        <Button>Lowest #</Button>
                        <Button>Highest kg</Button>
                        <Button>Recently sold</Button>
                        <Button  className="btn2">Recently listed</Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid xs={12} className="mobilebtn" >
                      <ButtonGroup
                     
                     orientation="vertical"
                     size="large"
                        variant="outlined"
                        aria-label="outlined button group"
                        color="error"
                      >
                        {" "}
                        <Button  className="btnmobile1" >Lowest price</Button>
                        <Button>Highest price</Button>
                        <Button>Highest rank</Button>
                        <Button>Lowest rank</Button>
                        <Button>Lowest #</Button>
                        <Button>Highest kg</Button>
                        <Button>Recently sold</Button>
                        <Button  className="btnmobile2">Recently listed</Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid xs="12" md="5" lg="5" xl="5">
                      <Paper
                       className="btn3"
                        component="form"
                        sx={{
                          p: "0",
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          background: "#222343",
                          border: "1px solid",
                          marginTop: "30px",
                        }}
                      >
                        <Button
                         className="btn1"
                          sx={{ p: "10px" }}
                          variant="contained"
                          color="error"
                          aria-label="search"
                        >
                          Search
                        </Button>
                        <InputBase
                          sx={{ ml: 1, flex: 1, color: "lightblue" }}
                          placeholder="
       
Enter Roostr name or ID

        "
                          inputProps={{ "aria-label": "search google maps" }}
                        />
                      </Paper>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography variant="h5" color="error">
                    Sale
                  </Typography>
                  <Grid container>
                    <Grid xs={12}>
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined button group"
                        color="error"
                      >
                        {" "}
                        <Button className="btn1">For Sale</Button>
                        <Button  className="btn2">Show All</Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid
                      xs={12}
                      container
                      justifyContent="end"
                      sx={{ color: "#fff", margin: "10px" }}
                    >
                      Floor Value: 0{" "}
                      <img src="/download.svg" width="15" alt="" spacing />
                    </Grid>
                    <Grid xs={12} sx={{ margin: "10px" }}>
                      <Typography variant="h5" color="error">
                        You own 0 farmland
                      </Typography>
                    </Grid>
                    <Grid xs={12} className="desktopbtn" >
                      <ButtonGroup
                     size="small"
                        variant="outlined"
                        aria-label="outlined button group"
                        color="error"
                      >
                        {" "}
                        <Button  className="btn1" sx={{padding:"12px"}} >Lowest price</Button>
                        <Button>Highest price</Button>
                        <Button>Highest rank</Button>
                        <Button>Lowest rank</Button>
                        <Button>Lowest #</Button>
                        <Button>Highest kg</Button>
                        <Button>Recently sold</Button>
                        <Button  className="btn2">Recently listed</Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid xs={12} className="mobilebtn" >
                      <ButtonGroup
                     orientation="vertical"
                     size="large"
                        variant="outlined"
                        aria-label="outlined button group"
                        color="error"
                      >
                        {" "}
                        <Button  className="btnmobile1">Lowest price</Button>
                        <Button>Highest price</Button>
                        <Button>Highest rank</Button>
                        <Button>Lowest rank</Button>
                        <Button>Lowest #</Button>
                        <Button>Highest kg</Button>
                        <Button>Recently sold</Button>
                        <Button  className="btnmobile2">Recently listed</Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid xs="12" md="5" lg="5" xl="5">
                      <Paper
                       className="btn3"
                        component="form"
                        sx={{
                          p: "0",
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          background: "#222343",
                          border: "1px solid",
                          marginTop: "30px",
                        }}
                      >
                        <Button
                         className="btn1"
                          sx={{ p: "10px" }}
                          variant="contained"
                          color="error"
                          aria-label="search"
                        >
                          Search
                        </Button>
                        <InputBase
                          sx={{ ml: 1, flex: 1, color: "lightblue" }}
                          placeholder="
       
Enter Farmland ID or name

        "
                          inputProps={{ "aria-label": "search google maps" }}
                        />
                      </Paper>
                    </Grid>
                  </Grid>
                </TabPanel>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}
