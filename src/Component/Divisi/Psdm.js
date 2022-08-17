import { useEffect } from 'react';
import aos from 'aos'
import 'aos/dist/aos.css'
import Ketua from '../../assets/image/PSDM/PSDM - MUHAMMAD IQBAL.jpg'
import Wakil from '../../assets/image/PSDM/PSDM - ANNISA TASYA.jpg'
import anggota1 from '../../assets/image/PSDM/PSDM - AENUN SIRI.jpg'
import anggota2 from '../../assets/image/PSDM/PSDM - AULIA DESTIANTY.jpg'
import anggota3 from '../../assets/image/PSDM/PSDM - GINA LUKITA SARI.jpg'
import anggota4 from '../../assets/image/PSDM/PSDM - LUKMAN HAKIM.jpg'
import anggota5 from '../../assets/image/PSDM/PSDM - MITA RIZQI INAYAH.jpg'
import anggota6 from '../../assets/image/PSDM/PSDM - MUHAMMAD FIRMANSYAH.jpg'
import anggota7 from '../../assets/image/PSDM/PSDM - RIZKA INDRIA.jpg'
import anggota8 from '../../assets/image/PSDM/PSDM - SELIANA GUSTINA.jpg'
import anggota9 from '../../assets/image/PSDM/PSDM - SITI KHADIJAH.jpg'
import anggota10 from '../../assets/image/PSDM/PSDM - ZINEDINE FIERZA.jpg'
import Card from './cardPsdm'
import Card2 from './cardPsdm2'

