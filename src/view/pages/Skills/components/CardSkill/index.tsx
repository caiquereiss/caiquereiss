
import { cn } from "../../../../../app/utils/cn";
import { RocketIcon } from "@radix-ui/react-icons";


export default function CardSkill({ tech, progress, color }) {
  console.log(tech, progress, color)
  // const widthProgress = `w-[${progress}px]`;
  // const heightProgress = `h-[${progress}px]`;
  return (
    <div className="relative w-[130px] h-[130px] overflow-hidden p-[5px] rounded-[50%] border-[5px] border-solid"
      style={{ borderColor: color }}>
      <div className={cn(
        'wave-change-skills',
        // progress && `before:h-[${progress * 10}px] before:w-[${progress * 10}px]  after:h-[${progress * 10}px] after:w-[${progress * 10}px]`
        progress && `before:h-[${progress}px] before:w-${progress * 10}px after:h-${progress * 10}px after:w-${progress * 10}px`

      )}
      >
        <div className="absolute flex flex-col items-center -translate-x-2/4 -translate-y-2/4 text-4xl text-indigo-250 z-10 left-2/4 top-2/4">

          <RocketIcon className="w-[30px] h-[30px]" />

          <span className="font-semibold text-base text-gray-350">{tech}</span>
          <span className="font-semibold text-base text-gray-650">{progress}%</span>
        </div>
      </div>
      <div className="wave-skills"
        style={{ backgroundColor: color, }}></div>
    </div>

  )
}
