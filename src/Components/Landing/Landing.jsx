import React from 'react'
import {Grid, Stack,Button, Typography, Avatar,CardMedia} from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper";
import { Container } from 'react-bootstrap';
function Landing() {
  return (
    <Stack m={0} className='roostr'>
      <img src="Mainbanner.jpg" className='col-12 p-0' alt=" wait for internet" />
      <Stack className='roostr'>
      <Grid item sx={3} justifyContent='center'  alignItems='center' my={4}>
        <img src="RoostrLogo.png"  alt="wait for internet" width='200px' />
</Grid> 
<Stack  direction='row' justifyContent='center' mx={3} mb={8}>
        <Button className='marketbtn' sx={{width:'600px',height:'100px'}}>Check out the Market</Button>
        </Stack>
</Stack>
<Stack justifyContent='center' sx={{ display: { xs: 'none', sm: 'block' } }}>
  <Typography variant='h4'  sx={{
    fontSize:'36px',
    fontWeight:'300',
    color:'white'
  }}>10,000 algorithmically generated, unique chikn
</Typography>
<Typography variant='h4' sx={{
    fontSize:'36px',
    fontWeight:'300',
    color:'white'
  }}>NFTs that lay $egg</Typography>
</Stack>
<Stack justifyContent='center' sx={{ display: { xs: 'block', sm: 'none' } }}>
  <Typography variant='h4'  sx={{
    fontSize:'24px',
    fontWeight:'300',
    color:'white'
  }}>10,000 algorithmically generated, unique chikn
</Typography>
<Typography variant='h4' sx={{
    fontSize:'24px',
    fontWeight:'300',
    color:'white'
  }}>NFTs that lay $egg</Typography>
</Stack>
<Container>
<Swiper
        loop={true}
        slidesPerView={7}
        spaceBetween={20}
        freeMode={true}
        freeModeMomentum='false'
      autoplay={{
        delay: 1,
        disableOnInteraction: true,
      }}
  speed={2500}
        modules={[FreeMode,Autoplay]}
        className="mySwiper my-5"
      >
        <SwiperSlide className='slideimgs'><img src='01.jpg' alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='02.jpg' alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='03.jpg'  alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='04.jpg'  alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='05.jpg'  alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='06.jpg'  alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='07.jpg'  alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='08.jpg'  alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='09.jpg' alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='10.jpg'  alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='11.jpg'  alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='12.jpg'  alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='13.jpg'  alt='wait for internet'/></SwiperSlide>
        <SwiperSlide className='slideimgs'><img src='14.jpg'  alt='wait for internet'/></SwiperSlide>
      </Swiper>
      </Container>
 
       <Container>
       <Grid container columnSpacing={5}>
       <Grid item  xs={12} sm={5} lg={4} alignItems='center' justifyContent='center'>
      <CardMedia
        component="img"
        image="Silhote.png"
        alt="Paella dish"
      />
      
      </Grid> 
      <Grid item xs={12} sm={7} lg={8}>
        <Typography variant='h4' sx={{
          color: '#df3f3d',
          textAlign:'start'
        }}>Welcome to chikn. Bgaark!</Typography>
        
        <Typography variant='body1' sx={{
          color: 'white',
            textAlign:'start',
            fontSize:'18px',fontWeight:'520'
        }}>chikn are not just NFTs that lay $egg. <br />
      chikn is an entire ecosystem built around these NFTs - encompassing novel Tri-Token Architecture.
        <br />
       
        chikn is extending the utility of Public Minting, a Marketplace, and Farming for emerging NFT+token creators on Avalanche. 
       </Typography>
        
        <Typography variant='body1' my={2} sx={{
          color: 'white',
          textAlign:'start',
          fontSize:'18px',fontWeight:'520'
        }}> NFTs have the unique ability to combine utility with the power of mimetism.
        When you can have both, why not have both?
        <br />
        <br />
        It's simple, really. Everyone knows that chikn lay $egg
        </Typography>
        
        <Typography variant='h4' sx={{
          color: '#df3f3d'
        }}></Typography>
      </Grid>
      </Grid>
      </Container> 

      <Container>
      <Grid container> 
      <Grid item xs={12} sm={7} lg={8} className='order-last order-md-1'>
        <Typography variant='h4' sx={{
          color: '#df3f3d',
          textAlign:'start'
        }}>Tri-Token Ecosystem</Typography>
        <Stack my={2} direction='row'>
          <Avatar src='chiknicon.png' sx={{
            width:'60px',
            height:'60px'
          }}/>
          <Stack >
          <Typography mx={2} variant='body1' align='start' sx={{
            color:'white',
            fontSize:'17px'
          }}><b>chikn</b></Typography>
          <Typography variant='body1' align='start' mx={2} sx={{
            color:'white',
            fontSize:'16px'
          }}>Your upgradeable <b>chikn</b> NFT, that lays <b>$egg</b></Typography>
          </Stack>
          </Stack>
          <Stack my={2} direction='row'>
          <Avatar src='eggicon.png' sx={{
            width:'60px',
            height:'60px'
          }}/>
          <Stack >
          <Typography mx={2} variant='body1' align='start' sx={{
            color:'white',
            fontSize:'17px'
          }}><b>$egg</b></Typography>
          <Typography variant='body1' align='start' mx={2} sx={{
            color:'white'
            ,fontSize:'16px'
          }}>
          The governance and utility token of the <b>chikn</b>  ecosystem. Hodl, use, or sell on the open market</Typography>
          </Stack>
          </Stack>
          <Stack my={2} direction='row'>
          <Avatar src='feedicon.png' sx={{
            width:'60px',
            height:'60px'
          }}/>
          <Stack >
          <Typography mx={2} variant='body1' align='start' sx={{
            color:'white',
            fontSize:'17px'
          }}><b>$feed</b></Typography>
          <Typography variant='body1' align='start' mx={2} sx={{
            color:'white',
            fontSize:'16px'
          }}>Harvested at chikn.farm, eaten by <b>chikn,</b>
          or sold on the open market</Typography>
          </Stack>
          </Stack>
          <Stack my={2} direction='row'>
          <Avatar src='layicon.png' sx={{
            width:'60px',
            height:'60px'
          }}/>
          <Stack >
          <Typography mx={2} variant='body1' align='start' sx={{
            color:'white',
            fontSize:'17px'
          }}><b>Lay</b></Typography>
          <Typography variant='body1' align='start' mx={2} sx={{
            color:'white',
            fontSize:'16px'
          }}>Roost your <b>chikn</b> and lay <b>$egg</b>.
          Biggr <b>chikn</b> lay more <b>$egg</b></Typography>
          </Stack>
          </Stack>
          <Stack my={2} direction='row'>
          <Avatar src='farmicon.png' sx={{
            width:'60px',
            height:'60px'
          }}/>
          <Stack >
          <Typography mx={2} variant='body1' align='start' sx={{
            color:'white',fontSize:'17px'
          }}><b>Farm</b></Typography>
          <Typography variant='body1' align='start' mx={2} sx={{
            color:'white',
            fontSize:'16px'
          }}>Received <b>$egg</b> LP tokens are used
          to farm <b>$feed</b> at chikn.farm</Typography>
          </Stack>
          </Stack>
          <Stack my={2} direction='row'>
          <Avatar src='sizeicon.png' sx={{
            width:'60px',
            height:'60px'
          }}/>
          <Stack >
          <Typography mx={2} variant='body1' align='start' sx={{
            color:'white',
            fontSize:'17px'
          }}><b>Size (Kg / KillerGainz)</b></Typography>
          <Typography variant='body1' align='start' mx={2} sx={{
            color:'white', fontSize:'16px'
          }}><b>$feed</b> permanently increases the size
          of your <b>chikn</b>. It's written straight to the
          metadata of your NFT</Typography>
          </Stack>
          </Stack>
      </Grid>
      <Grid item  xs={12} sm={5} lg={4} pt={15} className='order-first order-md-2' alignItems='center' justifyContent='center'>
      <CardMedia justifyContent='center'
      alignItems='center'
        component="img"
        image="Ecosystem.png"
        alt="Paella dish"
      />
      
      </Grid> 
      </Grid>
</Container>
<Container>
  <Stack my={5}>
  <Typography variant='h5' sx={{
          color: '#df3f3d',
          textAlign:'start'
        }}>Join The Community</Typography>
        <Typography variant='body2' className='links' align='start'  sx={{
            color:'white'
          }}>For the latest news, updates and access to pre-release content.
          </Typography>
          <Button className='discordbtn  col-8 col-md-4 col-lg-3 links'>Join Our Discord</Button>
              
  </Stack>
</Container>
   </Stack>
  )
}

export default Landing
