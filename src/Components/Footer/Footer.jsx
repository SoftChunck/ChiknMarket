import React from 'react'
import {
  Stack, Typography, Grid, IconButton, Button, ButtonGroup, Tooltip, tooltipClasses, styled, CustomTooltip
,Divider} from '@mui/material'
import { Container } from '@mui/material'
import { BsDiscord, BsTwitter } from 'react-icons/bs'
import { AiFillMediumSquare } from 'react-icons/ai'
import { ListSubheader, List, ListItemText } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
function Footer() {
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 'none',
      borderRadius: '15px',
      backgroundColor: 'black',
      color: 'white'
    },
  });
  // const buttons = [

  //   <Button key="one" >0x89…3b79</Button>,
  //   <Button key="two" sx={{
  //     backgroundColor:'#222343',
  //     border:'1px solid #3b3d76',
  //     color:'white',
  // '&:hover':{
  //   backgroundColor:'transparent',
  //   border:'1px solid #3b3d76',

  // }
  //   }}></Button>,
  // ];
  return (
    <Stack className='footer'>
      <Container>
        <Grid container my={5}>
          <Grid item xs={12} sm={8} justifyContent='flex-start'> <Stack>
            <img src="chiknlogo.png" className='col-2 justify-content-start' alt="wait for internet" />
            <Typography variant='body1' align='start' sx={{
              color: 'white',
              fontSize: '18px'
            }}>
              10,000 algorithmically generated, unique chikn NFTs that lay $egg
            </Typography>
          </Stack>
            <Stack my={10}>
              <Typography variant='body1' sx={{
                color: '#df3f3d',
                textAlign: 'start',
                fontSize: '18px'
              }}>Join the Community</Typography>
              <Stack direction='row' spacing={1}>
                <IconButton size="large" sx={{
                  borderRadius: '15px',
                  color: 'white',
                  border: '1px solid #3b3d76',
                  backgroundColor: '#222343'
                }}>
                  <BsDiscord fontSize="22px" sx={{
                    color: 'white'
                  }} />
                </IconButton>

                <IconButton size="large" sx={{
                  borderRadius: '15px',
                  color: 'white',
                  border: '1px solid #3b3d76',
                  backgroundColor: '#222343'
                }}>
                  <BsTwitter fontSize="22px" sx={{
                    color: 'white'
                  }} />
                </IconButton>

                <IconButton size="large" sx={{
                  borderRadius: '15px',
                  color: 'white',
                  border: '1px solid #3b3d76',
                  backgroundColor: '#222343'
                }}>
                  <AiFillMediumSquare fontSize="22px" sx={{
                    color: 'white'
                  }} />
                </IconButton>
              </Stack>
            </Stack>

            <Stack>
              <Typography variant='body1' sx={{
                color: '#df3f3d',
                textAlign: 'start',
                fontSize: '18px'
              }}>Contracts</Typography>
              <Grid container my={1} >
                <Grid item xs={3} sm={2} lg={1}>
                  <Typography variant='body2' mt={1} sx={{
                    color: 'white',
                    textAlign: 'start',
                    fontSize: '14px'
                  }}>Chikn</Typography>  </Grid>
                <Grid item  xs={8} sm={5} lg={3}>

                  <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{
                    borderRadius: '15px',
                  }}>
                    <CustomTooltip title='copy contarct address' arrow>
                      <Button sx={{
                        backgroundColor: '#222343',
                        color: 'white',
                        border: '1px solid #3b3d76',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          border: '1px solid #3b3d76',
                        },
                        '&:active': {
                          backgroundColor: 'transparent',
                          border: '1px solid #3b3d76',
                        }
                      }}>0x89…3b79</Button>

                    </CustomTooltip>
                    <CustomTooltip title='View on Snowtrace.io' arrow>
                      <Button sx={{
                        backgroundColor: '#222343',
                        border: '1px solid #3b3d76',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          border: '1px solid #3b3d76',

                        }
                      }}><VisibilityIcon /></Button>
                    </CustomTooltip>

                  </ButtonGroup>
                </Grid>
              </Grid>

              <Grid container my={1} > 
                <Grid item xs={3} sm={2} lg={1}>
                <Typography variant='body2' mt={1} sx={{
                  color: 'white',
                  textAlign: 'start',
                  fontSize: '14px'
                }}>Roostr</Typography>
