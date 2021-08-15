import React from 'react';
import thumbnail from '../../assets/images/thumbnail.png'
import userIcon from '../../assets/images/User.png'
import starIcon from '../../assets/images/Star.png'
import SmallLogo from '../../assets/images/arkademiSmall.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
import { Container, Row,Col } from 'react-bootstrap'

const index = () => {
    return (
        <div style={{height:'402px',width:'286px',position:'absolute',display:'flex',justifyContent:'center'}}>
            <div style={{height:'439px',width:'286px', display:'flex',margin:'auto',justifyContent:'center',alignContent:'center',alignItems:'center', background: '#FFFFFF',boxShadow: '0px 3px 4px rgba(28, 29, 32, 0.179769)',borderRadius: '16px'}}>
            <img style={{width:'245px',height:'136px',position: 'absolute',top:'-15px'}} src={thumbnail}/>
            <Container style={{marginTop:'130px'}}>
            

            <h4 style={{color:'#1C1D20',padding:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: 'bold',fontSize: '13px'}}>Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..</h4>
            <Row >
                
                    <Col md={1}>

                        <img src={starIcon} style={{width:'11px',heigth:'11px'}}/>
                    </Col>
                    <Col md={2} style={{padding:'5px'}}>

                         <h5 style={{color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '400',fontSize: '12.5px'}}>4.5</h5>
                    </Col>
                  
               
                    <Col md={1}>

                        <img src={userIcon} style={{width:'11px',heigth:'11px'}}/>
                    </Col>
                    <Col md={5} style={{padding:'5px'}}>

                         <h5 style={{color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '400',fontSize: '12.5px'}}>2500</h5>
                    </Col>
            </Row>
            <hr style={{border: '0.5px solid rgba(28, 29, 32, 0.0688647)'}}/>
            <img src={SmallLogo}/>
            <hr style={{border: '0.5px solid rgba(28, 29, 32, 0.0688647)'}}/>
            <Row>
                <Col style={{display:'flex',justifyContent:'flex-end',margin:'5px',padding:'0'}}>
                    <h5 style={{color: 'rgba(28, 29, 32, 0.304797)',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '600',fontSize: '12.5px',textDecoration:'line-through'}}>Rp 250.000 </h5>
                </Col>
                <Col style={{display:'flex',justifyContent:'flex-start',margin:'5px',padding:'0'}}>
                    <h5 style={{color: '#FE5C63',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '500',fontSize: '12.5px'}}>Hemat Rp 99.000</h5>
                </Col>
            </Row>
            <h4  style={{color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '700',textAlign:'center',fontSize: '19px'}}>Rp 149.000</h4>
            <div style={{ display:'flex',justifyContent:'center'}}>
            
            <Link to="/detail">
                <button style={{textAlign:'center',border:'none',width:'163px',height:'41px',background: '#FF5718',borderRadius: '8px',color: '#FFF',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: 'bold',fontSize: '15px'}}>AMBIL KELAS</button>
            </Link>
            </div>
            </Container>
            </div>
        </div>
    );
};

export default index;