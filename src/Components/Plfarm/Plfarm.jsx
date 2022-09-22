import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowRepeat } from "react-icons/bs";
import "./Plfarm.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { BiSearch } from "react-icons/bi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";


function Plfarm() {
  return (
    <div style={{backgroundColor:'#191a32'}}>
    <div className='container'>

      <div className='d-flex flex-row justify-content-between'>
        <h1 className='text-danger'>LP Farm</h1>
        <h1 className='border rounded border-primary px-1 px-2 bg-primary text-white d-flex align-items-center'><BsArrowRepeat size='2rem'/></h1>
      </div>

      <div className='justify-content-center d-flex w-100'>
      <Card>
      <Card.Header className='rd-hdr align-items-center  d-flex justify-content-start '>
        <img src="./images/card-header-pic.png" className='hrd-pic' alt="" />
         <div className='text-white fs-3'>&nbsp; <strong>FARMLAND</strong></div>
        </Card.Header>

      <Card.Body className='crd-body'>

        <div className='d-flex flex-row justify-content-between'>
          <div className='fs-2 text-white'> <strong>MY LAND (-)</strong> </div>
          <div>
            <div className='d-flex flex-row justify-content-end'>
              <div className='text-white fs-5'> <strong> 0.000000 </strong> </div>
              <img src="./images/egg.svg" alt="" className='egg' />
            </div>
            <div className='text-danger'>TOTAL EGG HELD</div>
          </div>
        </div>

        <div className='d-flex flex-row justify-content-between mt-3 row'>
          <div className='col-md-6 col-lg-6'>
              <div class="crd-row d-flex justify-content-left">
                     <select class="drop text-secondary">
                        <option value="1" className='drop-opt'>Largest size</option>
                        <option value="2" className='drop-opt'>Smallest size</option>
                        <option value="3" className='drop-opt'>Highest farm #</option>
                        <option value="4" className='drop-opt'>Lowest farm #</option>
                      </select>
              </div>
          </div>
          <div className='col-md-6 col-lg-6 col-sm-12 '>
            <div className='input-group  justify-content-end'>
              <input type="number" placeholder='Search Farmland' className='input-bar rounded border border-primary text-white' />
              <span className='bbb border rounded border-danger px-1 px-2 bg-danger text-white d-flex align-items-center ms-2'>
              <BiSearch size='2rem'/>
              </span>
            </div>
          </div>
        </div>

      
          <div className='no-fund-land mt-3 d-flex justify-content-between px- py-5'>
            <a href="">
              <span className='lr-butn  text-white d-flex align-items-center bg-secondary p-1'>
              < HiOutlineChevronLeft size='2rem'/>
              </span>
            </a>

            <div className='text-secondary'>
            No land found
            </div>
            
            <a href="">
              <span className='lr-butn  text-white d-flex align-items-center bg-secondary p-1'>
              < HiOutlineChevronRight size='2rem'/>
              </span>
            </a>
          </div>

          <div className='mt-3 '>
            <h1 className='my-5 text-secondary'>No land found</h1>
          </div>
        

      </Card.Body>
    </Card>
      </div>

    </div>
    </div>
    
  )
}

export default Plfarm
