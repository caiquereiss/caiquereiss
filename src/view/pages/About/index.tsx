import { RocketIcon, HomeIcon, ArchiveIcon, FileIcon, BackpackIcon } from "@radix-ui/react-icons";
import { useState } from "react"
import { cn } from "../../../app/utils/cn"
import { CardQualification } from "./components/Card/CardQualification"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { useWindowWidth } from "../../../app/hooks/useWindowWidth"
import { SliderNavigation } from "./components/SliderNavigation"


export function About() {
  const windowWidth = useWindowWidth();
  const [selectedTab, setSelectedTab] = useState<'education' | 'work'>('education');
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })
  return (
    <div className="w-full h-full py-16 px-8">
      <section>
        <h1 className="font-semibold text-3xl text-indigo-250 text-left">Sobre</h1>
        <p className="font-medium text-sm text-gray-650 text-left lg:w-[740px] ">Desenvolvedor web apaixonado em  resolver problemas com código. Atuando com tecnologias web/mobile, entregando um trabalho de qualidade.</p>
      </section>

      <section className="flex mt-3">
        <div className="h-[150px] w-[200px] flex justify-around flex-col ">
          <RocketIcon className="text-gray-350 w-5 h-5" />
          <p className="w-20 flex gap-5 flex-col-reverse md:flex-row">
            <span className="font-medium text-sm text-gray-350">Anos experiência</span>
            <span className="font-bold text-3xl text-gray-350 flex items-end">2</span>
          </p>
        </div>

        <div className="h-[150px] w-[200px] flex justify-around flex-col">
          <ArchiveIcon className="text-gray-350 w-5 h-5" />
          <p className="w-20 flex gap-5 flex-col-reverse md:flex-row">
            <span className="font-medium text-sm text-gray-350">Projetos concluídos</span>
            <span className="font-bold text-3xl text-gray-350 flex items-end">5</span>
          </p>
        </div>

        <div className="h-[150px] w-[200px] flex justify-around flex-col">
          <HomeIcon className="text-gray-350 w-5 h-5" />
          <p className="w-20 flex gap-5 flex-col-reverse md:flex-row">
            <span className="font-medium text-sm text-gray-350">Empresas trabalhadas</span>
            <span className="font-bold text-3xl text-gray-350 flex items-end">2</span>
          </p>
        </div>
      </section>

      <section>

        <div className="mt-20">
          <span className="font-semibold text-3xl text-indigo-250 mr-2">Qualificações</span>
          <small className="font-medium text-gray-650 text-xs ">Minha jornada pessoal</small>

          <div className="w-full flex gap-10 mt-5 ">
            <button className={cn(
              'flex items-center justify-center gap-1 text-gray-350 ',
              selectedTab === 'education' && 'text-indigo-250'
            )}
              onClick={() => setSelectedTab('education')}>
              <FileIcon className="w-5 h-5" />
              <span className="font-semibold text-base ">Educação</span>
            </button>

            <button
              className={cn(
                'flex items-center justify-center gap-1 text-gray-350 ',
                selectedTab === 'work' && 'text-indigo-250'
              )}
              onClick={() => setSelectedTab('work')}>
              <BackpackIcon className="w-5 h-5" />
              <span className="font-semibold text-base ">Trabalho</span>
            </button>
          </div>
          <hr className="border mt-2 border-gray-250 " />
        </div>


        <div>
          {selectedTab === 'education' && (

            <Swiper className="relative"
              spaceBetween={16}
              slidesPerView={windowWidth >= 540 ? 4 : 1.6}
              onSlideChange={swiper => {
                setSliderState({
                  isBeginning: swiper.isBeginning,
                  isEnd: swiper.isEnd
                })
              }}
            >
              <div slot="container-start">
                <SliderNavigation
                  isBeginning={sliderState.isBeginning}
                  isEnd={sliderState.isEnd}
                />
              </div>
              <SwiperSlide >
                <CardQualification
                  title="Sistema de informação"
                  subtitle="Vitória - Unisales"
                  year="2018 - 2022"
                />
              </SwiperSlide>
              <SwiperSlide >
                <CardQualification
                  title="Sistema de informação"
                  subtitle="Vitória - Unisales"
                  year="2018 - 2022"
                />
              </SwiperSlide>
              <SwiperSlide >
                <CardQualification
                  title="Sistema de informação"
                  subtitle="Vitória - Unisales"
                  year="2018 - 2022"
                />
              </SwiperSlide>
              <SwiperSlide >
                <CardQualification
                  title="Sistema de informação"
                  subtitle="Vitória - Unisales"
                  year="2018 - 2022"
                />
              </SwiperSlide>
              <SwiperSlide >
                <CardQualification
                  title="Sistema de informação"
                  subtitle="Vitória - Unisales"
                  year="2018 - 2022"
                />
              </SwiperSlide>
            </Swiper>


          )}
          {selectedTab === 'work' && (
            // <CardQualification
            //   title="Consys Vgm"
            //   subtitle="Vila Velha - Es"
            //   year="2017 - 2022"
            // />
            <Swiper className="relative"
              spaceBetween={16}
              slidesPerView={windowWidth >= 540 ? 4 : 1.6}
              onSlideChange={swiper => {
                setSliderState({
                  isBeginning: swiper.isBeginning,
                  isEnd: swiper.isEnd
                })
              }}
            >
              <div slot="container-start">
                <SliderNavigation
                  isBeginning={sliderState.isBeginning}
                  isEnd={sliderState.isEnd}
                />
              </div>
              <SwiperSlide >
                <CardQualification
                  title="Sistema de informação"
                  subtitle="Vitória - Unisales"
                  year="2018 - 2022"
                />
              </SwiperSlide>
              <SwiperSlide >
                <CardQualification
                  title="Sistema de informação"
                  subtitle="Vitória - Unisales"
                  year="2018 - 2022"
                />
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </section >
    </div >
  )
}
