import {Container, Row, Col} from 'react-bootstrap'
import './App.css';
import Navbar from './Component/Navigationbar'
import "./Style/landingPage.css"
import SlideShow from './Component/Slide'
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

const App = () => {
  return (
    <div className='MyBg'>
      <div>
        <Navbar />
        <div className='intro' id='intro'>
        </div>
        <div id='tentangkami' className='text-center'>
            <h1>Tentang Kami</h1>
            <div className='col-lg-10 m-auto py-4'>
              <TentangKami tentang1="KARIB adalah organisasi yang memiliki kepanjangan - KELUARGA REMAJA ISLAM BSD, FORUM MASJID DAN MUSHOLLA SE-BSD, yang selanjutnya disebut KARIB FMMB" 
              tentang2="KARIB FMMB didirikan pada 10 April 2011, yang berkedudukan dibawah asuhan FMMB khususnya Seksi Pemuda, Olahraga, dan Seni. KARIB FFMB berAsaskan Aqidah Ahlusunnah Wal Jamaah, yang bersifat kekeluargaan dan persaudaraan."/>
            </div>
            <div className='d-flex flex-wrap justify-content-center col-12'>
              <div className='col-sm-12 col-md-6 col-lg-4 '>
                <VisiMisi title="Visi" 
                li1="Mensyiarkan Islam dikalangan umat Islam dan remaja/ pemuda pada khususnya."
                li2="Menjalin rasa kekeluargaan antar sesama anggota."
                li3="Membina dan meningkatkan peran umat Islam dalam kegiatan sosial kemasyarakatan menuju masyarakat Islami / BSD KOTA SANTRI."
              />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-4 '>
                <Misi title="Misi" 
                misi1="Menambah ilmu dan wawasan keislaman bagi pribadi dan organisasi."
                misi2="Melakukan kegiatan sosial kemasyarakatan dalam rangka menumbuhkan kepekaan dan kepedulian sosial."
                misi3="Mengajak Pemuda dan Remaja muslim untuk turut serta dalam memakmurkan masjid."
                misi4="Membekali pemuda dan Remaja dengan kajian keislaman."
              />
              </div>
            </div>
            <div className='col-lg-10 d-flex m-auto pt-4'>
                <TentangKami title="Tujuan" 
                misi1="Mensyiarkan Islam dikalangan umat Islam dan remaja/ pemuda pada khususnya."
                misi2="Menjalin rasa kekeluargaan antar sesama anggota dan bekerja sama dengan organisasi lain."
                misi3="Membina dan meningkatkan peran umat Islam dalam kegiatan sosial kemasyarakatan menuju masyarakat Islami"
                misi4="KARIB-FMMB sejalan dengan tujuan dari Forum Masjid Musholla BSD dan sekitarnya, yaitu bertujuan menciptakan masyarakat BSD Kota Santri. SANTRI = pelajar yang ber-aqidah Ahlusunnah Wal Jamaah."
              />
            </div>
        </div>
        <div id='aktivitas' className='d-flex flex-wrap justify-content-center align-items-center text-center'>
          <h1>Aktivitas</h1>
            <div className='d-flex flex-wrap justify-content-center align-items-center text-center col-12'>
              <Card classname="col-sm-8 col-lg-4 margin-top"  image={bisnis} title="Mindset Saudagar" description="Salah satu program kerja Divisi Bisnis di bulan Ramadhan, dengan mengadakan Sharing Bussiness Ramadhan yang berjudul Mindset Saudagar oleh Pemateri Kak Widya Pramusetyo dan Moderator Kak Adam Bijai ."/>
              <Card classname="col-sm-8 col-lg-4"  image={Media} title="Syuting konten dakwah" description="Salah satu program kerja Divisi Media Komunikasi dalam rangka membuat konten dakwah : Kultum Ramadhan."/>
              <Card classname="col-sm-8 col-lg-4"  image={HB} title="Halal Bihalal" description="Salah satu program kerja Divisi Pemberdayaan Sumber Daya Manusia (PSDM) dalam rangka menyambut Hari Raya Idul Fitri 1443 H, dengan kegiatan halal bilahal dan silaturahmi seluruh pengurus KARIB di rumah pencetus KARIB, yaitu Rumah Bapak Dr. M. Taufik,  CH"/>
              <Card classname="col-sm-8 col-lg-4" image={TOR} title="Takjil On The Road" description="Salah satu program kerja Divisi Sosial dalam rangka berbagi 1000 takjil di bulan Ramadhan yang dilaksanakan di wilayah BSD, Alam Sutera, dan Sekitarnya" />
              <Card classname="col-sm-8 col-lg-4 margin-top"  image={KA} title="Kajian Akhwat" description="Salah satu program kerja Divisi Syiar dan Keilmuan, dalam rangka memberikan ilmu pranikah khusus untuk Akhwat dengan mengadakan kegiatan Kajian Akhwat bersama Ratu Anandita dan Ustadzah Yolanda."/>
            </div>
        </div>
        <div id='PI' className='text-center'>
           <h1>PI</h1>
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
