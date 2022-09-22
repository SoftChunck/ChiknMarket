import React from 'react'
import "./Acordians.css"


function Acordians() {
  return (
    <div className='container mt-3'>

<div class="accordion" id="accordionPanelsStayOpenExample">

  {/* 1st accordian */}

  <div class="accordion-item main-card">
    <h2 class="accordion-header " id="panelsStayOpen-headingOne">
      <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <img src="./images/egg.svg" alt="" className='crdn-fp' />
        <div className='acrdn-text'>&nbsp; $ EGG / &nbsp;</div>
        <img src="./images/logo.svg" alt="" className='logo'/>
        <div className='acrdn-text'>&nbsp; AVAX (V3)</div>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <div className='card-body'>
          <div className="row">
            {/* card 1 */}

            <div className='col-lg-5 card-r px'>
              
            <div className=''>
               <div id="tab-container" class="tab-container">

               <div class="container">
                  <div class="col-md-10 col-md-offset-1 justify-content-center">
     
                     <input id="tab1" type="radio" name="tabs" checked/>
                     <label for="tab1">Deposit</label>
                     <input id="tab2" type="radio" name="tabs"/>
                     <label for="tab2">Withdraw</label>
    

    <div id="content1" class="tab-content">
      <div className='f-butn borde bg-danger text-white py-1 text-align-center pt-2'><h5>TRADERJOE <img src="./images/b-image.png" alt="" className='b-pic' /></h5></div>
      <div className='mt-3'><a href="" className='text-danger fs-5'>Get JLP tokens here</a></div>
      <div className='py-3 num'>o.oooooo</div>
      <div><h5 className='text-white'>TOTAL LP WALLET BALANCE</h5></div>
    
        
      <div class="input-group mb-3">
     <input type="text" class="form-control bg-dark" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Max</button>
     </div>
     <div className='row'>
     <button type='button' className='btn btn-danger'disabled>Approve</button>
     <button type='button' className='btn btn-danger mt-3'>Deposit</button>
     </div>
    </div>
      
    <div id="content2" class="tab-content">
    <div className='f-butn border align-items-center bg-danger text-align-center pt-2 text-white'><h5>TRADERJOE <img src="./images/b-image.png" alt="" className='b-pic' /></h5></div>
      <div className='mt-3'><a href="" className='text-danger fs-5'>Get JLP tokens here</a></div>
      <div className='py-3 num'>o.oooooo</div>
      <div><h5 className='text-white'>TOTAL LP BALANCE</h5></div>
    
        
      <div class="input-group mb-3">
     <input type="text" class="form-control bg-dark" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Max</button>
     </div>
     <div className='row'>
     <button type='button' className='btn btn-danger mt-3'>Deposit</button>
     </div>
    </div>

    </div>
  </div>
</div>
  </div>

            </div>

            {/* card 2 */}

            <div className='col-lg-7 mt-5'>

            <div class="card-l text-center py-4">
                <div class="card-body">
                   <p class="card-text text-danger">ACTIVATE YOUR LP FARMING OR DEPOSIT LP TO START </p>
                   <a href="#" class="r-b btn btn-danger">Activate</a>
                </div>
            </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

  {/* 2nd accordian */}

  <div class="accordion-item mt-3 main-card">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
           🌱
        <div className='acrdn-text '>&nbsp; FERT / &nbsp;</div>
        <img src="./images/logo.svg" alt="" className='logo'/>
        <div className='acrdn-text'>&nbsp; AVAX</div>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        
      <div className='card-body'>
          <div className="row">
            {/* card 1 */}

            <div className='col-lg-5 card-r px'>
              
            <div className=''>
               <div id="tab-container" class="tab-container">

               <div class="container">
                  <div class="col-md-10 col-md-offset-1 justify-content-center">
     
                     <input id="tab3" type="radio" name="tabs" checked/>
                     <label for="tab3">Deposit</label>
                     <input id="tab4" type="radio" name="tabs"/>
                     <label for="tab4">Withdraw</label>
    

    <div id="content3" class="tab-content">
      <div className='f-butn borde bg-danger text-white py-1 text-align-center pt-2'><h5>TRADERJOE <img src="./images/b-image.png" alt="" className='b-pic' /></h5></div>
      <div className='mt-3'><a href="" className='text-danger fs-5'>Get JLP tokens here</a></div>
      <div className='py-3 num'>o.oooooo</div>
      <div><h5 className='text-white'>TOTAL LP WALLET BALANCE</h5></div>
    
        
      <div class="input-group mb-3">
     <input type="text" class="form-control bg-dark" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Max</button>
     </div>
     <div className='row'>
     <button type='button' className='btn btn-danger'disabled>Approve</button>
     <button type='button' className='btn btn-danger mt-3'>Deposit</button>
     </div>
    </div>
      
    <div id="content4" class="tab-content">
    <div className='f-butn border align-items-center bg-danger text-align-center pt-2 text-white'><h5>TRADERJOE <img src="./images/b-image.png" alt="" className='b-pic' /></h5></div>
      <div className='mt-3'><a href="" className='text-danger fs-5'>Get JLP tokens here</a></div>
      <div className='py-3 num'>o.oooooo</div>
      <div><h5 className='text-white'>TOTAL LP BALANCE</h5></div>
    
        
      <div class="input-group mb-3">
     <input type="text" class="form-control bg-dark" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Max</button>
     </div>
     <div className='row'>
     <button type='button' className='btn btn-danger mt-3'>Deposit</button>
     </div>
    </div>

    </div>
  </div>
</div>
  </div>

            </div>

            {/* card 2 */}

            <div className='col-lg-7 mt-5'>
              <div class="card-l text-center py-4">
                <div class="card-body">
                   <p class="card-text text-danger">ACTIVATE YOUR LP FARMING OR DEPOSIT LP TO START </p>
                   <a href="#" class="r-b btn btn-danger">Activate</a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

  {/* 3rd accordian */}

  <div class="accordion-item mt-3 main-card">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <img src="./images/feed.svg" alt="" className='crdn-fp' />
        <div className='acrdn-text'>&nbsp; FEED / &nbsp;</div>
        <img src="./images/logo.svg" alt="" className='logo'/>
        <div className='acrdn-text'>&nbsp; AVAX </div>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">

      <div className='card-body'>
          <div className="row">
            {/* card 1 */}

            <div className='col-lg-5 card-r px'>
              
            <div className=''>
               <div id="tab-container" class="tab-container">

               <div class="container-fluid">
                  <div class="col-md-10 col-md-offset-1 justify-content-center">
     
                     <input id="tab5" type="radio" name="tabs" checked/>
                     <label for="tab5">Deposit</label>
                     <input id="tab6" type="radio" name="tabs"/>
                     <label for="tab6">Withdraw</label>
    

    <div id="content5" class="tab-content">
      <div className='f-butn borde bg-danger text-white py-1 text-align-center pt-2'><h5>TRADERJOE <img src="./images/b-image.png" alt="" className='b-pic' /></h5></div>
      <div className='mt-3'><a href="" className='text-danger fs-5'>Get JLP tokens here</a></div>
      <div className='py-3 num'>o.oooooo</div>
      <div><h5 className='text-white'>TOTAL LP WALLET BALANCE</h5></div>
    
        
      <div class="input-group mb-3">
     <input type="text" class="form-control bg-dark" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Max</button>
     </div>
     <div className='row'>
     <button type='button' className='btn btn-danger'disabled>Approve</button>
     <button type='button' className='btn btn-danger mt-3'>Deposit</button>
     </div>
    </div>
      
    <div id="content6" class="tab-content">
    <div className='f-butn border align-items-center bg-danger text-align-center pt-2 text-white'><h5>TRADERJOE <img src="./images/b-image.png" alt="" className='b-pic' /></h5></div>
      <div className='mt-3'><a href="" className='text-danger fs-5'>Get JLP tokens here</a></div>
      <div className='py-3 num'>o.oooooo</div>
      <div><h5 className='text-white'>TOTAL LP BALANCE</h5></div>
    
        
      <div class="input-group mb-3">
     <input type="text" class="form-control bg-dark" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Max</button>
     </div>
     <div className='row'>
     <button type='button' className='btn btn-danger mt-3'>Deposit</button>
     </div>
    </div>

    </div>
  </div>
</div>
  </div>

            </div>

            {/* card 2 */}

            <div className='col-lg-7 mt-5'>

            <div class="card-l text-center py-4">
                <div class="card-body">
                   <p class="card-text text-danger">ACTIVATE YOUR LP FARMING OR DEPOSIT LP TO START </p>
                   <a href="#" class="r-b btn btn-danger">Activate</a>
                </div>
            </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Acordians
