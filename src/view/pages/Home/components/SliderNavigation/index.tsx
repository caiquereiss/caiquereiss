import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";
import { cn } from "../../../../../app/utils/cn";


interface SliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
  className?: string;
  positionButton: 'top' | 'center'
}
export function SliderNavigation({ isBeginning, isEnd, className, positionButton = 'top' }: SliderNavigationProps) {
  const swiper = useSwiper();
  return (
    <div className={cn(
      'flex justify-end',
      className
    )}>
      {
        positionButton === 'top' && (
          <>
            <button
              className="py-3 pl-2.5 pr-3.5 rounded-full  bg-gradient-to-r from-gray-100 dark:from-violet-950 to-transparent flex items-center justify-center z-10 enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
              onClick={() => swiper.slidePrev()}
              disabled={isBeginning}
            >
              <ChevronLeftIcon className="text-gray-650 w-6 h-6" />
            </button>
            <button
              className=" py-3 pl-2.5 pr-3.5 rounded-full bg-gradient-to-r from-gray-100 dark:from-violet-950 to-transparent flex items-center justify-center z-10 enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
              onClick={() => swiper.slideNext()}
              disabled={isEnd}
            >
              <ChevronRightIcon className="text-gray-650 w-6 h-6" />
            </button>
          </>
        )
      }

      {
        positionButton === 'center' && (
          <>
            <button
              className="absolute  left-0 top-[40%] md:top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-gray-100 dark:from-violet-950 to-transparent flex items-center justify-center z-10 enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
              onClick={() => swiper.slidePrev()}
              disabled={isBeginning}
            >
              <ChevronLeftIcon className="text-gray-650 w-6 h-6" />
            </button>
            <button
              className="absolute  right-0  top-[40%] md:top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-l from-gray-100 dark:from-violet-950 to-transparent flex items-center justify-center z-10 enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
              onClick={() => swiper.slideNext()}
              disabled={isEnd}
            >
              <ChevronRightIcon className="text-gray-650 w-6 h-6" />
            </button>
          </>
        )
      }
    </div>
  )
}