</Grid>
<Grid  xs={8} sm={5} lg={3}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{
                  borderRadius: '15px',
                }}>
                  <CustomTooltip title='copy contarct address' arrow>
                    <Button sx={{
                      backgroundColor: '#222343',
                      color: 'white',
                      border: '1px solid #3b3d76',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',
                      },
                      '&:active': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',
                      }
                    }}>0xCf…5e20</Button>

                  </CustomTooltip>
                  <CustomTooltip title='View on Snowtrace.io' arrow>
                    <Button sx={{
                      backgroundColor: '#222343',
                      border: '1px solid #3b3d76',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',

                      }
                    }}><VisibilityIcon /></Button>
                  </CustomTooltip>

                </ButtonGroup>
              </Grid>
              </Grid>



              <Grid container my={1}> 
              <Grid item xs={3} sm={2} lg={1}>
                <Typography variant='body2' mt={1} sx={{
                  color: 'white',
                  textAlign: 'start',
                  fontSize: '14px'
                }}>Farmland</Typography>
                </Grid>
 <Grid item  xs={8} sm={5} lg={3}>

                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{
                  borderRadius: '15px',
                }}>
                  <CustomTooltip title='copy contarct address' arrow>
                    <Button sx={{
                      backgroundColor: '#222343',
                      color: 'white',
                      border: '1px solid #3b3d76',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',
                      },
                      '&:active': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',
                      }
                    }}>0x00…Ac47</Button>

                  </CustomTooltip>
                  <CustomTooltip title='View on Snowtrace.io' arrow>
                    <Button sx={{
                      backgroundColor: '#222343',
                      border: '1px solid #3b3d76',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',

                      }
                    }}><VisibilityIcon /></Button>
                  </CustomTooltip>

                </ButtonGroup>
              </Grid>
              </Grid>




              <Grid container my={1} >
               <Grid item xs={2}  sm={1} paddingX={0}>
                <Typography variant='body2' mt={1} sx={{
                  color: 'white',
                  textAlign: 'start',
                  fontSize: '14px',padding:'0px'
                }}>$EGG</Typography> </Grid>
 <Grid item xs={10} sm={7} lg={4}  paddingLeft={4} justifyContent='flex-start' className='buttonsd'>

                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{
                  borderRadius: '15px', 
                }}>
                  <CustomTooltip title='copy contarct address' arrow>
                    <Button className='footerbtn' sx={{
                      backgroundColor: '#222343',
                      color: 'white',
                      border: '1px solid #3b3d76',
                      padding:'4px',
                     
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',
                      },
                      '&:active': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',
                      }
                    }}>0x89…3b79</Button>

                  </CustomTooltip>
                  <CustomTooltip title='View on Snowtrace.io' arrow>
                    <Button sx={{
                      backgroundColor: '#222343',
                      border: '1px solid #3b3d76',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',

                      }
                    }}><VisibilityIcon /></Button>
                  </CustomTooltip>
                  <CustomTooltip title='Add Egg Contract to Metamask' arrow>
                    <Button sx={{
                      backgroundColor: '#222343',
                      border: '1px solid #3b3d76',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',

                      }
                    }}><AccountBalanceWalletIcon /></Button>
                  </CustomTooltip>

                </ButtonGroup>
              </Grid>
</Grid>
<Grid container my={1} >
               <Grid item xs={2}  sm={1} paddingX={0}>
                <Typography variant='body2' mt={1} sx={{
                  color: 'white',
                  textAlign: 'start',
                  fontSize: '14px',padding:'0px'
                }}>$FEED</Typography> </Grid>
 <Grid item xs={10} sm={7} lg={4}  paddingLeft={4} justifyContent='flex-start' className='buttonsd'>

                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{
                  borderRadius: '15px', 
                }}>
                  <CustomTooltip title='copy contarct address' arrow>
                    <Button className='footerbtn' sx={{
                      backgroundColor: '#222343',
                      color: 'white',
                      border: '1px solid #3b3d76',
                      padding:'4px',
                     
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',
                      },
                      '&:active': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',
                      }
                    }}>0x89…3b79</Button>

                  </CustomTooltip>
                  <CustomTooltip title='View on Snowtrace.io' arrow>
                    <Button sx={{
                      backgroundColor: '#222343',
                      border: '1px solid #3b3d76',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',

                      }
                    }}><VisibilityIcon /></Button>
                  </CustomTooltip>
                  <CustomTooltip title='Add Egg Contract to Metamask' arrow>
                    <Button sx={{
                      backgroundColor: '#222343',
                      border: '1px solid #3b3d76',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',

                      }
                    }}><AccountBalanceWalletIcon /></Button>
                  </CustomTooltip>

                </ButtonGroup>
              </Grid>
</Grid>
  
