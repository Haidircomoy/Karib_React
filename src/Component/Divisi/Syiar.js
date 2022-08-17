import { useEffect } from 'react';
import aos from 'aos'
import 'aos/dist/aos.css'
import Ketua from '../../assets/image/Syiar/SYIAR - M RASYID RIDHANI.jpg'
import Wakil from '../../assets/image/Syiar/SYIAR - IZZATI HANANI.jpg'
import anggota1 from '../../assets/image/Syiar/SYIAR - APRILIANA.jpg'
import anggota2 from '../../assets/image/Syiar/SYIAR - FATIH FADIL.jpg'
import anggota3 from '../../assets/image/Syiar/SYIAR - FITRI ALINA.jpg'
import anggota4 from '../../assets/image/Syiar/SYIAR - HANUM.jpg'
import anggota5 from '../../assets/image/Syiar/SYIAR - ISMAIL.jpg'
import anggota6 from '../../assets/image/Syiar/SYIAR - NUR JAYANTI.jpg'
import anggota7 from '../../assets/image/Syiar/SYIAR - PUTRI REZEKI.jpg'
import anggota8 from '../../assets/image/Syiar/SYIAR - SEHA.jpg'
import anggota9 from '../../assets/image/Syiar/SYIAR - SYIFA NUR KHOFIFAH.jpg'
import Card from './carProker2'



