import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { SliderNavigation } from '../SliderNavigation';
import ModernWeb from '../../../../../assets/modern-web.png'
import { usePortfolioController } from './usePortfolioController';
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function Portfolio() {
  const { sliderState, setSliderState } = usePortfolioController()
  return (
    <div id="portfolio" className="w-full h-full mt-16 flex flex-col text-center">
      <section className="flex flex-col gap-8">
        <div>
          <h1 className="font-semibold text-[32px] text-indigo-250">Portfólio</h1>
          <p className="text-sm font-medium text-gray-650 dark:text-gray-100">Meu trabalho recente</p>
        </div>
      </section>


      <section className="py-6">
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
            isBeginning={sliderState.isBeginning}
            isEnd={sliderState.isEnd}
            positionButton='center'

          />

          <SwiperSlide>
            <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-4 mt-16 px-6 ">
              <div className="w-64 md:w-[428px] h-52 md:h-60 sm:ml-6 ">
                <img className='w-full h-full' src={ModernWeb} alt="" />
              </div>

              <div className="mt-8 flex flex-col gap-5 ">
                <h1 className="font-semibold text-2xl text-gray-350 dark:text-gray-100">Modern Website</h1>
                <p className="text-sm font-medium text-gray-650 text-center md:text-left dark:text-gray-100">Website adaptable to all devices, with UI components and animated interactions</p>

                <div className="flex gap-5">
                  <a href="https://github.com/caiquereiss" target="_blank">
                    <GitHubLogoIcon className='w-[30px] h-[30px] text-indigo-250' />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </section>


    </div >

  )
}