<Grid container my={1} >
               <Grid item xs={2}  sm={1} paddingX={0}>
                <Typography variant='body2' mt={1} sx={{
                  color: 'white',
                  textAlign: 'start',
                  fontSize: '14px',padding:'0px'
                }}>$FERT</Typography> </Grid>
 <Grid item xs={10} sm={7} lg={4}  paddingLeft={4} justifyContent='flex-start' className='buttonsd'>

                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{
                  borderRadius: '15px', 
                }}>
                  <CustomTooltip title='copy contarct address' arrow>
                    <Button className='footerbtn' sx={{
                      backgroundColor: '#222343',
                      color: 'white',
                      border: '1px solid #3b3d76',
                      padding:'4px',
                     
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',
                      },
                      '&:active': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',
                      }
                    }}>0x89…3b79</Button>

                  </CustomTooltip>
                  <CustomTooltip title='View on Snowtrace.io' arrow>
                    <Button sx={{
                      backgroundColor: '#222343',
                      border: '1px solid #3b3d76',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',

                      }
                    }}><VisibilityIcon /></Button>
                  </CustomTooltip>
                  <CustomTooltip title='Add Egg Contract to Metamask' arrow>
                    <Button sx={{
                      backgroundColor: '#222343',
                      border: '1px solid #3b3d76',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        border: '1px solid #3b3d76',

                      }
                    }}><AccountBalanceWalletIcon /></Button>
                  </CustomTooltip>

                </ButtonGroup>
              </Grid>
</Grid>
  
            </Stack>

          </Grid>





          <Grid item xs={6} sm={2}>
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx=
                  {{
                    color: '#df3f3d',
                    textAlign: 'start',
                    fontSize: '22px',
                    bgcolor: 'transparent',
                    padding: '0px',
                    pl: 1,
                    fontWeight: '500',
                    fontFamily: "'Roboto Condensed', sans-serif"
                  }}>
                  Site
                </ListSubheader>
              }
            >
              <ListItemText primary="Home" align='start' sx={{
                color: 'white', pl: 2
              }} />

              <ListItemText primary="Chikn" align='start' sx={{
                color: 'white',
                marginTop: '10px', pl: 2
              }} />
              <List component="div" disablePadding>
                <ListItemText primary="Roost" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
                <ListItemText primary="Leaderboard" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
              </List>
              <ListItemText primary="Roostr" align='start' sx={{
                color: 'white',
                marginTop: '10px', pl: 2
              }} />
              <List component="div" disablePadding>
                <ListItemText primary="Roost" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
                <ListItemText primary="Leaderboard" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
              </List>

              <ListItemText primary="Farmland" align='start' sx={{
                color: 'white',
                marginTop: '10px', pl: 2
              }} />
              <List component="div" disablePadding>
                <ListItemText primary="LP Farm" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
                <ListItemText primary="Tiles/Traits" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
                <ListItemText primary="Leaderboard" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
              </List>
              <ListItemText primary="Wallet" align='start' sx={{
                color: 'white',
                marginTop: '10px', pl: 2
              }} />
              <List component="div" disablePadding>

                <ListItemText primary="Chikn" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
                <ListItemText primary="Roostr" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
                <ListItemText primary="Farmland" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
              </List>
              <ListItemText primary="Market" align='start' sx={{
                color: 'white',
                marginTop: '10px', pl: 2
              }} />
              <List component="div" disablePadding>

                <ListItemText primary="Chikn" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
                <ListItemText primary="Roostr" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
                <ListItemText primary="Farmland" align='start' sx={{
                  color: 'white',
                  pl: 4
                }} />
              </List>
            </List>
          </Grid>
          <Grid item xs={6} sm={2}>
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx=
                  {{
                    color: '#df3f3d',
                    textAlign: 'start',
                    fontSize: '22px',
                    bgcolor: 'transparent',
                    padding: '0px',
                    pl: 1,
                    fontWeight: '500',
                    fontFamily: "'Roboto Condensed', sans-serif"
                  }}>
                  Other
                </ListSubheader>
              }
            >
              <ListItemText primary="Changelog" align='start' sx={{
                color: 'white', pl: 2
              }} />

              <ListItemText primary="Roadmap" align='start' sx={{
                color: 'white',
                marginTop: '10px', pl: 2
              }} />
              <ListItemText primary="Status" align='start' sx={{
                color: 'white',
                marginTop: '10px', pl: 2
              }} />
              <ListItemText primary="Store" align='start' sx={{
                color: 'white',
                marginTop: '10px', pl: 2
              }} />
              <ListItemText primary="Terms" align='start' sx={{
                color: 'white',
                marginTop: '10px', pl: 2
              }} />
              <ListItemText primary="Docs" align='start' sx={{
                color: 'white',
                marginTop: '10px', pl: 2
              }} />
              <ListItemText primary="API" align='start' sx={{
                color: 'white',
                marginTop: '10px', pl: 2
              }} />
            </List>
          </Grid>
        </Grid>
        <hr height='2px' style={{
          color:'white'
        }} />
        <Stack direction='row' justifyContent='space-between'>
          
          <Stack justifyContent='flex-start'>
          <Typography variant='body2' sx={{
          color:'white'
        }}>© 2022 chikn</Typography>
          </Stack>
          <Stack justifyContent='flex-end'>
          <Typography variant='body2' sx={{
          color:'white'
        }}>Powered by </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Footer
