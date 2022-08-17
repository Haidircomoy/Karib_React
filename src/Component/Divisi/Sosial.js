import { useEffect } from 'react';
import aos from 'aos'
import 'aos/dist/aos.css'
import Ketua from '../../assets/image/Sosial/SOSIAL - RUDY SEPTIAN.jpg'
import Wakil from '../../assets/image/Sosial/SOSIAL - MAULIA.jpg'
import anggota1 from '../../assets/image/Sosial/SOSIAL  - M MUSTOFA.jpg'
import anggota2 from '../../assets/image/Sosial/SOSIAL - DAVIT SETIA BAKTI.jpg'
import anggota3 from '../../assets/image/Sosial/SOSIAL - DHILFANA.jpg'
import anggota4 from '../../assets/image/Sosial/SOSIAL - DIANA FITRI.jpg'
import anggota5 from '../../assets/image/Sosial/SOSIAL - DJIHNI NABILA.jpg'
import anggota6 from '../../assets/image/Sosial/SOSIAL - HERLIANA.jpg'
import anggota7 from '../../assets/image/Sosial/SOSIAL - IBRAHIM AZI.jpg'
import anggota8 from '../../assets/image/Sosial/SOSIAL - INAS.jpg'
import anggota9 from '../../assets/image/Sosial/SOSIAL - INTAN KUSUMAWATI.jpg'
import anggota10 from '../../assets/image/Sosial/SOSIAL - IRMA FAUZIAH.jpg'
import anggota11 from '../../assets/image/Sosial/SOSIAL - NURHUDA.jpg'
import anggota12 from '../../assets/image/Sosial/SOSIAL - RINA AFRA.jpg'
import anggota13 from '../../assets/image/Sosial/SOSIAL - ROBIATUL ADAWIYAH.jpg'
import anggota14 from '../../assets/image/Sosial/SOSIAL - SUCI MAHARANI.jpg'


