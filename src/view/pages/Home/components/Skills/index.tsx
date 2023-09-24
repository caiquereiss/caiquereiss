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
    <div className="w-full h-full  flex flex-col text-center">
      <section className="flex flex-col gap-8">
        <div>
          <h1 className="font-semibold text-3xl  text-gray-350">Skills</h1>
          <p className="text-sm font-medium text-gray-650">Meu nível técnico</p>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-base  text-gray-350">FullStack Developer</span>
          <small className="text-sm font-medium text-gray-650">Mais de 2 anos</small>
        </div>
      </section>

      <section className="flex gap-10 mt-11 justify-center items-center flex-wrap px-8 md:px-32">
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