const Psdm = () => {
    useEffect(()=>{
      aos.init({duration: 2000})
    },[]);
    return(
        <div className='col-lg-10 m-auto'>
            <p className='text-left bisnisdescription'>
                Divisi PSDM adalah bagian hal terpenting dalam suatu organisasi KARIB, Yang mana divisi ini lebih memfokuskan pada engembangan sumber daya manusia baik internal maupun eksternal.
            </p>
            <h5 className='text-center'>Visi-Misi Divisi PSDM</h5>
            <p>Sebagai Wada atas pengembangan Potensi sumber daya manusia di dalam organisasi KARI. Berfokus pada bounding Kepengurusan KARIB, menjadi dekat pada kekeluargaan, serta mewujudkan insan cerdas, Modern, dan relgius sesuai moto kota berada</p>
            
           <div className='text-center'>
               <h3>Anggota</h3>
                <p>Kenalan dulu yuk sama anggota-anggota nya Divisi PSDM KARIB</p>
           </div>
            <div className="Anggota-section col-lg-12 m-auto mx-4"  data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <div className='col-sm-12 col-lg-4 ketua'>
                    <img src ={Ketua} alt="img"/>
                </div>
                <div className='col-sm-12 col-lg-4 wakil'>
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
            </div>
            <div className='Proker col-lg-10 m-auto' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <h3 className='text-center mt-4'>Program Kerja</h3>
                <p>Setiap divisi KARIB tentunya memiliki program kerja masing-masing agar tujuan nya dapat tercapai. Berikut ini adalah program dari divisi PSDM :</p>
                    <h5 className='text-center'>1. Kaderisasi</h5>
                    <div className='Anggota-section flex-wrap'>   
                        <div className='mt-4 col-sm-12 col-lg-6'>
                            <Card title='PPAB'
                            desc='Tujuan : Regenerasi Anggota untuk masa kepengurusan yang akan datang.'
                            dec2 ='Tempat : Masjid Asy Syarif Al Azhar BSD.' />
                        </div>
                        <div className='mt-4 col-sm-12 col-lg-6'>
                            <Card title='Raker'
                            desc='Tujuan : Berdiskusi mengenai program dan targer kerja yg ingin dicapai.'
                            dec2 ='Tempat : Masjid Al Asri.' />
                        </div>
                        <div className='mt-4 col-sm-12 col-lg-6'>
                            <Card2 title='Upgrading'
                            desc='Kegiatan : Qiyamul lail, Muhasabah, sharing session, game sambung ayat, dan fun game untuk lebih mendekatkan ukhuwah.'
                            dec2 ='Penanggung Jawab: Khadijah, Luqman, Seli'
                            desc3 = 'Waktu Pelaksanaan : Maret & Oktober' />
                        </div>
                        <div className='mt-4 col-sm-12 col-lg-6'>
                            <Card2 title='RUK.LPJ / Evaluiasi'
                            desc='Kegiatan : Pemaparan program kerja yang telah dan tidak jadi dilaksanakan.'
                            dec2 ='Tujuan : Mengevaluasi program kerja selama 1 tahun.'
                            desc3 = 'Penanggung : Jawab Ainun' />
                        </div>   
                    </div>
                    <h5 className='text-center mt-4'>2. Olahraga</h5>
                    <div className='Anggota-section flex-wrap'>   
                        <div className='mt-4 col-sm-12 col-lg-6'>
                            <Card2 title='Archery'
                            desc='Kegiatan : Panahan.'
                            desc2="Tujuan : Melakukan olahraga sesuai sunah yang diajarkan oleh Rasulullah SAW."
                            dec3 ='Waktu Pelaksanaan : Setiap Sabtu Pagi.' />
                        </div>
                        <div className='mt-4 col-sm-12 col-lg-6'>
                            <Card2 title='Badminton'
                            desc='Kegiatan : Badminton.'
                            desc2 ='Tujuan : Melakukan olahraga agar tubuh menjadi sehat.'
                            desc3='Waktu Pelaksanaan : 1x setiap akhir pekan.' />
                        </div>   
                    </div>
                    <h5 className='text-center mt-4'>3. Konseling</h5>
                    <div className='Anggota-section flex-wrap'>
                        <div className="container mt-4 col-sm-12 col-lg-6">
                            <div className="row">
                                <div>
                                    <div className="card card-proker">
                                    <h3 className='text-center text-dark'>Liqo Gabungan</h3>
                                    <p className='text-dark'>Kegiatan terdiri dari Liqo untuk Ikhwan dan Akhwat.</p>
                                    <p className="text-dark">
                                        Tujuan
                                        <ul>
                                            <li>Berbagi Ilmu tentang Agama Islam.</li>
                                            <li>Memperkuat ukuwah islamiah.</li>
                                            <li>Membentuk Sumber Daya yang berkualitas.</li>
                                        </ul>
                                    </p>
                                    <p className="text-dark">
                                        Penanggung jawab:
                                        <ul>
                                            <li>Irfan Abdillah.</li>
                                            <li>Aditya Yoga P.</li>
                                        </ul>
                                    </p>
                                    <p className="text-dark">
                                        Pelaksanaan :
                                        <ul>
                                            <li>1 bulan sekali</li>
                                            <li>Lokasi : Rumah Dr. Taufik</li>
                                            <li>Murobbi : Ust. Kemal</li>
                                        </ul>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="container mt-4 col-sm-12 col-lg-6">
                            <div className="row">
                                <div>
                                    <div className="card card-proker">
                                    <h3 className='text-center text-dark'>Publik Speaking</h3>
                                    <p className='text-dark'>Kegiatan : Kelas dan Praktek.</p>
                                    <p className="text-dark">
                                        Tujuan :
                                        <ul>
                                            <li>Melatih keberanian Setiap Anggota KARIB dalam berbicara di depan Audience.</li>
                                            <li>Mengupgrade Skill Sebagai Publick Speaker.</li>
                                        </ul>
                                    </p>
                                    <p className="text-dark">
                                        PIC : Iqbal
                                    </p>
                                    <p className="text-dark">
                                        Waktu Pelaksanaan : Juni(1 bulan terdiri dari 4 sesi)
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <h5 className='text-center mt-4'>4. Karib 1 Rasa</h5>
                    <div className='Anggota-section flex-wrap'>
                        <div className="container mt-4 col-sm-12 col-lg-6">
                            <div className="row">
                                <div>
                                    <div className="card card-proker">
                                        <h3 className='text-center text-dark'>Bukber</h3>
                                        <p className='text-dark'>Kegiatan : Makan Bersama..</p>
                                        <p className="text-dark">Tujuan : Mempererat tali persaudaraan antar anggota.</p>
                                        <p className="text-dark">Waktu Pelaksanaan : Ramadhan (conditional).</p>
                                        <p className="text-dark">PIC: Riska dan Gina</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="container mt-4 col-sm-12 col-lg-6">
                            <div className="row">
                                <div>
                                    <div className="card card-proker">
                                    <h3 className='text-center text-dark'>Halal Bihalal</h3>
                                    <p className='text-dark'>Kegiatan : Makan Bersama, Fun Games, Charge Iman.</p>
                                    <p className="text-dark">Tujuan : Mempererat tali persaudaraan antar Anggota.</p>
                                    <p className="text-dark">Waktu Pelaksanaan : 1 atau 2 minggu setelah lebaran</p>
                                    <p className="text-dark">PIC : Aulia.</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
            </div>
        </div>
    )
}
export default Psdm