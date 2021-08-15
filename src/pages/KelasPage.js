import React, { Component } from 'react'
import Banner1 from '../assets/images/Group 4.png'
import MenuNavigation from '../components/menuNav'
import '../App.css'
import { Container, Row,Col } from 'react-bootstrap'
import flagEngland from '../assets/images/Rectangle Copy 4 (1).png'
import review from '../assets/images/Group 6.png'
import tabFake from '../assets/images/Group 33.png'
import fakeThumbnailVideo from '../assets/images/Rectangle (1).png'
import fakePlayButton from '../assets/images/Group 38.png'
import Accordion from 'react-bootstrap/Accordion'
import serti from '../assets/images/Arkademi-front-Sertifikat-Mahir-Bahasa-Inggris.png'
import fakeText1 from '../assets/images/Group 14.png'
import fakeText2 from '../assets/images/Group 14 Copy.png'
import fakeText3 from '../assets/images/Group 14 Copy 2.png'
import fakeReviewImageOnly from '../assets/images/Group 22 (1).png'
import fakeSlideImageOnly from '../assets/images/Group 4 Copy 4.png'
import fakeNextButton from '../assets/images/Group 12 (1).png'
import fakePreviousButton from '../assets/images/Group 12 Copy.png'
import sideOveringKelas from '../assets/images/Group 11.png'

