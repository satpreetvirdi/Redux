import React from 'react'
import { Button } from 'react-bootstrap'

const Shop = () => {
  return (
    <div >
        <h2>UPDATE / WITHDRAW</h2>
        <Button className='btn btn-primary mx-2' >-</Button>
        Update Balance
            <Button className='btn btn-primary mx-2' >+</Button>

    </div>
  )
}

export default Shop