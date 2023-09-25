
import ModernWeb from '../../../../../assets/modern-web.png'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { SliderNavigation } from '../SliderNavigation';
import { useState } from 'react';

export function Portfolio() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })
  return (
    <div id="portfolio" className="w-full h-full mt-16 flex flex-col text-center">
      <section className="flex flex-col gap-8">
        <div>
          <h1 className="font-semibold text-[32px] text-gray-350">Portfólio</h1>
          <p className="text-sm font-medium text-gray-650">Meu trabalho recente</p>
        </div>
      </section>


      <section>
        <Swiper className="relative"
          spaceBetween={16}
          slidesPerView={1}
          onSlideChange={swiper => {
            setSliderState({
              isBeginning: swiper.isBeginning,
              isEnd: swiper.isEnd
            })
          }}
        >

          <SliderNavigation
            // className='justify-between'
            isBeginning={sliderState.isBeginning}
            isEnd={sliderState.isEnd}
            positionButton='center'

          />

          <SwiperSlide>
            <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-4 mt-16 px-6">
              <div className="w-64 md:w-[428px] h-52 md:h-60 sm:ml-6 ">
                <img className='w-full h-full' src={ModernWeb} alt="" />
              </div>

              <div className="mt-8 flex flex-col gap-5 ">
                <h1 className="font-semibold text-2xl text-gray-350">Modern Website</h1>
                <p className="text-sm font-medium text-gray-650 text-center md:text-left">Website adaptable to all devices, with UI components and animated interactions</p>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </section>


    </div >

  )
}