export default class KelasPage extends Component {
    render() {
        return (
            <div>
             <MenuNavigation/>
             <Container>
             <Row style={{marginTop:'50px'}}>
                 <Col md={8}>
                     <h6 style={{color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',opacity:'0.8',fontWeight: '400',fontSize: '11px'}}>Home  /  Course  /  Bahasa  /  Prakerja</h6>
                     <Row style={{margin:'0',padding:'0'}}>
                         <Col md={3}>
                            <img src={flagEngland} style={{width:'200px',height:'103px'}}/>
                         </Col>
                         <Col md={6} style={{textAlign:'start', }}>
                             <Row>
                                 <h4 style={{color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '27px'}}>Strategi Menjadi Entrepreneur Pemula yang Kreatif dan Produktif</h4>
                             </Row>
                             <Row>
                                <img style={{width:'392px',height:'21px'}} src={review}/>
                             </Row>
                         </Col>
                     </Row>
                     <Row>
                         <img src={tabFake} style={{width:'842px',height:'31px',marginTop:'40px'}}/>
                     </Row>
                     <div className='fakeVideoThumnail'>
                        <img style={{width:'62px',height:'63px'}} src={fakePlayButton}/>
                     </div>
                     <div style={{width:'810px',marginTop:'30px'}}>

                        <h2 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '27px'}}>Cara Alami Menguasai Bahasa Inggris Semudah Bahasa Indonesia</h2>
                        <h5  style={{lineHeight:'23px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',textAlign:'justify'}}>Jika Anda bisa bahasa Indonesia seharusnya Anda juga bisa bahasa Inggris. Tanpa sadar Anda sudah menjalani proses alami belajar bahasa. Ternyata Tuhan sudah menurunkan metode bagaimana menguasai suatu bahasa, itulah cara alami. Suatu cara yang sudah anda lakukan, namun Anda tidak menyadari.
                            Apakah anda bisa bahasa Indonesia? Apakah anda kursus bahasa Indonesia? Bagaimana cara anda belajar bahasa Indonesia?
                        </h5>   
                            Memperkenalkan “Cara Alami Menguasai Bahasa Inggris Semudah Bahasa Indonesia”.
                        <h5  style={{lineHeight:'23px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',textAlign:'justify'}}>                                
                            Metode ini menuntun Anda langkah demi langkah bagaimana menguasai bahasa Inggris dengan cara alami seperti orang Indonesia menguasai bahasa Indonesia, termasuk penyiapan perangkat dan 

                        </h5>
                     </div>
                     <div style={{width:'810px',marginTop:'40px'}}>

                        <h2 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Tujuan Pembelajaran</h2>
                       
                        <h5  style={{lineHeight:'23px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',textAlign:'justify'}}>                                
                            Belajar bahasa Inggris di kelas ini membuat anda menyadari kesalahan umum yang menyebabkan:
                            Belajar bahasa Inggris terasa sangat sulit
                            Setelah kursus kemampuan anda berangsur-angsur menurun
                            Masih sulit memahami novel, komik dan film, biarpun sudah kursus
                            Ketika bicara bahasa Inggris takut salah sehingga muncul rasa tidak percaya diri.
                        </h5>
                     </div>
                     
                     <div style={{width:'810px',marginTop:'40px'}}>

                        <h2 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Yang Akan Siswa Pelajari</h2>
                        <h5  style={{lineHeight:'23px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',textAlign:'justify'}}>                                
                            Metode alami yang dapat meningkatkan kemampuan semua aspek bahasa secara bersamaan meliputi kosa kata, kemampuan bicara, mendengar, membaca, menulis, tata bahasa dan pelafalan sehingga menguasai bahasa Inggris menjadi sangat mudah.
                            Menghindari munculnya rasa tidak percaya diri ketika bicara bahasa Inggris.
                            Memanfaatkan materi, perangkat dan teknologi yang sudah anda miliki namun belum menyadari
                            Teknik jitu bicara dengan English native speaker
                            Teknik jitu bicara di depan umum, bagaimana mengatasi grogi hanya dalam satu menit.
                        </h5>
                     </div>
                     <div style={{width:'810px',marginTop:'40px'}}>

                        <h2 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Sertifikat</h2>
                        <img src={serti}/>
                     </div>
                     <div style={{width:'810px',marginTop:'40px'}}>
                        <h2 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Untuk Siapa Kelas Ini?</h2>
                        <Row>
                            <Col md={2} style={{height:'34px',textAlign:'center',margin:'10px',background: 'rgba(28, 29, 32, 0.0686735)',borderRadius: '13.9733px'}}>
                                <h5 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '400',fontSize: '13px'}}>Mahasiswa</h5>
                            </Col>
                            <Col md={2} style={{height:'34px',textAlign:'center',margin:'10px',background: 'rgba(28, 29, 32, 0.0686735)',borderRadius: '13.9733px'}}>                               
                                <h5 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '400',fontSize: '13px'}}>Umum</h5>
                            </Col>
                            <Col md={2} style={{height:'34px',textAlign:'center',margin:'10px',background: 'rgba(28, 29, 32, 0.0686735)',borderRadius: '13.9733px'}}>                               
                                <h5 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '400',fontSize: '13px'}}>Karyawan</h5>
                            </Col>
                            <Col md={2} style={{height:'34px',textAlign:'center',margin:'10px',background: 'rgba(28, 29, 32, 0.0686735)',borderRadius: '13.9733px'}}>                               
                                <h5 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '400',fontSize: '13px'}}>Profesional</h5>
                            </Col>
                        </Row>
                     </div>
                     
                     <div style={{width:'810px',marginTop:'40px'}}>

                        <h2 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Cara Belajar</h2>
                        <h5  style={{lineHeight:'23px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',textAlign:'justify'}}>14 video ajar yang bisa anda saksikan kapan saja dan dimana saja. E-book Kuis Online session pembahasan dan tanya-jawab</h5>
                     </div>
                     <div style={{width:'810px',marginTop:'40px'}}>

                        <h2 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Tentang Pengajar</h2>
                        <h5  style={{lineHeight:'23px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',textAlign:'justify'}}>Kelas ini dibawakan oleh Bapak Anang Sam dari English Technology, sebuah institusi kursus Bahasa Inggris di Jakarta yang berpengalaman belasan tahun dalam mengajar Bahasa Inggris. Dari pengalaman panjang tersebut English Technology berhasil mengembangkan metode pengajaran dan belajar Bahasa Inggris secara alami dan mudah yang tidak anda dapatkan di tempat lain.</h5>
                     </div>
                     <div style={{width:'810px',marginTop:'40px'}}>
                        <h2 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Kurikkulum Kelas</h2>
                        <Accordion>
                            <Accordion.Item eventKey="0" >
                              <Accordion.Header>Pengantar</Accordion.Header>
                              <Accordion.Body>
                                
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" >
                              <Accordion.Header style={{marginTop:'10px',border:'10px #000'}}>Mengapa Belajar Bahasa Inggris</Accordion.Header>
                              <Accordion.Body>
                               <Row><img src={fakeText1}/></Row>
                               <Row><img src={fakeText2}/></Row>
                               <Row><img src={fakeText3}/></Row>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" style={{marginTop:'10px'}}>
                              <Accordion.Header>Tantangan Belajar Bahasa Inggris</Accordion.Header>
                              <Accordion.Body>
                                
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" style={{marginTop:'10px'}}>
                              <Accordion.Header>Cara Menguasai Bahasa Inggris</Accordion.Header>
                              <Accordion.Body>
                                
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" style={{marginTop:'10px'}}>
                              <Accordion.Header>Penutup</Accordion.Header>
                              <Accordion.Body>
                                
                              </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                            <img style={{marginTop:'60px'}} src={fakeReviewImageOnly}/>
                            <div style={{width:'810px',marginTop:'40px'}}>  
                                <h2 style={{lineHeight:'34px',marginBottom:'15px',color:'#1C1D20',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Kelas Serupa</h2>
                                <div className='imageSliderFake'>
                                <img src={fakePreviousButton} style={{marginTop:'100px',marginLeft:'-30px'}}/>
                                <img src={fakeNextButton} style={{marginTop:'100px',marginLeft:'720px'}}/>
                                </div>
                            </div>
                    </div>
                     

                 </Col>
                 <Col md={4}>
                    <img src={sideOveringKelas}/>
                 </Col>
                 </Row>
             </Container>
             <div style={{marginTop:'30px'}} className='footer'>

</div>
            </div>
        )
    }
}
