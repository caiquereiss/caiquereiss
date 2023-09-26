import { RocketIcon, HomeIcon, ArchiveIcon, FileIcon, BackpackIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { cn } from "../../../../../app/utils/cn";
import { SliderNavigation } from "../SliderNavigation";
import { CardQualification } from "../Card/CardQualification";
import { AsidePerfil } from "../../../../components/AsidePerfil";
import { useAboutController } from "./useAboutController";




export function About() {
  const { windowWidth,
    selectedTab,
    setSelectedTab,
    sliderState,
    setSliderState } = useAboutController()
  return (
    <div id="about" className="w-full h-full flex flex-col md:flex-row">
      <div className="w-full h-full md:w-[25%] mt-16 md:mt-0">
        <AsidePerfil />
      </div>
      <div className="w-full  md:w-[75%]  mt-28  px-8">
        <section>
          <h1 className="font-semibold text-[32px] text-indigo-250 text-left">Sobre</h1>
          <p className="font-medium text-sm text-gray-650 text-left lg:w-[740px] dark:text-gray-100">Desenvolvedor web apaixonado em  resolver problemas com código. Atuando com tecnologias web/mobile, entregando um trabalho de qualidade.</p>
        </section>

        <section className="flex mt-3">
          <div className="h-[150px] w-[200px] flex justify-around flex-col">
            <RocketIcon className="text-gray-350 w-5 h-5 dark:text-gray-100" />
            <p className="w-20 flex gap-5 flex-col-reverse md:flex-row ">
              <span className="font-medium text-sm text-gray-350 dark:text-gray-100">Anos experiência</span>
              <span className="font-bold text-3xl text-gray-350 flex items-end dark:text-gray-100">2</span>
            </p>
          </div>

          <div className="h-[150px] w-[200px] flex justify-around flex-col">
            <ArchiveIcon className="text-gray-350 w-5 h-5 dark:text-gray-100" />
            <p className="w-20 flex gap-5 flex-col-reverse md:flex-row">
              <span className="font-medium text-sm text-gray-350 dark:text-gray-100">Projetos concluídos</span>
              <span className="font-bold text-3xl text-gray-350 flex items-end dark:text-gray-100">5</span>
            </p>
          </div>

          <div className="h-[150px] w-[200px] flex justify-around flex-col">
            <HomeIcon className="text-gray-350 w-5 h-5 dark:text-gray-100" />
            <p className="w-20 flex gap-5 flex-col-reverse md:flex-row">
              <span className="font-medium text-sm text-gray-350 dark:text-gray-100">Empresas trabalhadas</span>
              <span className="font-bold text-3xl text-gray-350 flex items-end dark:text-gray-100">2</span>
            </p>
          </div>
        </section>

        <section>

          <div className="mt-20">
            <span className="font-semibold text-[32px] text-indigo-250 mr-2 ">Qualificações</span>
            <small className="font-medium text-gray-650 text-xs dark:text-gray-100">Minha jornada pessoal</small>

            <div className="w-full flex gap-10 mt-5 ">
              <button className={cn(
                'flex items-center justify-center gap-1 text-gray-350 dark:text-gray-100',
                selectedTab === 'education' && 'text-indigo-250 dark:text-indigo-250'
              )}
                onClick={() => setSelectedTab('education')}>
                <FileIcon className="w-5 h-5" />
                <span className="font-semibold text-base ">Educação</span>
              </button>

              <button
                className={cn(
                  'flex items-center justify-center gap-1 text-gray-350 dark:text-gray-100 ',
                  selectedTab === 'work' && 'text-indigo-250 dark:text-indigo-250'
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
                    className="gap-1 mb-1 mt-1"
                    isBeginning={sliderState.isBeginning}
                    isEnd={sliderState.isEnd}
                    positionButton="top"
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
                    title="Gostack - Bootcamp"
                    subtitle="EAD - RocketSeat"
                    year="2018 - 2019"
                  />
                </SwiperSlide>
                <SwiperSlide >
                  <CardQualification
                    title="Discover"
                    subtitle="EAD - RocketSeat"
                    year="2019 - 2019"
                  />
                </SwiperSlide>
                <SwiperSlide >
                  <CardQualification
                    title="Ignite - Node"
                    subtitle="EAD - RocketSeat"
                    year="2020 - 2020"
                  />
                </SwiperSlide>
                <SwiperSlide >
                  <CardQualification
                    title="JStack - FullStack"
                    subtitle="EAD - Matheus Silva"
                    year="2022 - 2023"
                  />
                </SwiperSlide>
                <SwiperSlide >
                  <CardQualification
                    title="Web Moderno"
                    subtitle="EAD - Cod3er"
                    year="2022 - 2023"
                  />
                </SwiperSlide>
                <SwiperSlide >
                  <CardQualification
                    title="Mundo Figma"
                    subtitle="EAD - Mundo Figma"
                    year="2022 - 2023"
                  />
                </SwiperSlide>
              </Swiper>


            )}
            {selectedTab === 'work' && (
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
                    positionButton="top"
                  />
                </div>
                <SwiperSlide >
                  <CardQualification
                    title="Desenvolvedor FullStack/Mobile"
                    subtitle="Vitória - MitoGames"
                    year="2022 - ..."
                  />
                </SwiperSlide>

                <SwiperSlide >
                  <CardQualification
                    title="Técnico de Informática"
                    subtitle="Vila Velha - VGM-Consys"
                    year="2019 - 2022"
                  />
                </SwiperSlide>
                <SwiperSlide >
                  <CardQualification
                    title="Estagio Suporte técnico"
                    subtitle="Vila Velha - VGM-Consys"
                    year="2018 - 2019"
                  />
                </SwiperSlide>
              </Swiper>
            )}
          </div>
        </section >
      </div>
    </div >
  )
}
