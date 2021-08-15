import React, { Component } from 'react'
import Banner1 from '../assets/images/Group 4.png'
import MenuNavigation from '../components/menuNav'
import '../App.css'
import { Container, Row,Col } from 'react-bootstrap'
import pathBlue from '../assets/images/PathBlue.png'
import prakerjaImage from '../assets/images/Logo-kartu-prakerja Copy.png'
import pelatihanImage from '../assets/images/pelatihan.png'
import pathWhite from '../assets/images/pathWhite.png'
import sale from '../assets/images/hot-sale.png'
import CardKelas from '../components/cardKelas'
import newIcon from '../assets/images/new.png'
import awardIcon from '../assets/images/award.png'
import banner2 from '../assets/images/Group 10.png'
import JenisKelas from '../components/cardJenisKelas'
import SemuaKelasIcon from '../assets/images/semua kelas.png'
import KWHIcon from '../assets/images/kewirausahaan.png'
import PemasaranIcon from '../assets/images/pemasaran.png'
import DGMIcon from '../assets/images/digital marketing.png'
import Teknologi from '../assets/images/Techlology.png'
import MultimediaIcon from '../assets/images/multimedia.png'
import KesehatanIcon from '../assets/images/kesehatan.png'
import BGVector from '../assets/images/Vector Smart Object.png'
import Satis from '../assets/images/satisfaction.png'
import partnerBanner from '../assets/images/Group 18.png'
import testimoni from '../assets/images/Group 22.png'
import blackboard from '../assets/images/blackboard.png'


