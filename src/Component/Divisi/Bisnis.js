
import { useEffect } from 'react';
import aos from 'aos'
import 'aos/dist/aos.css'
import ketua from '../../assets/image/Bisnis/BISNIS - ADAM BIJAI KASAH.jpg'
import wakil from '../../assets/image/Bisnis/BISNIS - ROSDIANA.jpg'
import anggota1 from '../../assets/image/Bisnis/BISNIS - ARIADIN.jpg'
import anggota2 from '../../assets/image/Bisnis/BISNIS - DIANA CYNTHIA ASRI.jpg'
import anggota3 from '../../assets/image/Bisnis/BISNIS - M ILHAM ZAKARIA.jpg'
import anggota4 from '../../assets/image/Bisnis/BISNIS - NURWIDINA RAHAYU.jpg'
import anggota5 from '../../assets/image/Bisnis/BISNIS - SITI PARTI RESMIYATI.jpg'
import anggota6 from '../../assets/image/Bisnis/BISNIS - SRI MUJIANTI.jpg'
import proker1 from '../../assets/image/Bisnis/GETE.png'
import proker2 from '../../assets/image/Bisnis/merch.png'
import proker3 from '../../assets/image/Bisnis/hikari.png'
import proker4 from '../../assets/image/Bisnis/bm.png'

const Bisnis = () => {
    useEffect(()=>{
      aos.init({duration: 2000})
    },[]);
    return (
        <div className='col-lg-10 m-auto'>
            <p className='text-left'>
            Divisi Ekonomi & Bisnis merupakan bagian dari Divisi KARIB (Keluarga Remaja Islam BSD) yang bergerak dan menciptakan kegiatan usaha melalui penjualan produk, marketing, serta edukasi mengenai bisnis. Tujuan dari Divisi Ekonomi dan Bisnis yaitu untuk mengembangkan nilai jual suatu produk/merk yang dimiliki oleh KARIB, dan membantu keuangan untuk kegiatan Dakwah KARIB.
            </p>
            <div className="Anggota-section col-lg-10 m-auto"  data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
            <div className='col-sm-12 col-lg-4 ketua'>
                <img src ={ketua} alt="img"/>
            </div>
            <div className='col-sm-12 col-lg-4 wakil'>
                <img src ={wakil} alt="img" />
            </div>
            </div>
            <div className="Anggota-section col-lg-10 m-auto mt-4"  data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="5000">            
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
            </div>
            <div className='Proker col-lg-10 m-auto'>
                <h3 className='text-center mt-4'>Program Kerja</h3>
                <div>
                    <div className='prokerdetail'>
                        <div className='prokerimage'>
                            <img src={proker1} alt='proker1' />
                        </div>
                        <div className='prokerDesc'>
                            <div>
                                <p>GETE adalah program pengembangan bisnis KARIB di semua bidang dengan cara mengajak para pengusaha untuk Kerjasama dengan KARIB. Tujuannya untuk meningkatkan ekonomi masyarakat terutama Internal KARIB serta mengenalkan KARIB ke masyarakat luar.</p>
                                <p>Jobsdesk</p>
                                <ul>
                                    <li>Mencari Partner Bisnis.</li>
                                    <li>Melakukan Pemasaran setiap Pekannya.</li>
                                    <li>Membuat Laporan Keuangan.</li>
                                    <li>Controlling / Pengawasan.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='prokerdetail'>
                        <div className='prokerDesc'>
                            <div>
                                <p>GETE adalah program pengembangan bisnis KARIB di semua bidang dengan cara mengajak para pengusaha untuk Kerjasama dengan KARIB. Tujuannya untuk meningkatkan ekonomi masyarakat terutama Internal KARIB serta mengenalkan KARIB ke masyarakat luar.</p>
                            </div>
                        </div>
                        <div className='prokerimage'>
                            <img src={proker1} alt='proker1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bisnis