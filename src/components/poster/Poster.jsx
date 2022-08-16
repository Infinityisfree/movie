import { Swiper, SwiperSlide } from 'swiper/react';
import './Poster.css'
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Poster(props) {

    const {movies, index}= props;

    // console.log(movie);

    const divStyle = {
        color: '#fff',
        backgroundImage: 'url(https://image.tmdb.org/t/p/original' + movies[index].backdrop_path + ')',
      };

  return (
    <div className="Poster" style={divStyle}>
        <div className='Poster-dark'>
            <div className='Container'>
                <div className='Poster-content'>
                    <span className='Poster-title'>{movies[index].original_title}</span>
                    <p className='Poster-description'>{movies[index].overview}</p>
                    <div className='Poster-data'><span className='Poster-data-title'>Release date:</span> <span className='Poster-data-accent'>{movies[index].release_date}</span></div>
                    <div className='Poster-data'><span className='Poster-data-title'>Rating:</span> <span className='Poster-data-accent'>{movies[index].vote_average}</span></div>
                    <div className='Poster-data'><span className='Poster-data-title'>Vote count:</span> <span className='Poster-data-accent'>{movies[index].vote_count}</span></div>
                    
                    <div className='Poster-carusel'>
                    <Swiper  loop = {true} modules={[Navigation]} navigation spaceBetween={60} slidesPerView={5}>

                        {movies.map((movie, index) => (

                            <SwiperSlide key={index}>
                                <div className='Poster-element'>
                                    <img className='Poster-img' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ movie.poster_path} alt=''/>
                                    <div className='Poster-average'>{movie.vote_average}</div>
                                </div>
                            </SwiperSlide> 

                        ))}

                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </div>
  );
}

export default Poster;