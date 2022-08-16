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
        </div>
    )
}
export default Psdm