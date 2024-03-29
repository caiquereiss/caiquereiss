import { MockSkills } from "../../../../../Mocks/MockSkills";
import { TypeIconSkill } from "../../../../components/icons/TypeIconSkill";
import CardSkill from "../CardSkills";


interface SkillsType {
  id: number,
  icon: React.FC<TypeIconSkill>,
  name: string,
  color: string;

}
export function Skills() {
  return (
    <div id="skills" className="w-full h-full mt-16 flex flex-col text-center">
      <section className="flex flex-col gap-8">
        <div>
          <h1 className="font-semibold text-[32px]  text-indigo-250 ">Skills</h1>
          <p className="text-sm font-medium text-gray-650 dark:text-gray-100">Meu nível técnico</p>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-base  text-gray-350 dark:text-gray-100">FullStack Developer</span>
          <small className="text-sm font-medium text-gray-650 dark:text-gray-100">Mais de 2 anos</small>
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-8 md:gap-10 px-4 mt-11  md:px-32    ">
        {
          MockSkills.map(({ id, icon, name, color }: SkillsType) => (
            <CardSkill
              key={id}
              icon={icon}
              name={name}
              color={color}
            />
          ))
        }
      </section>
    </div >

  )
}
