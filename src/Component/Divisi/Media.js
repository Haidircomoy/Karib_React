import { useEffect } from 'react';
import aos from 'aos'
import 'aos/dist/aos.css'
import ketua from '../../assets/image/Media/MEDIA - RIZKY KURNIA.jpg'
import wakil from '../../assets/image/Media/MEDIA - YULIANI NURSAKINAH.jpg'
import anggota1 from '../../assets/image/Media/MEDIA - HAIDIR.jpg'
import anggota2 from '../../assets/image/Media/MEDIA - BAZRIRA.jpg'
import anggota3 from '../../assets/image/Media/MEDIA - ARIQ FADHILLAH.jpg'
import anggota4 from '../../assets/image/Media/MEDIA - ARIFIN NUR MASIGIT.jpg'
import anggota5 from '../../assets/image/Media/MEDIA - ANISAH DWI PUTRI.jpg'
import anggota6 from '../../assets/image/Media/MEDIA - ANDI MULADI.jpg'
import anggota7 from '../../assets/image/Media/MEIDA - JAMAL PRAYOGA.jpg'
import CP from './cardProker'
import CP2 from './carProker2'

const Media = () => {
    useEffect(()=>{
      aos.init({duration: 2000})
    },[]);
    return (
        <div className='col-lg-10 m-auto'>
            <p className='text-left bisnisdescription'>
                Divisi Media dan Komunikasi adalah bagian unit kerja atau divisi Keluarga Remaja Islam BSD (KARIB) agar tetap eksis di dunia digital. Divisi Media dan Komunikasi membuat konten- konten menarik berupa tulisan, visual grafis, maupun video. Kegiatannya meliputi; dokumentasi dan publikasi, photography, videography, copywriting, sosial media, dan live streaming. Divisi Media dan Komunikasi, berdakwah dengan penuh kreativitas dalam dunia digital.
            </p>
           <div className='text-center'>
               <h3>Anggota</h3>
                <p>Kenalan dulu yuk sama anggota-anggota nya Divisi Media KARIB</p>
           </div>
            <div className="Anggota-section col-lg-12 m-auto mx-4"  data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
            <div className='col-sm-12 col-lg-4 ketua'>
                <img src ={ketua} alt="img"/>
            </div>
            <div className='col-sm-12 col-lg-4 wakil'>
                <img src ={wakil} alt="img" />
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
            </div>
            <div className='Proker col-lg-10 m-auto' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <h3 className='text-center mt-4'>Program Kerja</h3>
                
                <div className='d-flex justify-content-center flex-wrap'>   
                    <div className='mt-4 col-sm-12 col-lg-6'>
                        <CP title='Publikasi Kegiatan Karib'
                        desc='Publikasi Kegiatan KARIB, bersifat Karib to Jamaah Divisi Media dan Komunikasi berperan sebagai pembantu kegiatan. Kegiatan dalam program ini dapat dibagi menjadi 4, yaitu:'
                        misi1='Pra Event.'
                        misi2='Campaign Event (optional).'
                        misi3='Live Broadcast.'
                        misi4='Post Event.'/>
                    </div>
                    <div className='mt-4 col-sm-12 col-lg-6'>
                        <CP title='Dawah Digital'
                        desc='Dawah Digital, bersifat "Divisi Media dan Komunikasi to Jamaah. Divisi Media dan Komunikasi berperan sebagai pelaksana kegiatan melalui platform media sosial. Kegiatan dalam program ini meliputi 4 bagian, yaitu:'
                        misi1='Instagram.'
                        misi2='Youtube.'
                        misi3='Whatsapp.'
                        misi4='Facebook.'/>
                    </div>
                    <div className='mt-4 col-sm-12 col-lg-6'>
                        <CP2 title='Upgrading'
                        desc='Upgrading, bersifat "Divisi Media dan Komunikasi to KARIB". Divisi Media dan Komunikasi berperan sebagai pelaksana kegiatan. Program ini bersifat Workshop offline, yang bertujuan untuk meningkatkan kemampuan khususnya para anggota Divisi Media dan Komunikasi, dan umumnya seluruh anggota KARIB.' />
                    </div>
                </div>
            </div>
            <div className='Proker col-lg-12 m-auto' data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <h3 className='text-center mt-4'>Team Pelaksana</h3>
                <div className='Anggota-section flex-wrap'>
                    <div className='mt-4 col-sm-12 col-lg-4'>
                        <div className="container">
                            <div className="row">
                                <div>
                                    <div className="card card-proker">
                                    <h3 className='text-center'>Team Design Grafis</h3>
                                    <ul>
                                        <li>Anisah Dwi Putri</li>
                                        <li>Ariq Fadhillah</li>
                                        <li>Rizky Kurnia Aprialdi</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className='mt-4 col-sm-12 col-lg-4'>
                        <div className="container">
                            <div className="row">
                                <div>
                                    <div className="card card-proker">
                                    <h3 className='text-center'>Team photo dan video</h3>
                                    <ul>
                                        <li>Andi Muladi</li>
                                        <li>Arifin Nur Masigit</li>
                                        <li>Jamal Prayoga</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className='mt-4 col-sm-12 col-lg-4'>
                        <div className="container">
                            <div className="row">
                                <div>
                                    <div className="card card-proker">
                                    <h3 className='text-center'>Team Coppywriting</h3>
                                    <ul>
                                        <li>Yuliani Nursakinah</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 col-sm-12 col-lg-4'>
                        <div className="container">
                            <div className="row">
                                <div>
                                    <div className="card card-proker">
                                    <h3 className='text-center'>Team Sosial Media</h3>
                                    <ul>
                                        <li>Jamal Prayoga</li>
                                        <li>Andi Muladi</li>
                                        <li>Arifin Nur Masigit</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 col-sm-12 col-lg-4'>
                        <div className="container">
                            <div className="row">
                                <div>
                                    <div className="card card-proker">
                                    <h3 className='text-center'>Team streaming</h3>
                                    <ul>
                                        <li>Bazrira Noerfirdiansyah</li>
                                        <li>Arifin Nur Masigit</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 col-sm-12 col-lg-4'>
                        <div className="container">
                            <div className="row">
                                <div>
                                    <div className="card card-proker">
                                    <h3 className='text-center'>Team Website</h3>
                                    <ul>
                                        <li>Bazrira Noerfirdiansyah</li>
                                        <li>Muhammad Haidir</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Media