import './Market.css'
import {RiEqualizerLine} from 'react-icons/ri'
import {BiChevronDown} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import {IoCaretBack,IoCaretForward} from 'react-icons/io5'
import {AiOutlineBackward,AiFillForward} from 'react-icons/ai'
import { useState } from 'react'
import ChiknCard from './Components/ChiknCard'
const MarketChikn = () => {
    const [Background,setBackground] = useState([])
    const [BackgroundExpand,setBackgroundExpand] = useState(false)
    const [ShowAll,setShowAll] = useState(true)
    const [ExpandFilter,setExpandFilter]= useState(false);
    const [Expand,setExpand] = useState('false')
    const [ExpandSelected,setExpandSelected] = useState('Lowest price')
    const [ChiknData,setChiknData] = useState([
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Common',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Nice',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Rare',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Elite',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Legendary',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Unique',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Elite',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Elite',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Elite',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Elite',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Elite',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Elite',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Elite',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
        {
            imgSrc:'/Assets/chiknimg.jpeg',
            name:'chikn#324',
            rank:'201',
            weight:'28',
            category:'Elite',
            forSale:'true',
            price:'1,000,000,0',
            lastprice:'0'
        },
    ])
    return ( 
        <div className='MarketChiken bg-transparent  my-3'>
            <div className=' filterBar row m-0'>
                <a className=' col-md-2 h4 text-decoration-none d-flex align-items-center flex-row' onClick={()=>{
                    if(ExpandFilter == true)
                    {
                        setExpandFilter(false)
                    }
                    else{
                        setExpandFilter(true)
                    }
                }} style={ExpandFilter == true ? {color:'#df3f3e'} : {color:'gray'}}><RiEqualizerLine className=' fs-5' />Filters</a>
                <input type={'text'} placeholder='Enter chikn name or ID' className='inputMarket col-md-3' />
                <button className=' mx-1 col-md-2 col-xl-1 rounded-2 MarketButton bgRed my-2 my-md-0'>Search</button>
                <div className=' d-flex flex-row align-items-center col-md-4 col-xl-4 col-xl-4'>
                <h5 className=' m-0 text-white mx-3 h6 w-25'>SORT : </h5>
                <div className=' d-flex position-relative w-75'>
                    <div className=' inputMarket hoverFill w-100 text-secondary p-2 d-flex flex-row justify-content-between align-items-center' onClick={()=>{
                        if(Expand == true)
                        {
                            setExpand(false)
                        }
                        else{
                            setExpand(true)
                        }
                    }} style={ Expand==true ? {boxShadow: '0px 0px 4px 1px #df3f3e',borderColor: '#df3f3e'} : {}}>
                        <p className=' m-0 p-0'>{ExpandSelected}</p>
                        <BiChevronDown className='textColor iconHover fs-5' />
                    </div>
                    { Expand == true ? 
                        <div className=' expandSort bg-white w-75 rounded-2 py-2 text-dark'>
                                <label className='Listitem w-100 px-3' onClick={()=>{setExpand(false);setExpandSelected('Lowest price')}} style={ExpandSelected == 'Lowest price' ? {backgroundColor:'#df3f3e',color:'white'} : {backgroundColor:'transparent'}  }> Lowest price</label>
                                <label className='Listitem w-100 px-3' onClick={()=>{setExpand(false);setExpandSelected('Highest price')}} style={ExpandSelected == 'Highest price' ? {backgroundColor:'#df3f3e',color:'white'} : {backgroundColor:'transparent'}  }> Highest price</label>
                                <label className='Listitem w-100 px-3' onClick={()=>{setExpand(false);setExpandSelected('Lowest last sold price')}} style={ExpandSelected == 'Lowest last sold price' ? {backgroundColor:'#df3f3e',color:'white'} : {backgroundColor:'transparent'}  }> Lowest last sold price</label>
                                <label className='Listitem w-100 px-3' onClick={()=>{setExpand(false);setExpandSelected('Highest last sold price')}} style={ExpandSelected == 'Highest last sold price' ? {backgroundColor:'#df3f3e',color:'white'} : {backgroundColor:'transparent'}  }> Highest last sold price</label>
                                <label className='Listitem w-100 px-3' onClick={()=>{setExpand(false);setExpandSelected('Lowest rank')}} style={ExpandSelected == 'Lowest rank' ? {backgroundColor:'#df3f3e',color:'white'} : {backgroundColor:'transparent'}  }> Lowest rank</label>
                                <label className='Listitem w-100 px-3' onClick={()=>{setExpand(false);setExpandSelected('Highest rank')}} style={ExpandSelected == 'Highest rank' ? {backgroundColor:'#df3f3e',color:'white'} : {backgroundColor:'transparent'}  }> Highest rank</label>
                                <label className='Listitem w-100 px-3' onClick={()=>{setExpand(false);setExpandSelected('Lowest #')}} style={ExpandSelected == 'Lowest #' ? {backgroundColor:'#df3f3e',color:'white'} : {backgroundColor:'transparent'}  }> Lowest #</label>
                                <label className='Listitem w-100 px-3' onClick={()=>{setExpand(false);setExpandSelected('Highest #')}} style={ExpandSelected == 'Highest #' ? {backgroundColor:'#df3f3e',color:'white'} : {backgroundColor:'transparent'}  }> Highest #</label>
                                <label className='Listitem w-100 px-3' onClick={()=>{setExpand(false);setExpandSelected('Highest KG')}} style={ExpandSelected == 'Highest KG' ? {backgroundColor:'#df3f3e',color:'white'} : {backgroundColor:'transparent'}  }> Highest KG</label>
                                <label className='Listitem w-100 px-3' onClick={()=>{setExpand(false);setExpandSelected('Recently Sold')}} style={ExpandSelected == 'Recently Sold' ? {backgroundColor:'#df3f3e',color:'white'} : {backgroundColor:'transparent'}  }> Recently Sold</label>
                                <label className='Listitem w-100 px-3' onClick={()=>{setExpand(false);setExpandSelected('Recently listid')}} style={ExpandSelected == 'Recently listid' ? {backgroundColor:'#df3f3e',color:'white'} : {backgroundColor:'transparent'}  }> Recently listid</label>

                        </div> : <></>}
                        
                </div>
                </div>
            </div>
            <div className=' row m-0'>
                {ExpandFilter == true ? 
                        <>
                            <div className=' col-md-4 col-xxl-3 py-2 d-flex flex-column align-items-center'style={{backgroundColor:'#2a2c54'}}>
                                <div className=' d-flex flex-row w-75 rounded-2 BorderDiv text-white text-center overflow-hidden'>
                                    <p className=' py-1 m-0 w-50 hoverFill' style={ShowAll == false ? {backgroundColor:'#df3f3e'} : {backgroundColor:'transparent'}} onClick={()=>{setShowAll(false)}}>For Sale</p>
                                    <p className=' py-1 m-0 w-50 hoverFill' style={ShowAll == true ? {backgroundColor:'#df3f3e'} : {backgroundColor:'transparent'}} onClick={()=>{setShowAll(true)}}>Show All</p>
                                </div>
                                <p  className=' textColor mt-4 w-100 mb-1'>Background</p>
                                <div className=' d-flex flex-row flex-wrap BorderDiv rounded-2 py-1 px-1 w-100' onClick={()=>{
                                            if(BackgroundExpand == false)
                                            {
                                                setBackgroundExpand(true)
                                            }
                                            else{
                                                setBackgroundExpand(false)
                                            }
                                        }}>
                                    {Background.length == 0 ? 
                                    <>
                                        <p className='m-0'>Choose a property ... </p>
                                    </>
                                     : 
                                     <div className=' d-flex flex-row justify-content-between w-100 align-items-center '>
                                        {Background.map(filtervalue => {
                                            return(
                                                <p className=' rounded-2 text-primary filteritems bg-white mx-1 px-1 d-flex flex-row m-0 align-items-center'
                                                >{filtervalue}<IoMdClose className='filterremove' 
                                                            onClick={()=>{setBackground((Background) => {
                                                                                                    if(Background.includes(filtervalue)){
                                                                                                        Background = Background.splice(Background.indexOf(filtervalue),1)
                                                                                                    }
                                                                                                    return Background})}} />
                                                </p>
                                            )
                                        })}
                                        <IoMdClose className=' ms-auto' onClick={()=>{setBackground([])}}/>
                                     </div>
                                     }
                                </div>
                                {BackgroundExpand == true ? 
                                            <div className=' w-100 bg-white text-dark py-1 rounded-2'>
                                                <p className=' m-0 px-2 filterExpandItem' onClick={()=>{ if(!Background.includes('?')){setBackground(Background => [...Background,'?'])}}}>?</p>
                                                <p className=' m-0 px-2 filterExpandItem' onClick={()=>{if(!Background.includes('Cloud')){setBackground(Background => [...Background,'Cloud'])}}}>Cloud</p>
                                                <p className=' m-0 px-2 filterExpandItem' onClick={()=>{if(!Background.includes('CloudHusk')){setBackground(Background => [...Background,'CloudHusk'])}}}>Corn Husk</p>
                                            </div>
                                            :<></>}
                            </div>
                            <div className=' col-md-8 row m-0'>
                                {ChiknData.map(chikndata =>{
                                        return (
                                            <div className=' col-md-6 col-xl-4 p-2'>
                                                    <ChiknCard data={chikndata} />
                                                </div>
                                        )
                                    })}                            
                            </div>
                        </> : 
                        <>
                            <div className='col-12 row m-0'>
                                {ChiknData.map(chikndata =>{
                                        return (
                                            <div className=' col-md-4 col-xl-3 p-2'>
                                                    <ChiknCard data={chikndata} />
                                                </div>
                                        )
                                    })}                            
                            </div>
                        </>
                    }
            </div>
            <div>
                <h4 className=' text-center textColor'>Page 1 of 625 (10,000)</h4>
                <div className=' row m-0 justify-content-center'>
                    <div className=' text-white d-flex flex-row BorderDiv rounded-4 col-md-4 col-7' style={{backgroundColor:'#3b3d76'}}>
                        <p className=' m-0'><AiOutlineBackward /></p>
                        <div className=' mx-2 Seprator'></div>
                        <p className=' d-none d-md-flex m-0'>-100</p>
                        <div className=' d-none d-md-flex mx-2 Seprator'></div>
                        <p className=' d-none d-md-flex m-0'>-50</p>
                        <div className=' d-none d-md-flex mx-2 Seprator'></div>
                        <p className=' d-none d-md-flex m-0'>-250</p>
                        <div className=' d-none d-md-flex mx-2 Seprator'></div>
                        <p className=' m-0'><IoCaretBack /></p>
                        <div className=' mx-2 Seprator'></div>
                        <p className=' textColor m-0'><IoCaretForward /></p>
                        <div className=' mx-2 Seprator'></div>
                        <p className=' d-none d-md-flex t d-none d-md-flexextColor m-0'>+25</p>
                        <div className='d-none d-md-flex mx-2 Seprator'></div>
                        <p className=' d-none d-md-flex textColor m-0'>+50</p>
                        <div className=' d-none d-md-flex mx-2 Seprator'></div>
                        <p className=' d-none d-md-flex textColor m-0'>+100</p>
                        <div className=' d-none d-md-flex mx-2 Seprator'></div>
                        <p className=' textColor m-0'><AiFillForward /></p>
                        <div className='d-none d-md-flex mx-2 Seprator'></div>
                    </div>
                    <div className=' col-md-2 d-flex justify-content-center mt-3 mt-md-0'>
                        <select className=' bgRed border-0 rounded-3 px-3 text-white py-1'>
                        <option className=' bg-white text-dark'>Chikn/Page</option>
                        <option className=' bg-white text-dark'>8</option>
                        <option className=' bg-white text-dark'>32</option>
                        <option className=' bg-white text-dark'>64</option>
                        <option className=' bg-white text-dark'>128</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MarketChikn;