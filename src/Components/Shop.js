import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../State/index'

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} =bindActionCreators(actionCreators,dispatch);
  return (
    <div >
        <h2>UPDATE / WITHDRAW</h2>
        <Button className='btn btn-primary mx-2' onClick={()=>withdrawMoney(100)} >-</Button>
        Update Balance
            <Button className='btn btn-primary mx-2' onClick={()=>depositMoney(100)} >+</Button>

    </div>
  )
}

export default Shop