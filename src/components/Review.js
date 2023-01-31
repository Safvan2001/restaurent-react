import React from 'react'
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewData}) {
    const [open, setOpen] = useState(false);

  return (
    <div className='mt-5'> <Button
    onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open}
  >
    See Reviews
  </Button>
  
  <div style={{ minHeight: '150px' }}>
    <Collapse in={open} dimension="width">
      <div id="example-collapse-text">
        {
            reviewData.map(data=>(
                <div>
                     <Card body style={{ width: '400px' }}>
                        <h6>
                            {data.name}
                        </h6>
                        <h6> {data.rating}</h6>
                        <p>
                            {data.comments}
                        </p>
                      </Card>
                </div>

            ))
        }
       
      </div>
    </Collapse>
  </div>
  </div>
  )
}

export default Review