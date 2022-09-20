import { useState } from 'react';
import './Components.css'
const MarketTop = ({data}) => {
    const [Selected,setSelected] = useState('')
    return ( 
        <div className="MarketTop row m-0 justify-content-center">
            <div className=" col-md-10 my-4 row m-0 justify-content-center p-0">
                <div className=" my-2 rounded-3 MarketStats col-md-6 d-flex flex-row justify-content-between px-md-4">
                    <div className=' d-flex flex-column align-items-center py-4'>
                        <h5 className=' textColor m-0'>{data.uniqueHolders}</h5>
                        <p className=' text-white p-0 m-0'>Unique Holders</p>
                    </div>
                    <div className='Seprator'></div>
                    <div className=' d-flex flex-column align-items-center py-4'>
                        <h5 className=' textColor m-0 d-flex flex-row align-items-center'>{data.totalVolume}<img src='/Assets/cocklogo.svg' className=' ms-1' style={{width:'1.2rem',height:'1.2rem'}}/></h5>
                        <p className=' text-white p-0 m-0'>Total Volume</p>
                    </div>
                    <div className='Seprator'></div>
                    <div className=' d-flex flex-column align-items-center py-4'>
                        <h5 className=' textColor m-0'>{data.supply}</h5>
                        <p className=' text-white p-0 m-0'>Supply</p>
                    </div>
                </div>
                <h2 className=' text-white col-12 text-center my-2 fw-light fs-4'>RARITY FLOOR PRICES</h2>
                <div className=' col-md-4 col-6 col-xl-2 p-3'>
                    <div className=' cardTop px-3 pb-2 pt-5 rounded-2 d-flex justify-content-center position-relative'
                        style={Selected == 'Common' ? {backgroundColor: '#df3f3e'} : {backgroundColor:'#262850'}}
                        onClick={()=>{setSelected('Common')}}
                    >
                        <h3 className='h2 text-white m-0 d-flex flex-row align-items-center'>{data.cards[0]}<img src='/Assets/cocklogo.svg' className=' ms-1' style={{width:'0.9rem',height:'0.9em'}}/></h3>
                        <div className=' flotIconDiv rounded-start' style={{background:'#e6f6ff', color:'#1ab1ff'}}>
                            <p className=' m-0 text-center '>Common</p>
                        </div>
                    </div>
                </div>
                <div className=' col-md-4 col-6 col-xl-2 p-3'>
                    <div className=' cardTop px-3 pb-2 pt-5 rounded-2 d-flex justify-content-center position-relative'
                        style={Selected == 'Nice' ? {backgroundColor: '#df3f3e'} : {backgroundColor:'#262850'}}
                        onClick={()=>{setSelected('Nice')}}
                    >
                        <h3 className='h2 text-white m-0 d-flex flex-row align-items-center'>{data.cards[1]}<img src='/Assets/cocklogo.svg' className=' ms-1' style={{width:'0.9rem',height:'0.9em'}}/></h3>
                        <div className=' flotIconDiv rounded-start' style={{background:'#c4f8dd', color:'#19d873'}}>
                            <p className=' m-0 text-center '>Nice</p>
                        </div>
                    </div>
                </div>
                <div className=' col-md-4 col-6 col-xl-2 p-3'>
                    <div className=' cardTop px-3 pb-2 pt-5 rounded-2 d-flex justify-content-center position-relative'
                        style={Selected == 'Rare' ? {backgroundColor: '#df3f3e'} : {backgroundColor:'#262850'}}
                        onClick={()=>{setSelected('Rare')}}
                    >
                        <h3 className='h2 text-white m-0 d-flex flex-row align-items-center'>{data.cards[2]}<img src='/Assets/cocklogo.svg' className=' ms-1' style={{width:'0.9rem',height:'0.9em'}}/></h3>
                        <div className=' flotIconDiv rounded-start' style={{background:'#fff5dc', color:'#ffb810'}}>
                            <p className=' m-0 text-center '>Rare</p>
                        </div>
                    </div>
                </div>
                <div className=' col-md-4 col-6 col-xl-2 p-3'>
                    <div className=' cardTop px-3 pb-2 pt-5 rounded-2 d-flex justify-content-center position-relative'
                        style={Selected == 'Elite' ? {backgroundColor: '#df3f3e'} : {backgroundColor:'#262850'}}
                        onClick={()=>{setSelected('Elite')}}
                    >
                        <h3 className='h2 text-white m-0 d-flex flex-row align-items-center'>{data.cards[3]}<img src='/Assets/cocklogo.svg' className=' ms-1' style={{width:'0.9rem',height:'0.9em'}}/></h3>
                        <div className=' flotIconDiv rounded-start' style={{background:'#eadcff', color:'#6f10ff'}}>
                            <p className=' m-0 text-center '>Elite</p>
                        </div>
                    </div>
                </div>
                <div className=' col-md-4 col-6 col-xl-2 p-3'>
                    <div className=' cardTop px-3 pb-2 pt-5 rounded-2 d-flex justify-content-center position-relative'
                        style={Selected == 'Legendary' ? {backgroundColor: '#df3f3e'} : {backgroundColor:'#262850'}}
                        onClick={()=>{setSelected('Legendary')}}
                    >
                        <h3 className='h2 text-white m-0 d-flex flex-row align-items-center'>{data.cards[4]}<img src='/Assets/cocklogo.svg' className=' ms-1' style={{width:'0.9rem',height:'0.9em'}}/></h3>
                        <div className=' flotIconDiv rounded-start' style={{background:'#fed1ec', color:'#fb54ba'}}>
                            <p className=' m-0 text-center '>Legendary</p>
                        </div>
                    </div>
                </div>
                <div className=' col-md-4 col-6 col-xl-2 p-3'>
                    <div className=' cardTop px-3 pb-2 pt-5 rounded-2 d-flex justify-content-center position-relative'
                        style={Selected == 'Unique' ? {backgroundColor: '#df3f3e'} : {backgroundColor:'#262850'}}
                        onClick={()=>{setSelected('Unique')}}
                    >
                        <h3 className='h2 text-white m-0 d-flex flex-row align-items-center'>{data.cards[5]}<img src='/Assets/cocklogo.svg' className=' ms-1' style={{width:'0.9rem',height:'0.9em'}}/></h3>
                        <div className=' flotIconDiv rounded-start' style={{background:'#ffafab', color:'#ff372b'}}>
                            <p className=' m-0 text-center '>Unique</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MarketTop;