export default class HomePage extends Component {
    render() {
        return (
            <div>
                <MenuNavigation/>
                <div className='banner1' >
                <Container>
                    <h2 style={{paddingTop:'40px',color:'#fff',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '38px'}}>Kursus dari Genggaman</h2>
                    <p style={{ width:'549px', color:'white',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '500',fontSize: '15px'}}>Tingkatkan karier dan raih pekerjaan yang anda impikan dengan memiliki sertifikat hard copy dari lembaga kursus yang kredibel dan belajar secara online.</p>
                    <button style={{ width:'250px',height:'50px', border:'none',color:'#0265B4',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: 'bold',fontSize: '17px',background: '#FFFFFF',borderRadius: '10px'}}>Daftar Sekarang <img src={pathBlue}/></button>
                </Container>
                </div>
                    <div style={{marginTop:'0',margin:' 60px'}}>
                    <div className='prakerja'>
                    <Row style={{height:'92px',margin:'0',}}>
                        <Col md={3} style={{margin:'auto'}}>
                            <img src={prakerjaImage}/>
                        </Col>
                        <Col md={6} style={{margin:'auto'}}>
                            <h4 style={{color:'#0872C7',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '700',fontSize: '21px'}}>Punya kupon Pelatihan Prakerja? Gunakan kuponnya di sini</h4>
                        </Col>
                        <Col md={3} style={{margin:'auto'}}>
                            <button style={{ width:'250px',height:'50px', border:'none',color:'#fff',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '700',fontSize: '17px',background: '#FF7F26',borderRadius: '10px'}}>GUNAKAN KUPON</button>
                        </Col>
                    </Row>
                    </div>
                        <div className='pelatihan'> </div>
                        <div className='giveaway'></div>   
                        <div className='mitra'></div>  
                        <Row>
                            <Col className='Keuangan' style={{margin:'20px'}}>
                            <Row style={{height:'100px',margin:'0',}} >
                                <Col md={8} style={{margin:'auto'}}>
                                <h3 style={{color:'#fff',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: 'bold',fontSize: '18px'}}>Menjadi Ahli</h3>
                                <h2 style={{color:'#fff',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Keuangan</h2>
                                </Col>
                                <Col md={4} style={{margin:'auto',textAlign:'end'}}>
                                    <img src={pathWhite}/>
                                </Col>
                            </Row>
                            </Col>
                            <Col className='K3' style={{margin:'20px'}}>
                                <Row style={{height:'100px',margin:'0',}} >
                                    <Col md={8} style={{margin:'auto'}}>
                                    <h3 style={{color:'#fff',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: 'bold',fontSize: '18px'}}>Menjadi Ahli</h3>
                                    <h2 style={{color:'#fff',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>K3 (Keselamatan dan Kesehatan Kerja)</h2>
                                    </Col>
                                    <Col md={4} style={{margin:'auto',textAlign:'end'}}>
                                        <img src={pathWhite}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className='ISO' style={{margin:'20px'}}>
                                <Row style={{height:'100px',margin:'0',}} >
                                    <Col md={8} style={{margin:'auto'}}>
                                    <h3 style={{color:'#fff',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: 'bold',fontSize: '18px'}}>Menjadi Ahli</h3>
                                    <h2 style={{color:'#fff',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Standar ISO</h2>
                                    </Col>
                                    <Col md={4} style={{margin:'auto',textAlign:'end'}}>
                                        <img src={pathWhite}/>
                                    </Col>
                                </Row>
                                
                            </Col>
                        </Row> 
                        <div className='diskon'>
                            <Row style={{width:'385px',margin:'0',padding:'0'}}>
                                <Col md={1}>
                                    <img src={sale}/>
                                </Col>
                                <Col md={11} style={{margin:'auto',paddingLeft:'20px'}}>
                                    <h4  style={{color:'#1C1D20',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Sedang Diskon</h4>
                                </Col>
                                </Row>
                                <div style={{marginTop:'50px'}}>
                                <Row>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                </Row>
                                </div>
                        </div> 
                        
                        <div className='diskon'>
                            <Row style={{width:'385px',margin:'0',padding:'0'}}>
                                <Col md={1}>
                                    <img src={newIcon}/>
                                </Col>
                                <Col md={11} style={{margin:'auto',paddingLeft:'20px'}}>
                                    <h4  style={{color:'#1C1D20',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Kursus Terbaru</h4>
                                </Col>
                                </Row>
                                <div style={{marginTop:'50px'}}>
                                <Row>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                </Row>
                                </div>
                        </div> 
                        
                        <div className='diskon'>
                            <Row style={{width:'385px',margin:'0',padding:'0'}}>
                                <Col md={1}>
                                    <img src={awardIcon}/>
                                </Col>
                                <Col md={11} style={{margin:'auto',paddingLeft:'20px'}}>
                                    <h4  style={{color:'#1C1D20',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Best Seller</h4>
                                </Col>
                                </Row>
                                <div style={{marginTop:'50px'}}>
                                <Row>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                </Row>
                                </div>
                        </div>
                        <img src={banner2}/> 
                        
                        <div className='diskon' style={{marginTop:'100px'}}>
                            <Row style={{width:'885px',margin:'0',padding:'0'}}>
                                <Col md={4}>
                                    <h4  style={{color:'#1C1D20',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Kursus Bersertifikat</h4>
                                </Col>
                                <Col md={6} style={{display:'flex',justifyContent:'flex-start'}}>
                                <a href='' style={{textDecoration:'none'}}><h4  style={{color:'lightblue',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '700',fontSize: '17px'}}>Lihat Semua</h4></a>
                                </Col>
                                </Row>
                                <div style={{marginTop:'50px'}}>
                                <Row>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                </Row>
                                </div>
                        </div>
                        <div className='diskon' style={{marginTop:'100px'}}>
                            <Row style={{width:'885px',margin:'0',padding:'0'}}>
                                <Col md={4}>
                                    <h4  style={{color:'#1C1D20',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Kursus Bisnis</h4>
                                </Col>
                                <Col md={6} style={{display:'flex',justifyContent:'flex-start'}}>
                                <a href='' style={{textDecoration:'none'}}><h4  style={{color:'lightblue',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '700',fontSize: '17px'}}>Lihat Semua</h4></a>
                                </Col>
                                </Row>
                                <div style={{marginTop:'50px'}}>
                                <Row>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                </Row>
                                </div>
                        </div>
                        <div className='diskon' style={{marginTop:'100px'}}>
                            <Row style={{width:'885px',margin:'0',padding:'0'}}>
                                <Col md={4}>
                                    <h4  style={{color:'#1C1D20',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '22px'}}>Kursus Keuangan</h4>
                                </Col>
                                <Col md={6} style={{display:'flex',justifyContent:'flex-start'}}>
                                <a href='' style={{textDecoration:'none'}}><h4  style={{color:'lightblue',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '700',fontSize: '17px'}}>Lihat Semua</h4></a>
                                </Col>
                                </Row>
                                <div style={{marginTop:'50px'}}>
                                <Row>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                    <Col>
                                       <CardKelas/>
                                    </Col>
                                </Row>
                                </div>
                        </div>
                        <Row style={{margin:'0',padding:'0'}}>
                            <Col>
                                <JenisKelas image={SemuaKelasIcon} title='Semua Kelas'/>
                            </Col>
                            <Col>
                                <JenisKelas image={KWHIcon} title='Kewirausahaan'/>
                            </Col>
                            <Col>
                                <JenisKelas image={PemasaranIcon} title='Pemasaran'/>
                            </Col>
                            <Col>
                                <JenisKelas image={DGMIcon} title='Digital Marketing'/>
                            </Col>
                            <Col>
                                <JenisKelas image={Teknologi} title='Teknologi'/>
                            </Col>
                            <Col>
                                <JenisKelas image={MultimediaIcon} title='Multimedia'/>
                            </Col>
                            <Col>
                                <JenisKelas image={KesehatanIcon} title='Kesehatan'/>
                            </Col>
                        </Row>
                </div> 
                <div className='vector'>
                <img src={Satis}/>
                <h2 style={{color:'#1C1D20',paddingTop:'15px',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '40px'}}>Jarak dan Waktu Bukan Masalah Lagi</h2>
                <h4 style={{color:'#1C1D20',paddingTop:'15px',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '600',fontSize: '15px',width:'1000px'}}>Arkademi menyediakan layanan kursus bersertifikat dengan cara belajar full online dari mobile app atau web. Tersedia puluhan kelas kursus berkualitas tinggi dalam berbagai kategori yang disediakan lembaga kursus resmi atau institusi. Sertifikat hard copy akan dikirim langsung ke alamat anda.
                Kini anda bisa mengikuti kursus yang anda butuhkan tanpa terikat tempat dan waktu dengan harga yang sangat terjangkau.</h4>
                <button style={{textAlign:'center',marginTop:'25px',border:'none',width:'250px',height:'54px',background: '#FF5718',borderRadius: '8px',color: '#FFF',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: 'bold',fontSize: '15px'}}>DAFTAR SEKARANG</button>
                </div>
                
                <div style={{marginTop:'20px',textAlign:'center'}}>
                    <img src={partnerBanner}/>
                    <hr style={{width:'1200px',margin:'auto',marginTop:'30px',textAlign:'center', border:' 1px solid rgba(28, 29, 32, 0.0838341)'}}/>
                </div>
                <div style={{ marginTop:'20px',textAlign:'center'}}>
                    <img src={testimoni}/>
                </div>
                <div style={{background:'#0872C7',height:'300px',marginTop:'60px',textAlign:'center'}}>
                <img src={blackboard} style={{marginTop:'20px'}}/>
                    <h2 style={{color:'#fff',paddingTop:'15px',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '800',fontSize: '28px'}}>Daftar Menjadi Pengajar</h2>
                    <h4 style={{color:'#fff',paddingTop:'15px',margin:'auto',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '500',fontSize: '20px'}}>Mengajar ke siswa dari seluruh Indonesia tanpa batas dengan mengajar secara online di Arkademi. Biaya Rp0.</h4>
                    <button style={{textAlign:'center',marginTop:'25px',border:'none',width:'250px',height:'54px',background: '#fff',borderRadius: '8px',color: '#0872C7',fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: 'bold',fontSize: '15px'}}>Mulai Mengajar</button>
                </div>
                <div className='footer'>

                </div>
            </div>
        )
    }
}
