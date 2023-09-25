import { CalendarIcon } from "@radix-ui/react-icons";

interface TypeCardQualification {
  title: string;
  subtitle: string;
  year: string;
}
export function CardQualification({ title, subtitle, year }: TypeCardQualification) {
  return (
    <div className="w-full max-w-[200px] h-[150px] border border-gray-250 rounded-[10px]  flex flex-col justify-between py-[10px] px-[10px]">
      <p className="w-20 font-semibold text-sm text-gray-650" >{title}</p>
      <div>
        <span className="font-medium text-sm">{subtitle}</span>
        <div className="flex items-center text-gray-650 gap-[5px]">
          <CalendarIcon className="w-[15px] h-[15px]" />
          <span className="font-normal text-xs">{year}</span>
        </div>
      </div>

    </div >
  )
}
