import './Market.css'
import {HiRefresh} from 'react-icons/hi'
import { useEffect, useState } from 'react';
import MarketTop from './Components/MarketTop';
import MarketChikn from './MarketChiken';
import MarketRoostr from './MarketRoostr';
import {BiChevronDown} from 'react-icons/bi'
import MarketFarmLand from './MarketFarmLand';
import Header from '../Components/Header/Header';
const Market = ({selected}) => {
    const [NavSelected,setNavSelected] = useState('')
    const [ExpandNavSm,setExpandNavSm] = useState(false)
    const [MarketTopData,setMarketTopData] = useState([
        {
            uniqueHolders:'2,192',
            totalVolume:'235,677',
            supply:'10,000',
            cards:[64,64,64,64,64,64]
        },
        {
            uniqueHolders:'2,192',
            totalVolume:'235,677',
            supply:'10,000',
            cards:[67,67,67,67,67,67]
        },
        {
            uniqueHolders:'2,192',
            totalVolume:'235,677',
            supply:'10,000',
            cards:[68,68,68,68,68,68]
        },
    ])
    useEffect(()=>{
        setNavSelected(selected)
    },[selected])
    return ( 
        <>
        <div className='Market container-fluid'>
            <div className=' container'>
                <div className=' d-flex flex-row justify-content-between align-items-center'>
                    <h2 className=' textColor'>Market</h2>
                    <div className=' text-white rounded-3 borderDark px-2 py-1'><HiRefresh className='iconRefresh' /></div>
                </div>
                <div className=' w-100 rounded-3 NavDiv'>
                    <div className='MarketNav flex-row fw-bold  d-none d-md-flex'>
                        <div className=' d-flex flex-column'>
                            <a className=' mx-3 text-decoration-none text-white' onClick={()=>{
                                setNavSelected('CHIKN');
                            }}><img src='/Assets/cock.png' /> CHIKN</a>
                            { NavSelected == 'CHIKN' ? <div className=' bgRed' style={{height:'3px', width:'100%'}}></div> : <></>}
                        </div>
                        <div className=' d-flex flex-column'>
                            <a className=' mx-3 text-decoration-none text-white' onClick={()=>{
                                setNavSelected('ROOSTR');
                            }}><img src='/Assets/cock.png' /> ROOSTR</a>
                            { NavSelected == 'ROOSTR' ? <div className=' bgRed' style={{height:'3px', width:'100%'}}></div> : <></>}
                        </div>
                        <div className=' d-flex flex-column'>
                            <a className=' mx-3 text-decoration-none text-white' onClick={()=>{
                                setNavSelected('FARMLAND');
                            }}><img src='/Assets/cockfarm.png' /> FARMLAND</a>
                            { NavSelected == 'FARMLAND' ? <div className=' bgRed' style={{height:'3px', width:'100%'}}></div> : <></>}
                        </div>
                    </div>
                    <div className='d-block d-md-none'>
                    <a className='smNav px-3 rounded-3 text-decoration-none text-white d-flex flex-row justify-content-between align-items-center' onClick={()=>{
                                setNavSelected('CHIKN');
                                if(ExpandNavSm == false)
                                {
                                    setExpandNavSm(true)
                                }
                                else{
                                    setExpandNavSm(false)
                                }
                            }}>
                                { NavSelected == 'CHIKN' ? <><img src='/Assets/cock.png' style={{width:'47px',height:'53px'}} /> <p className=' m-0 fw-bold'>CHIKN</p></> :
                                  NavSelected == 'ROOSTR' ? <><img src='/Assets/cock.png' style={{width:'47px',height:'53px'}} /> <p className=' m-0 fw-bold'>ROOSTR</p></>:
                                  <><img src='/Assets/cockfarm.png' style={{width:'47px',height:'53px'}} /> <p className=' m-0 fw-bold'>Farmland</p></>
                                }
                                 <BiChevronDown className='iconSM  fs-4 ' /></a>
                    {ExpandNavSm == true ? 
                    <div className=' bg-white rounded-3'>
                    <a style={NavSelected == 'CHIKN' ? {backgroundColor:'#df3f3e'}:{}} className=' border-1 px-3 text-decoration-none text-white d-flex flex-row justify-content-between align-items-center' onClick={()=>{
                                setNavSelected('CHIKN');
                                setExpandNavSm(false)
                            }}><img src='/Assets/cock.png'style={{width:'47px',height:'53px'}} /> <p className=' fs-5 text-dark m-0 fw-bold'>CHIKN</p> </a>
                    <a style={NavSelected == 'ROOSTR' ? {backgroundColor:'#df3f3e'}:{}} className=' border-1 px-3 text-decoration-none text-white d-flex flex-row justify-content-between align-items-center' onClick={()=>{
                                setNavSelected('ROOSTR');
                                setExpandNavSm(false)
                            }}><img src='/Assets/cock.png' style={{width:'47px',height:'53px'}}/> <p className=' fs-5 text-dark m-0 fw-bold'>Roostr</p> </a>
                    <a style={NavSelected == 'FARMLAND' ? {backgroundColor:'#df3f3e'}:{}} className=' border-1 px-3 text-decoration-none text-white d-flex flex-row justify-content-between align-items-center' onClick={()=>{
                                setNavSelected('FARMLAND');
                                setExpandNavSm(false)
                            }}><img src='/Assets/cockfarm.png' style={{width:'47px',height:'53px'}} /> <p className=' fs-5 text-dark m-0 fw-bold'>Farmland</p> </a>
                    </div> : <></>}
                    </div>
                    <div className='MarketTopDiv'>
                        { NavSelected == 'CHIKN' ? <MarketTop data={MarketTopData[0]} /> : <></>}
                        { NavSelected == 'ROOSTR' ? <MarketTop data={MarketTopData[1]} /> : <></>}
                        { NavSelected == 'FARMLAND' ? <MarketTop data={MarketTopData[2]} /> : <></>}
                    </div>
                </div>  
                {NavSelected == 'CHIKN' ? <MarketChikn /> :
                 NavSelected == 'ROOSTR' ? <MarketRoostr /> : 
                 <MarketFarmLand /> }
            </div>
        </div>
        </>
     );
}
 
export default Market;