const Syiar = () => {
    useEffect(()=>{
      aos.init({duration: 2000})
    },[]);
    return(
        <div className='col-lg-10 m-auto'>
            <p className='text-left bisnisdescription'>
                Divisi Syiar dan Keilmuan ini adalah sarana dakwah para pemuda dan juga para tetuah dalam belajar perihal Agama Islam secara menyeluruh. Divisi Syiar dan Keilmuan juga berfungsi sebagai menebar hikmah, mengingatkan, dan menjaga. Serta berlandaskan pada Al-Quran, adanya divisi ini ditujukan untuk menebarkan ilmu seluas-luasnya baik dari segi Agama Islam maupun keilmuan, terkhusus untuk masyakarat yang berdomisili di Bumi Serpong Damai, Serpong, Tangerang Selatan.
            </p>
            <div className='text-center'>
            <h3>Anggota</h3>
                <p>Kenalan dulu yuk sama anggota-anggota nya Divisi Syiar KARIB</p>
            </div>
            
            <div className="Anggota-section col-lg-12 m-auto mx-4"  data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <div className='col-sm-12 col-lg-3 ketua'>
                    <img src ={Ketua} alt="img"/>
                </div>
                <div className='col-sm-12 col-lg-3 wakil'>
                    <img src ={Wakil} alt="img" />
                </div>
            </div>
            
            <div className="Anggota-section col-lg-12 m-auto mx-4"  data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <div className='col-sm-12 col-lg-3 ketua'>
                    <img src ={anggota1} alt="img"/>
                </div>
                <div className='col-sm-12 col-lg-3 wakil'>
                    <img src ={anggota2} alt="img" />
                </div>
                <div className='col-sm-12 col-lg-3 wakil'>
                    <img src ={anggota3} alt="img" />
                </div>
            </div>
            <div className="Anggota-section col-lg-12 m-auto mx-4"  data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <div className='col-sm-12 col-lg-3 ketua'>
                    <img src ={anggota4} alt="img"/>
                </div>
                <div className='col-sm-12 col-lg-3 wakil'>
                    <img src ={anggota5} alt="img" />
                </div>
                <div className='col-sm-12 col-lg-3 wakil'>
                    <img src ={anggota6} alt="img" />
                </div>
            </div>
            <div className="Anggota-section col-lg-12 m-auto mx-4"  data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <div className='col-sm-12 col-lg-3 ketua'>
                    <img src ={anggota7} alt="img"/>
                </div>
                <div className='col-sm-12 col-lg-3 wakil'>
                    <img src ={anggota8} alt="img" />
                </div>
                <div className='col-sm-12 col-lg-3 wakil'>
                    <img src ={anggota9} alt="img" />
                </div>
            </div>
            <div className='Proker col-lg-10 m-auto'>
                <h3 className='text-center mt-4'>Program Kerja</h3>
                <div className='Anggota-section flex-wrap'>
                        <div className="container mt-4 col-sm-12 col-lg-12" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                            <div className="row">
                                <div>
                                    <div className="card card-proker">
                                    <h3 className='text-center text-dark'>SMS Dhuha (Senang Mengaji Setelah Dhuha)</h3>
                                    <p className='text-dark'>Merupakan program kerja yang menyajikan kajian rutin setiap hari Ahad yang dilaksanakan setelah Dhuha. Dilaksanakan setiap pekan dalam sebulan dengan petugas dari divisi tertentu setiap bulannya. Setiap bulan sekali, petugas akan dirolling ke divisi yang lain. Publikasi untuk promosi kegiatan SMS Dhuha dibuat dalam dua jenis, yaitu bentuk flyer bulanan (semua pemateri) dan flyer mingguan (per pemateri). Resume kajian setelah SMS Dhuha akan dibuat dalam bentuk postingan dan story Instagram (flyer/quotes) dengan bantuan dari divisi media. Konten flyer bulanan, bisa bersumber dari isi surat izin tempat yang dikirim ke media.</p>
                                    <div className='SMSDUHA text-dark'>
                                        <div>
                                            <h5>Rundown SMS Dhuha</h5>
                                            <ul>
                                                <li>Pembukaan SMS Dhuha oleh MC.</li>
                                                <li>Pembacaan tilawah dan asmaul husna (tentatif).</li>
                                                <li>Kajian inti oleh pemateri.</li>
                                                <li>QnA.</li>
                                                <li>Info-info tentang KARIB.</li>
                                                <li>Penutup.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5>Jadwal Rolling Petugas SMS Dhuha</h5>
                                            <ul>
                                                <li>Syiar (Februari).</li>
                                                <li>PSDM (Maret).</li>
                                                <li>Sosial (April).</li>
                                                <li>Bisnis (Mei).</li>
                                                <li>Pengurus Inti (Juni).</li>
                                                <li>Bulan selanjutnya kembali ke urutan awal.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Anggota-section flex-wrap' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                            <div className='mt-4 col-sm-12 col-lg-6'>
                                <Card title="Kajian Akhwat"
                                desc="Merupakan program kerja yang menyajikan kajian khusus untuk para akhwat dengan tujuan mengupgrade ilmu agama ataupun skill yang dilaksanakan setiap 2 bulan sekali dengan tema yang beragam."/>
                            </div>
                            <div className='mt-4 col-sm-12 col-lg-6'>
                                <Card title="Kelas Keilmuan"
                                desc="Merupakan program kerja yang menyajikan kelas untuk sharing knowledge; tentang ilmu-ilmu yang dapat dipraktikan seperti kelas jurnalistik, public speaking, pelatihan design dan tadabbur al-Qur'an. Kelas ini diadakan dua pekan sekali setiap bulannya."/>
                            </div>
                        </div>
                        <div className='Anggota-section flex-wrap' data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                            <div className='mt-4 col-sm-12 col-lg-12'>
                                <Card title="Karib Talk Internal"
                                desc="Program kerja yang menyajikan wadah bagi anggota KARIB untuk berbagi ilmu, pengetahuan, atau cerita melalui diskusi ringan di dalam zoom (atau media lain) sesuai dengan bidang/keahlian/minat masing-masing. KARIB Talk ini dilaksanakan dua kali dalam satu bulan; di hari Selasa malam."/>
                            </div>
                        </div>
                        <div className='Anggota-section flex-wrap' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                            <div className='mt-4 col-sm-12 col-lg-6'>
                                <Card title="Tahsin Ikhwan"
                                desc="Program kerja ini merupakan wadah bagi anggota ikhwan KARIB untuk menguasai cara tepat membaca al-Qur'an dengan bimbingan Ustadz yang berkompeten di bidangnya. Tahsin Ikhwan akan dilaksanakan seminggu sekali."/>
                            </div>
                            <div className='mt-4 col-sm-12 col-lg-6'>
                                <Card title="Tahsin Akhwat"
                                desc="Program kerja ini merupakan wadah bagi anggota akhwat KARIB untuk menguasai cara tepat membaca al-Qur'an dengan bimbingan Ustadzah yang berkompeten di bidangnya. Tahsin akhwat akan dilaksanakan seminggu sekali.."/>
                            </div>
                        </div>
                        <div className='Anggota-section flex-wrap' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                            <div className='mt-4 col-sm-12 col-lg-12'>
                                <Card title="MABIT ( Malam Bimbingan Iman dan Taqwa)"
                                desc="Mabit merupakan salah satu sarana pendidikan untuk membina ruhiyah, membersihkan jiwa, melembutkan hati dan fisik untuk beribadah. Program kerja ini berupa kegiatan bermalam di suatu masjid dan diisi dengan rangkaian kegiatan untuk meningkatkan ketaqwaan para peserta, seperti shalat berjamaah, dzikir/tadarus al-Qur'an, qiyamul lail, tafakkur/tadabbur dan kajian subuh. Kegiatan mabit akan dilaksanakan satu atau dua kali dalam setahun (kondisional tergantung kondisi) yaitu pada pertengahan tahun dan/atau akhir tahun di penghujung bulan Desember."/>
                            </div>
                        </div>
                </div>
            </div>
       </div>
    )
}
export default Syiar