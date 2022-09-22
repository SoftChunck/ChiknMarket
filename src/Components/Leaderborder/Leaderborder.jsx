import { Fab, Stack, ListItem } from "@mui/material";
import { Typography, Button,red } from "@mui/material";
import React, { Component } from "react";
import Box from "@mui/material/Box";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Grid from "@mui/material/Unstable_Grid2";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import ButtonGroup from '@mui/material/ButtonGroup';
import SearchIcon from "@mui/icons-material/Search";
import CachedIcon from '@mui/icons-material/Cached';
import "./Leaderborder.css";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "white" : "rgb(0, 0, 34);",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: "white",
// }));
class Leaderborder extends Component {
  render() {
    return (
      <Stack className="style">
        <div className=" "></div>
        <div className="container justify-contant-center py-1">
          <div className="row text-center ">
            <div className="col-lg-2 col-md-8 col-sm-12"></div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <img className="w-15" src="222.svg" alt="" />
            </div>
            <div className="col-lg-2 col-md-8 col-sm-12"></div>
          </div>
        </div>
        <div className="container ">
          <div className="row text-center ">
            <div className="col-lg-3 "></div>
            <div className="col-lg-6 col-md-6 col-sm-12 bg text-center">
              <h2 className="py-2">
                {" "}
                <b>LEADERBOARD</b>
              </h2>
            </div>
            <div className="col-lg-3 "></div>
          </div>
        </div>

        <div className="btn ">
          <button type="button" class="btn mt-2 ">
            <img className="i1" src="Web_Silhouette_01.png" alt="" />{" "}
            <b> CHIKN</b>{" "}
          </button>
          <button type="button" class="btn mt-2">
            <img className="i1" src="Web_Silhouette_01.png" alt="" />
            <b>ROOSTR</b>{" "}
          </button>
          <button type="button" class="btn mt-2">
            {" "}
            <img className="i2" src="333.svg" alt="" /> <b>ROOST</b>{" "}
          </button>
          <button type="button" class="btn mt-2">
            {" "}
            <img className="i1" src="4444.png" alt="" /> <b>FARMLAND</b>{" "}
          </button>
        </div>

        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h4>
                YOU HAVE <span className="text-danger">--</span> LAND RANKED
              </h4>
              <p>
                <b className="text-primary pe-1">
                  <b>0 Infinite</b>{" "}
                </b>{" "}
                <b className="text-secondary pe-1">
                  <b>0 Massive</b>{" "}
                </b>{" "}
                <b className="text-warning pe-1">0 Vast</b>{" "}
                <b className="pe-1 text-info">0 Big</b>{" "}
                <b className="text-success">0 Humble</b>
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control "
                  placeholder="Enter your land ID or name
"
                  aria-label="Enter your land ID or name
"
                  aria-describedby="basic-addon2"
                />
                <Fab className="bg-danger">
                  {" "}
                  <SearchIcon />
                </Fab>
               
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-8 text-end comm">
              <h3>COMMUNITY LEADERBOARD</h3>
            </div>
            <div className="col-lg-4 text-end comm">
            <Fab className="bg-dark rounded me-3 text-light">
                  {" "}
                  <SearchIcon />
                </Fab>
                <Fab className="bg-dark rounded text-light">
                <CachedIcon/>
                </Fab>
            </div>
          </div>
        </div>
    
        <Grid>
          <Grid className="container pt-5">
            <Box className="over">
              <ListItem variant="contained" className="flexs">
                <a
                  className="  text-decoration-none text-danger "
                  href="#"
                >
                  <b>SIZE RANK</b>{" "}
                </a>
                <a
                  className="pe-5  text-decoration-none text-danger "
                  href="#"
                >
                  <b>FARM ID</b>{" "}
                </a>
                <a
                  className="pe-5 ps-4 text-decoration-none text-danger "
                  href="#"
                >
                  <b>BIGNESS</b>{" "}
                </a>
                <a
                  className="pe-5 ps-4 text-decoration-none text-danger "
                  href="#"
                >
                  <b>FERTILITY MULTIPLIER</b>{" "}
                </a>
                <a
                  className="pe-5 ps-4 text-decoration-none text-danger "
                  href="#"
                >
                  <b>OWNER</b>{" "}
                </a>
                <a
                  className="pe-5 ps-4 text-decoration-none text-danger "
                  href="#"
                >
                  <b>MARKET</b>{" "}
                </a>
                <a
                  className="pe-5 ps-4 text-decoration-none text-danger "
                  href="#"
                >
                  <b>RARITY</b>{" "}
                </a>
              </ListItem>
              <Stack>
                <ListItem variant="contained" className="flex">
                  <img className="w1" src="download1.svg" alt="" />

                  <img className="w" src="146.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p>
                    The Kingdom Of <br /> Boksalot #145
                   
                    </p>
                  </div>

                  <h5 className="ph1">
                    <b>151 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>16PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info o ms-4">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
              <Stack>
                <ListItem variant="contained" className="flex">
                  <img className="w1" src="download2.svg" alt="" />

                  <img className="w" src="147.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p>
                    Yes2Chikn #3671
                    </p>
                  </div>

                  <h5 className="ph1">
                    <b>135 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>12.24PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info o1 ">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
              <Stack>
                <ListItem variant="contained" className="flex">
                  <img className="w1" src="download3.svg" alt="" />

                  <img className="w" src="148.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p>
                    No Swaps  Here <br/>#4591
                    </p>
                  </div>

                  <h5 className="ph1">
                    <b>132 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>16PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info ms-5 o2">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
              <Stack>
                <ListItem variant="contained" className="flex">
                  <h3 className="ps-4 pe-2">#4</h3>

                  <img className="w" src="149.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p>
                    greener past <br/> #4804
                    </p>
                  </div>

                  <h5 className="ph1">
                    <b>127 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>6PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info ms o3">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
               <Stack>
                <ListItem variant="contained" className="flex">
                <h3 className="ps-4 pe-2">#5</h3>

                  <img className="w" src="150.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p >
                    land #2291
                    </p>
                  </div>

                  <h5 className="ph1 ">
                    <b className='ps-4'>127 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>10PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info ms-5 o4">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
               <Stack>
                <ListItem variant="contained" className="flex">
                <h3 className="ps-4 pe-2">#6</h3>

                  <img className="w" src="151.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p >
                    FarmLandia #1991
                    </p>
                  </div>

                  <h5 className="ph1">
                    <b>125 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>11PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info ms-4 o5">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
               <Stack>
                <ListItem variant="contained" className="flex">
                <h3 className="ps-4 pe-2">#7</h3>

                  <img className="w" src="152.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p>
                    Cornerstone #2199
                    </p>
                  </div>

                  <h5 className="ph1">
                    <b>125 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>15px</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info ms-3 o6">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
              <Stack>
                <ListItem variant="contained" className="flex">
                <h3 className="ps-4 pe-2">#8</h3>

                  <img className="w" src="154.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p>
                    land #4892
                    </p>
                  </div>

                  <h5 className="ph8">
                    <b>124 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>7.24PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info ms-3 o7">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
              <Stack>
                <ListItem variant="contained" className="flex">
                <h3 className="ps-4 pe-2">#9</h3>

                  <img className="w" src="155.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p>
                    land #683
                    </p>
                  </div>

                  <h5 className="ph8">
                    <b>123 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>9PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info ms-5 o7">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
              <Stack>
                <ListItem variant="contained" className="flex">
                <h3 className="ps-4 pe-2">#10</h3>

                  <img className="w" src="156.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p>
                    Anatolian <br/> Heartland #148
                    </p>
                  </div>

                  <h5 className="ph1">
                    <b>122 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>4PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info ms-5 o8">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
              <Stack>
                <ListItem variant="contained" className="flex">
                <h3 className="ps-4 pe-2">#11</h3>

                  <img className="w" src="157.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p className="">
                    BWhale #9
                    </p>
                  </div>

                  <h5 className="ph8">
                    <b>122 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>18PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info ms-5 o9">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
              <Stack>
                <ListItem variant="contained" className="flex">
                <h3 className="ps-4 pe-2">#12</h3>

                  <img className="w" src="158.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p>
                    FaFaForage #1160
                    </p>
                  </div>

                  <h5 className="ph1">
                    <b>122 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>8PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info ms-5 o10">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
              <Stack>
                <ListItem variant="contained" className="flex">
                <h3 className="ps-4 pe-2">#13</h3>

                  <img className="w" src="159.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p>
                    Boktopia #2243
                    </p>
                  </div>

                  <h5 className="ph1">
                    <b>122 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>7.6PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info ms-5 o11">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
              <Stack>
                <ListItem variant="contained" className="flex">
                <h3 className="ps-4 pe-2">#14</h3>

                  <img className="w" src="160.jfif" alt="" />
                  <div>
                    <h5 className="text-info">INFINITE</h5>
                    <p>
                      The Kingdom Of <br /> Boksalot #145
                    </p>
                  </div>

                  <h5 className="ph1">
                    <b>121 BIGNESS</b>
                  </h5>

                  <Stack className="ph2">
                    <h4>11.3PX</h4>
                  </Stack>

                  <Stack className="ph3">
                    <h4>Oxa9...2ebf</h4>
                  </Stack>

                  <Stack className="ph4">
                    <h4>Not for Sale</h4>
                  </Stack>

                  <Stack className="ph5">
                    <button className="btn btn-info ms-5 o12">Superb</button>
                  </Stack>
                </ListItem>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Stack>
         
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 2,
          mb:2,
        },
      }}
    >
       <Typography variant="contained" color="error" 
       sx={{
        fontSize:'30px',
       }}>
          Page 1 of 313 (5,000)

          </Typography>
          <Grid>
          <Grid >
        <ButtonGroup variant="outlined" color="error" aria-label="outlined button group"
        sx={{
          width:'100%',
        }}>
  <Button><ArrowLeftIcon/></Button>
  <Button>-100</Button>
  <Button>-50</Button>
  <Button>+50</Button>
  <Button>+100</Button>
  <Button><ArrowRightIcon/></Button>
</ButtonGroup>
<Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%',  backgroundColor:'rgb(18, 18, 63)', color:'white' }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 , color:'white' }}
        placeholder="Enter Page No"
        inputProps={{ 'aria-label': 'Enter Page No' }}/>
     
      <IconButton color="error" sx={{ p: '10px' }} aria-label="directions">
        <SearchIcon/>
      </IconButton>
    </Paper></Grid></Grid>
</Box>
        </Stack>
    
      </Stack>
    );
  }
}

export default Leaderborder;
