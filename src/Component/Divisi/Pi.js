import presidium2020 from '../../assets/image/PI/PI - MILZAM ELKARAMI BAHAR.jpg'
import presidium2021 from '../../assets/image/PI/PI - NICO.jpg'
import presidium2022 from '../../assets/image/PI/PI - ARYO.jpg'
import bendahara1 from '../../assets/image/PI/PI - ASRI NURAINI.jpg'
import bendahara2 from '../../assets/image/PI/PI - PUTRI RAHMA DAMAYANTI.jpg'
import sekertaris1 from '../../assets/image/PI/PI - AIDA FITRIA.jpg'
import sekertaris2 from '../../assets/image/PI/PI - DELLA NUR HARTANTI.jpg'
import CPI from './cardPi'
import CPI2 from './cardPi2'
import { useEffect } from 'react';
import aos from 'aos'
import 'aos/dist/aos.css'

const Pi = () => {
    useEffect(()=>{
      aos.init({duration: 2000})
    },[]);
    return(
        <div>
          <div>
            <h3>Anggota</h3>
            <p>Kenalan dulu yuk sama anggota-anggota nya Pengurus Internal KARIB</p>
            <div className="Anggota-section col-lg-10 m-auto"  data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
            <div className='cardPI'>
                <img src ={presidium2020} alt="img"/>
            </div>
            <div className='cardPI'>
                <img src ={presidium2021} alt="img" />
            </div>
            <div className='cardPI'>
                <img src ={presidium2022} alt="img" />
            </div>
            </div>
            <div className="Anggota-section col-lg-10 m-auto mt-4"  data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="5000">            
                <div className='cardPI'>
                    <img src ={bendahara1} alt="img" />
                </div>
                <div className='cardPI'>
                    <img src ={bendahara2} alt="img" />
                </div>
                <div className='cardPI'>
                    <img src ={sekertaris1} alt="img" />
                </div>
                <div className='cardPI'>
                    <img src ={sekertaris2} alt="img" />
                </div>
            </div>
            <div className='col-lg-10 m-auto mt-4 py-4'>
                <h3>Tugas dan Fungsi</h3>
                <div className='Anggota-section flex-wrap'>   
                    <div className='mt-4 col-sm-12 col-lg-6'>
                        <CPI title='Ketua Presidium'
                        misi1='Memimpin Kepengurusan selama periode yang sudah ditentukan oleh kesepakatan musyawarah dan AD/ART.'
                        misi2='Penentu kebijakan kepengurusan secara keseluruhan.'
                        misi3='Puncak koordinasi antar divisi dan kepengurusan.'
                        misi4='Bertanggung jawab atas seluruh kegiatan kepengurusan.'/>
                    </div>
                    <div className='mt-4 col-sm-12 col-lg-6'>
                        <CPI title='Wakil Presidium'
                        misi1='Memimpin Kepengurusan selama periode yang sudah ditentukan oleh kesepakatan musyawarah dan AD/ART.'
                        misi2='Sebagai acting Ketua Presidium apabila Ketua Presidium berhalangan.'
                        misi3='Supervisi antar seluruh divisi dan kepengurusan.'
                        misi4='Memberikan masukan kepada Ketua Presidium.'/>
                    </div>
                    <div className='mt-4 col-sm-12 col-lg-6'>
                        <CPI2 title='Bendahara'
                        misi1='Menjalankan Kepengurusan selama periode yang sudah ditentukan oleh kesepakatan musyawarah dan AD/ART.'
                        misi2='Sebagai pimpinan kebendaharaan kepengurusan.'
                        misi3='Hal-hal yang terkait dengan pendanaan dan Kas.'
                        misi4='Sebagai penyambung antara Divisi dan Presidium.'
                        misi5='Memberi masukan kepada Ketua Presidium.'/>
                    </div>
                    <div className='mt-4 col-sm-12 col-lg-6'>
                        <CPI2 title='Sekertaris'
                        misi1='Menjalankan Kepengurusan selama periode yang sudah ditentukan oleh kesepakatan musyawarah dan AD/ART.'
                        misi2='Sebagai pimpinan kesekertariatan kepengurusan.'
                        misi3='Hal-hal yang terkait dengan surat menyurat dan legalitas.'
                        misi4='Sebagai penyambung antara Divisi dan Presidium.'
                        misi5='Memberi masukan kepada Ketua Presidium.'/>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
export default Pi