import React from 'react'

function Table() {
  return (
    <div className='container'>
      <table class="table">
  <thead>
    <tr>
      <th scope="col"> <b className="text-danger fs-5">SIZE RANK</b></th>
      <th scope="col"> <b className="text-danger fs-5">FARM ID</b></th>
      <th scope="col"> <b className="text-danger fs-5">BIGNESS</b></th>
      <th scope="col"><b className="text-danger fs-5">FERTILITY MULTIPLIER</b></th>
      <th scope="col"> <b className="text-danger fs-5">OWNER</b></th>
      <th scope="col"><b className="text-danger fs-5">MARKET</b></th>
      <th scope="col"><b className="text-danger fs-5">RARITY</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="download1.svg" alt="" /> </th>
      <td><span className='d-'> <img className="w-25" src="146.jfif" alt="" />
                  <span><h5 className="text-info">INFINITE</h5>
                    <p>
                    The Kingdom Of <br /> Boksalot #145
                    </p></span>
                    
                    </span>
                  </td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row"><img src="download2.svg" alt="" /></th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row"><img src="download3.svg" alt="" /></th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Table
