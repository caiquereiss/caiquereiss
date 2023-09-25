interface SkillsType {
  id?: number,
  icon: React.FC<React.SVGProps<SVGSVGElement>>,
  name: string,
  color: string;

}

export default function CardSkill({ icon: IconComponent, name, color }: SkillsType) {

  return (
    <div className="flex flex-col items-center">
      <IconComponent className="w-12 h-12 md:text-5xl text-4xl my-2 cursor-pointer"
        style={{ color: color }} />

      <p className="dark:text-gray-100">{name}</p>
    </div>

  )
}
