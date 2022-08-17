import './App.css';
import Navbar from './Component/Navigationbar'
import "./Style/landingPage.css"
import aos from 'aos'
import 'aos/dist/aos.css'
import Card from './Component/Card'
import TOR from '../src/assets/image/Aktifitas/TOR.png'
import HB from '../src/assets/image/Aktifitas/halbil.jpg'
import Media from '../src/assets/image/Aktifitas/media.jpeg'
import KA from '../src/assets/image/Aktifitas/kajian Akhwat.jpg'
import bisnis from '../src/assets/image/Aktifitas/bisnis.jpeg'
import TentangKami from './Component/tentangKami/cardAbout'
import VisiMisi from './Component/tentangKami/cardVisiMisi'
import Misi from './Component/tentangKami/cardMisi'
import ScrollToTop from './Component/scrolltoTop'
import { useEffect } from 'react';
import PI from './Component/Divisi/Pi'
import Bisnis from './Component/Divisi/Bisnis'
import Mediv from './Component/Divisi/Media'
import Psdm from './Component/Divisi/Psdm'
import Sosial from './Component/Divisi/Sosial'
import Syiar from './Component/Divisi/Syiar'
import Hub from './Component/hubungiKami'

const App = () => {
  useEffect(()=>{
    aos.init({duration: 2000})
  },[]);
  return (
    <div className='MyBg'>
      <div>
        <Navbar />
        <div className='intro' id='intro'>
          <div className='text-center'>
              <h1  data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="5000">SELAMAT DATANG DI KARIB</h1>
              <h3 data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="5000">BERSAHABAT DALAM TAAT</h3>
          </div>
        </div>
        <div id='tentangkami'>
            <h1 className='text-center'>Tentang Kami</h1>
            <div className='col-lg-10 m-auto py-4' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
              <TentangKami tentang1="KARIB atau disebut juga Keluarga Remaja Islam BSD adalah forum remaja muslim yang berdomisili di BSD, Serpong, Tangerang Selatan dan merupakan forum dakwah remaja islam yang menginduk kepada Forum Masjid Musala BSD dan sekitarnya ." 
              tentang2="FMMB sendiri merupakan wadah dari masjid dan Musala se-BSD yg tergabung di dalamnya selitar 70 Masjid dan Musala ."
              tentang3='KARIB - FMMB memiliki visi yang sejalan dengan Forum Masjid Musala BSD dan sekitarnya, yaitu mewujudkan BSD atau Tangerang Selatan menjadi Kota Santri.'
              tentang4='Dengan berlandaskan kepada Al Quran kariim dan dengan semangat ukhuwah islamiyah, KARIB - FMMB senantiasa hadir dalam perjuangan dakwah remaja islam di Tangerang Selatan pada umumnya,  khususnya di wilayah BSD dan sekitarnya .'
              />

            </div>
            <div className='d-flex flex-wrap justify-content-center col-12'>
              <div className='col-sm-12 col-md-6 col-lg-4 ' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <VisiMisi title="Visi" 
                li1="Mensyiarkan Islam dikalangan umat Islam dan remaja/ pemuda pada khususnya."
                li2="Menjalin rasa kekeluargaan antar sesama anggota."
                li3="Membina dan meningkatkan peran umat Islam dalam kegiatan sosial kemasyarakatan menuju masyarakat Islami / BSD KOTA SANTRI."
              />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-4 ' data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <Misi title="Misi" 
                misi1="Menambah ilmu dan wawasan keislaman bagi pribadi dan organisasi."
                misi2="Melakukan kegiatan sosial kemasyarakatan dalam rangka menumbuhkan kepekaan dan kepedulian sosial."
                misi3="Mengajak Pemuda dan Remaja muslim untuk turut serta dalam memakmurkan masjid."
                misi4="Membekali pemuda dan Remaja dengan kajian keislaman."
              />
              </div>
            </div>
            <div className='col-lg-10 d-flex m-auto pt-4' data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
                <Misi title="Tujuan" 
                misi1="Mensyiarkan Islam dikalangan umat Islam dan remaja/ pemuda pada khususnya."
                misi2="Menjalin rasa kekeluargaan antar sesama anggota dan bekerja sama dengan organisasi lain."
                misi3="Membina dan meningkatkan peran umat Islam dalam kegiatan sosial kemasyarakatan menuju masyarakat Islami"
                misi4="KARIB-FMMB sejalan dengan tujuan dari Forum Masjid Musala BSD dan sekitarnya, yaitu bertujuan menciptakan masyarakat BSD Kota Santri. SANTRI adalah pelajar yang ber-aqidah Ahlusunnah Wal Jamaah."
              />
            </div>
        </div>
        <div id='aktivitas' className='d-flex flex-wrap justify-content-center align-items-center text-center'>
          <h1>Aktivitas</h1>
            <div className='d-flex flex-wrap justify-content-center align-items-center text-center col-12'data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="5000">
              <Card classname="col-sm-8 col-lg-4 margin-top"  image={bisnis} title="Mindset Saudagar" description="Salah satu program kerja Divisi Bisnis di bulan Ramadhan, dengan mengadakan Sharing Bussiness Ramadhan yang berjudul Mindset Saudagar oleh Pemateri Kak Widya Pramusetyo dan Moderator Kak Adam Bijai ."/>
              <Card classname="col-sm-8 col-lg-4"  image={Media} title="Syuting konten dakwah" description="Salah satu program kerja Divisi Media Komunikasi dalam rangka membuat konten dakwah : Kultum Ramadhan."/>
              <Card classname="col-sm-8 col-lg-4"  image={HB} title="Halal Bihalal" description="Salah satu program kerja Divisi Pemberdayaan Sumber Daya Manusia (PSDM) dalam rangka menyambut Hari Raya Idul Fitri 1443 H, dengan kegiatan halal bilahal dan silaturahmi seluruh pengurus KARIB di rumah pencetus KARIB, yaitu Rumah Bapak Dr. M. Taufik,  CH"/>
              <Card classname="col-sm-8 col-lg-4" image={TOR} title="Takjil On The Road" description="Salah satu program kerja Divisi Sosial dalam rangka berbagi 1000 takjil di bulan Ramadhan yang dilaksanakan di wilayah BSD, Alam Sutera, dan Sekitarnya" />
              <Card classname="col-sm-8 col-lg-4 margin-top"  image={KA} title="Kajian Akhwat" description="Salah satu program kerja Divisi Syiar dan Keilmuan, dalam rangka memberikan ilmu pranikah khusus untuk Akhwat dengan mengadakan kegiatan Kajian Akhwat bersama Ratu Anandita dan Ustadzah Yolanda."/>
            </div>
        </div>
        <div id='PI' className='text-center py-4'>
           <h1>Pengurus Internal</h1>
           <PI />
        </div>
        <div id="Bisnis">
            <h1 className='text-center'>Bisnis</h1>
            <Bisnis />
        </div>
        <div id='Media'>
            <h1 className='text-center'>Media</h1>
            <Mediv />
        </div>
        <div id='PSDM'>
            <h1 className='text-center'>PSDM</h1>
            <Psdm />
        </div>
        <div id='Sosial'>
            <h1 className='text-center'>Sosial</h1>
            <Sosial />
        </div>
        <div id='Syiar'>
            <h1 className='text-center'>Syiar</h1>
            <Syiar />
        </div>
        <div id='hubungikami'>
            <h1 className='text-center'>Hubungi Kami</h1>
            <Hub />
        </div>
        <div className='mt-4 text-center text-small'>
          <p>KARIB Official - Tangerang Selatan BSD</p>
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
