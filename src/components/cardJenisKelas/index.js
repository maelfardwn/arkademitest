import React from 'react';
import { Col, Row } from 'react-bootstrap';

const index = (prop) => {
    return (
        <div style={{margin:'auto',width:'150px',height:'155px',border: '0.736715px solid rgba(28, 29, 32, 0.153764)',boxSizing: 'border-box',boxShadow: '0px 5px 4px rgba(28, 29, 32, 0.0326978)',borderRadius: '11.7874px'}}>
        <Col style={{textAlign:'center'}}>
       
        <img style={{width:'50px',height:'50px',margin:'25px'}} src={prop.image}/>
       
        <h5 style={{color:'#1C1D20',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '600',fontSize: '19px'}}>{prop.title}</h5>
        
        </Col>
            
        </div>
    );
};

export default index;