const Sosial = () => {
    useEffect(()=>{
      aos.init({duration: 2000})
    },[]);
    return (
        <div className='col-lg-10 m-auto'>
            <p className='text-left bisnisdescription'>
                Divisi Ekonomi & Bisnis merupakan bagian dari Divisi KARIB (Keluarga Remaja Islam BSD) yang bergerak dan menciptakan kegiatan usaha melalui penjualan produk, marketing, serta edukasi mengenai bisnis. Tujuan dari Divisi Ekonomi dan Bisnis yaitu untuk mengembangkan nilai jual suatu produk/merk yang dimiliki oleh KARIB, dan membantu keuangan untuk kegiatan Dakwah KARIB.
            </p>
            <div className='text-center'>
               <h3>Anggota</h3>
                <p>Kenalan dulu yuk sama anggota-anggota nya Divisi Sosial KARIB</p>
           </div>
           
           <div className="Anggota-section col-lg-12 m-auto mx-4"  data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <div className='col-sm-12 col-lg-3 ketua'>
                    <img src ={Ketua} alt="img"/>
                </div>
                <div className='col-sm-12 col-lg-3 wakil'>
                    <img src ={Wakil} alt="img" />
                </div>
            </div>
            <div className="Anggota-section col-lg-12 m-auto mt-4"  data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="5000">            
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota1} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota2} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota3} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota4} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota5} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota6} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota7} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota8} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota9} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota10} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota11} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota12} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota13} alt="img" />
                </div>
                <div className='flex-wrap col-sm-12 col-lg-3 anggota'>
                    <img src ={anggota14} alt="img" />
                </div>
            </div>
            <div className='Proker col-lg-10 m-auto' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <h3 className='text-center mt-4'>Program Kerja</h3>
                <div className='Anggota-section flex-wrap'>
                    <div className="container mt-4 col-sm-12 col-lg-6">
                        <div className="row">
                            <div>
                                <div className="card card-proker">
                                <h3 className='text-center text-dark'>Takjil on The Road (TOR) </h3>
                                <p className='text-dark'>
                                    TOR merupakan kegiatan membagi-bagikan takjil pada bulan Ramadhan di tempat umum, dimana semua pengurus karib dapat  terlibat dalam hal ini. Pembagian takjil selain dari internal karib dapat juga berkolaborasi dengan komunitas lainnya. 
                                </p>
                                <p className="text-dark">
                                    Tujuan: memberi takjil (makanan ringan) untuk ummat muslim yang sedang diperjalanan dan belum sempat membeli makanan untuk berbuka puasa.
                                </p>
                                <p className="text-dark">
                                    Sasaran program/ penerima manfaat: masyarakat sekitar yang menjadi target program.
                                </p>
                                <p className="text-dark">
                                    Jadwal kegiatan:  hari ahad pada minggu ke 1,2,3,  selama bulan Ramadhan 
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="container mt-4 col-sm-12 col-lg-6">
                        <div className="row">
                            <div>
                                <div className="card card-proker">
                                <h3 className='text-center text-dark'>Tanggap Bencana</h3>
                                <p className='text-dark'>
                                    merupakan program yang bergerak dalam aksi tanggap darurat jika terjadi bencana alam atau bencana sosial. Juga akan dilakukan kegiatan pelatihan aksi tanggap bencana dengan berkolaborasi dengan komunitas lainnya
                                </p>
                                <p className="text-dark">
                                    Tujuan : Bereaksi cepat tanggap untuk membantu korban bencana alam dalam bentuk materiil maupun non materiil
                                </p>
                                <p className="text-dark">
                                    Sasaran program/ penerima manfaat : Korban terdampak bencana alam, baik individunya ataupun wilayahnya.
                                </p>
                                <p className="text-dark">
                                    Jadwal kegiatan : Tentative, jika terjadi bencana , kegiatan pelatihan dilaksanakan 2 kali dalam setahun 
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="container mt-4 col-sm-12 col-lg-6">
                        <div className="row">
                            <div>
                                <div className="card card-proker">
                                <h3 className='text-center text-dark'>Kunjungan Sosial</h3>
                                <p className='text-dark'>
                                    Kunjungan Sosial merupakan kunjungan yng dilakukan oleh KARIB dalam rangka peduli terhadap ummat yang memerlukan perhatian lebih akan kehadiran seseorang. Kunjungan sosial Insyaallah akan dilakukan di berbagai lembaga sosial seperti Lapas, Panti asuhan, panti jompo, anak jalanan, dan lain-lain.
                                </p>
                                <p className="text-dark">
                                    Tujuan : berbagi semangat atau sharing secion antara kakak-kakak KARIB dan sasaran program atau penerima manfaat.
                                </p>
                                <p className="text-dark">
                                    Sasaran program/ penerima manfaat : peserta atau anggota lembaga sosial.
                                </p>
                                <p className="text-dark">
                                    Jadwal kegiatan : 1 kali dalam setahun. 
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className="container mt-4 col-sm-12 col-lg-6">
                        <div className="row">
                            <div>
                                <div className="card card-proker">
                                <h3 className='text-center text-dark'>Adik Asuh</h3>
                                <p className='text-dark'>
                                    Adik asuh merupakan program pembekalan baik berupa materi ataupun pembekalan motivasi yang diperuntukan bagi anak sekolah usia SD, SMP, dan SMA sederajat. Pembekalan berupa materi diberikan untuk keperluan pendidikan (biaya SPP) ataupun untuk keperluan peralatan sekolah. 
                                </p>
                                <p className="text-dark">
                                    Tujuan : tujuan program ini adalah untuk saling membantu anak sekolah yang secara finansial tidak mampu untuk membayar spp ke sekolah.
                                </p>
                                <p className="text-dark">
                                    Sasaran program/ penerima manfaat : penerima manfaat ini akan dilakukan secara berjenjang dari SD , SMP , SMA.
                                </p>
                                <p className="text-dark">
                                    Jadwal kegiatan : Tentatif. 
                                </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="container mt-4 col-sm-12 col-lg-6">
                        <div className="row">
                            <div>
                                <div className="card card-proker">
                                <h3 className='text-center text-dark'>Berbagi Nasi</h3>
                                <p className='text-dark'>
                                    Berbagi nasi  merupakan program yang diperuntukan kepada masyarakat yang membutuhkan dengan memberikan bantuan berupa  bahan makanan seperti nasi atau sembako dijalan. 
                                </p>
                                <p className="text-dark">
                                    Tujuan : memberi nasi atau dapat pula sembako dijalan bagi masyarakat yang membutuhkan .
                                </p>
                                <p className="text-dark">
                                    Sasaran program/ penerima manfaat : Penerima manfaat diberikan kepada pemulung dijalan , tukang sapu dijalan , dan lain lain. 
                                </p>
                                <p className="text-dark">
                                    Jadwal kegiatan : Sebulan sekali (pada ahad minggu ke 2). 
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="container mt-4 col-sm-12 col-lg-6">
                        <div className="row">
                            <div>
                                <div className="card card-proker">
                                <h3 className='text-center text-dark'>Kencleng KARIB</h3>
                                <p className='text-dark'>
                                    Kencleng KARIB merupakan tabungan yang berasal dari uang istimewa yang dimasukan ke dalam kencleng sebesar 1 hari minimal Rp.1.000,-. Nantinya dana ini akan digunakan untuk keperluan sosial divisi karib. 
                                </p>
                                <p className="text-dark">
                                    Tujuan : Melatih diri bersedekah setiap hari dan selanjutnya dapat digunakan sebagai dana untuk membantu program - program sosial.
                                </p>
                                <p className="text-dark">
                                    Sasaran program/ penerima manfaat : Penerima manfaat umumnya anggota karib jika sewaktu-waktu terkendala hal pendanaan suatu program kegiatan tertentu, digunakan juga untuk korban bencana juga untuk penerima berbagi nasi. 
                                </p>
                                <p className="text-dark">
                                    Jadwal kegiatan : pengumpulan kencleng dilakukan setiap tanggal  10 tiap bulan. 
                                </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    )
}
export default Sosial