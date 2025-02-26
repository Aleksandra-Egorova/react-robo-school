import { useRef } from 'react'; //импортирую хук useRef чтобы управлять кнопками со стрелками
import { Mousewheel, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';
import 'swiper/scss/mousewheel';

import teachers from '@/api/teachers.json'; //импортирую моковые данные
import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';
import { Container } from '@/components/container';
import { useWindowSize } from '@/hooks/useWindowSize';

import { TeacherItem } from './components/teacher-item';

import styles from './main-teachers.module.scss';

export const MainTeachers = () => {
  const { isMobile } = useWindowSize();
  // eslint-disable-next-line no-console
  console.log(isMobile);

  const swiperRef = useRef(null); //useRef не триггерить ререндер
  const initSwiper = (swiper) => (swiperRef.current = swiper);

  //общая функция для переключения слайдов вперед или назад
  const changeSlide = (direction) => {
    if (direction === 'prev') {
      swiperRef.current.slidePrev();
    } else if (direction === 'next') {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className={styles.teachers}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Профессиональные тренеры</h2>

          <div className={styles.items}>
            <Swiper
              modules={[Navigation, Scrollbar, Mousewheel]}
              spaceBetween={20}
              slidesPerView={isMobile ? 'auto' : 3} //сколько слайдов видно на странице вначале {3}
              navigation={{
                nextEl: styles.next,
                prevEl: styles.prev,
              }}
              scrollbar={{ draggable: true }}
              slidesPerGroup={isMobile ? 1 : 3}
              freeMode={true}
              mousewheel={{ releaseOnEdges: true }}
              onBeforeInit={initSwiper}
            >
              {teachers.map((teacher) => (
                <SwiperSlide key={teacher.id} className={styles.swiperSlide}>
                  <TeacherItem teacher={teacher} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={styles.swiperButtons}>
            <button className={styles.prev} onClick={() => changeSlide('prev')}>
              <ArrowLeftIcon />
            </button>
            <button className={styles.next} onClick={() => changeSlide('next')}>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
