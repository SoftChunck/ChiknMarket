import { Typography,Stack, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import "./Tiles.css"
import React from 'react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'rgb(0, 0, 34);',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
}));
export default function Tiles() {
  return (
    <Stack  className='back'>
      <Stack px={6}>
<Typography variant="h4" color='error' pt={2} >Farmland Tiles</Typography>
</Stack>

<Box    sx={{
        
       
      }}>
      <Grid  className='grid2'  >
        <Grid className='grid'   sm={8} xs={12} py={2}  >
        <Box >
          <Item variant="contained" className='grid3' >
          <Button className='btn' variant="texted"  pt={2}  diraction='row'
           sx={{ justifycontant:'start'
           }}
          >LOOKS
</Button>
          <Button variant="texted" pt={2}  >TRAIT </Button>
          <Button variant="texted" pt={2} >PERCENTAGE 	
</Button>
          <Button variant="texted" pt={2} >RARITY</Button>
          </Item>
          
  <Item className='first' >
    <img className='img' src="1.png"  alt=""  />
    <Typography className='ip'>Annuit Cœptis</Typography>
    <Typography className='ip'>0.15%</Typography>
    <Typography className='pp'>Legendary</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="2.png"  alt=""  />
    <Typography className='ip'>AVAX Pyramid</Typography>
    <Typography className='ip'>0.15%</Typography>
    <Typography className='pp'>Legendary</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="3.png"  alt=""  />
    <Typography className='ip'>Bone Daddy</Typography>
    <Typography className='ip'>0.15%</Typography>
    <Typography className='pp'>Legendary</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="4.png"  alt=""  />
    <Typography className='ip'>Abandoned Mine</Typography>
    <Typography className='ip'>0.30%</Typography>
    <Typography className='pp'>Legendary</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="5.png"  alt=""  />
    <Typography className='ip'>chikn Mountain</Typography>
    <Typography className='ip'>0.30%</Typography>
    <Typography className='pp'>Legendary</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="6.png"  alt=""  />
    <Typography className='ip'>Excalibur</Typography>
    <Typography className='ip'>0.30%</Typography>
    <Typography className='pp'>Legendary</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="7.png"  alt=""  />
    <Typography className='ip'>Space Rock</Typography>
    <Typography className='ip'>0.30%</Typography>
    <Typography className='pp'>Legendary</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="8.png"  alt=""  />
    <Typography className='ip'>Tungsten Cube</Typography>
    <Typography className='ip'>0.30%</Typography>
    <Typography className='pp'>Legendary</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="9.png"  alt=""  />
    <Typography className='ip'>Ancient Ruins</Typography>
    <Typography className='ip'>0.59%</Typography>
    <Typography className='pp1'>	Elite</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="10.png"  alt=""  />
    <Typography className='ip'>Big Red Windmill</Typography>
    <Typography className='ip'>0.59%</Typography>
    <Typography className='pp1'>	Elite</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="11.png"  alt=""  />
    <Typography className='ip'>Birdie</Typography>
    <Typography className='ip'>0.59%</Typography>
    <Typography className='pp1'>	Elite</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="12.png"  alt=""  />
    <Typography className='ip'>Haunted Graveyard</Typography>
    <Typography className='ip'>0.59%</Typography>
    <Typography className='pp1'>	Elite</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="13.png"  alt=""  />
    <Typography className='ip'>Helipad</Typography>
    <Typography className='ip'>0.59%</Typography>
    <Typography className='pp1'>	Elite</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="14.png"  alt=""  />
    <Typography className='ip'>Mana Mountain</Typography>
    <Typography className='ip'>0.59%</Typography>
    <Typography className='pp1'>	Elite</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="15.png"  alt=""  />
    <Typography className='ip'>Mysterious Hole</Typography>
    <Typography className='ip'>0.59%</Typography>
    <Typography className='pp1'>	Elite</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="16.png"  alt=""  />
    <Typography className='ip'>Old Windmill</Typography>
    <Typography className='ip'>0.59%</Typography>
    <Typography className='pp1'>	Elite</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="17.png"  alt=""  />
    <Typography className='ip'>Water</Typography>
    <Typography className='ip'>0.59%</Typography>
    <Typography className='pp1'>	Elite</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="18.png"  alt=""  />
    <Typography className='ip'>Water</Typography>
    <Typography className='ip'>1.18%</Typography>
    <Typography className='pp2'>Rare</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="19.png"  alt=""  />
    <Typography className='ip'>Fenced Bitcorn Patch</Typography>
    <Typography className='ip'>1.18%</Typography>
    <Typography className='pp2'>Rare</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="20.png"  alt=""  />
    <Typography className='ip'>Fenced Cabbage Patch</Typography>
    <Typography className='ip'>1.18%</Typography>
    <Typography className='pp2'>Rare</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="21.png"  alt=""  />
    <Typography className='ip'>Mountain</Typography>
    <Typography className='ip'>1.18%</Typography>
    <Typography className='pp2'>Rare</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="22.png"  alt=""  />
    <Typography className='ip'>Fenced Feed Patch</Typography>
    <Typography className='ip'>1.18%</Typography>
    <Typography className='pp2'>Rare</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="23.png"  alt=""  />
    <Typography className='ip'>Quaint Pond</Typography>
    <Typography className='ip'>1.18%</Typography>
    <Typography className='pp2'>Rare</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="24.png"  alt=""  />
    <Typography className='ip'>Rock Pond</Typography>
    <Typography className='ip'>1.18%</Typography>
    <Typography className='pp2'>Rare</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="25.png"  alt=""  />
    <Typography className='ip'>Bitcorn (4 Variants)</Typography>
    <Typography className='ip'>2.37%</Typography>
    <Typography className='pp3'>Nice</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="26.png"  alt=""  />
    <Typography className='ip'>Bitcorn Patch</Typography>
    <Typography className='ip'>2.37%</Typography>
    <Typography className='pp3'>Nice</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="27.png"  alt=""  />
    <Typography className='ip'>Cabbage Patch</Typography>
    <Typography className='ip'>2.37%</Typography>
    <Typography className='pp3'>Nice</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="28.png"  alt=""  />
    <Typography className='ip'>Empty Patch</Typography>
    <Typography className='ip'>2.37%</Typography>
    <Typography className='pp3'>Nice</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="29.png"  alt=""  />
    <Typography className='ip'>Fairy Ring</Typography>
    <Typography className='ip'>2.37%</Typography>
    <Typography className='pp3'>Nice</Typography>
  </Item> <Item className='first' >
    <img className='img' src="30.png"  alt=""  />
    <Typography className='ip'>Feed Patch</Typography>
    <Typography className='ip'>2.37%</Typography>
    <Typography className='pp3'>Nice</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="25.png"  alt=""  />
    <Typography className='ip'>Woodlands (4 Variants)</Typography>
    <Typography className='ip'>2.37%</Typography>
    <Typography className='pp4'>Common</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="26.png"  alt=""  />
    <Typography className='ip'>Roqs</Typography>
    <Typography className='ip'>2.37%</Typography>
    <Typography className='pp4'>Common</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="27.png"  alt=""  />
    <Typography className='ip'>Coq Roqs</Typography>
    <Typography className='ip'>2.37%</Typography>
    <Typography className='pp4'>Common</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="28.png"  alt=""  />
    <Typography className='ip'>Tasty Feed (4 Variants)</Typography>
    <Typography className='ip'>2.37%</Typography>
    <Typography className='pp4'>Common</Typography>
  </Item>
  <Item className='first' >
    <img className='img' src="29.png"  alt=""  />
    <Typography className='ip'>Orchard (2 Variants)</Typography>
    <Typography className='ip'>2.37%</Typography>
    <Typography className='pp4'>Common</Typography>
  </Item> <Item className='first' >
    <img className='img' src="30.png"  alt=""  />
    <Typography className='ip'>Rolling Hills (2 Variants)</Typography>
    <Typography className='ip'>2.37%</Typography>
    <Typography className='pp4'>Common</Typography>
  </Item>
  </Box>
        </Grid>
       
        <Grid className='side' sm={4} xs={12}  py={2} >
          <Item>
            <img className='img2' src="2.png" alt="" />
          </Item>
        </Grid>
        
      </Grid>
      </Box>
    </Stack>
  )
}

