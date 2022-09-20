import './Components.css'
const ChiknCard = ({data}) => {
    return ( 
        <div className='ChiknCard rounded-3 text-center d-flex flex-column align-items-center'>
            <img src={data.imgSrc} />
            <p className='textColor my-1'>{data.name}</p>
            <div className=' d-flex flex-row justify-content-center'>
                <span className=' mx-2 text-secondary'>RANK:{data.rank}</span>
                <span className=' mx-2 text-secondary'>KG : {data.weight}</span>
            </div>
            <div className=' w-50 rounded-4 my-2 py-1' style={
                data.category == 'Common' ? {background:'#e6f6ff', color:'#1ab1ff'} : 
                data.category == 'Nice' ? {background:'#c4f8dd', color:'##19d873'} : 
                data.category == 'Rare' ? {background:'#fff5dc', color:'#ffb810'} : 
                data.category == 'Elite' ? {background:'#eadcff', color:'#6f10ff'} : 
                data.category == 'Legendary' ? {background:'#fed1ec', color:'#fb54ba'} : 
                data.category == 'Unique' ? {background:'#ffafab', color:'#ff372b'} :  { backgroundColor: 'trasnparent'}
            }>
                <p className=' m-0 p-0 category'>{data.category}</p>
            </div>
            { data.forSale == 'true' ? <button className=' fs-6 rounded-4 w-75 bg-success border-0 text-white'>For Sale</button> : <button className='rounded-4 w-75 bgRed border-0 text-white'>Sold Out</button>}
            <div className=' mt-2 w-100 text-white px-3 d-flex flex-row justify-content-between align-items-center'>
                <p className='category'>Price : </p>
                <p className='category d-flex align-items-center'>{data.price}<img src='/Assets/cocklogo.svg' className=' ms-2' style={{width:'0.7rem',height:'0.7rem'}} /></p>
            </div>
            <div className=' mt-1 mb-3 w-100 text-white px-3 d-flex flex-row justify-content-between align-items-center'>
                <p className='category'>Lastprice : </p>
                <p className='category d-flex align-items-center'>{data.lastprice}<img src='/Assets/cocklogo.svg' className=' ms-2' style={{width:'0.7rem',height:'0.7rem'}} /></p>
            </div>
        </div>
     );
}
export default ChiknCard;