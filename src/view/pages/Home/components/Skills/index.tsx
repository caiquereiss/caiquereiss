import { MockSkills } from "../../../../../Mocks/mock";
import CardSkill from "../CardSkills";


interface SkillsType {
  id: number,
  tech: string,
  progress: number,
  color: string;

}
export function Skills() {
  const skills = MockSkills;


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

      <section className="flex gap-10 mt-11 justify-center items-center flex-wrap">
        {
          skills.map(({ id, tech, progress, color }: SkillsType) => (
            <CardSkill
              key={id}
              tech={tech}
              progress={progress}
              color={color}
            />
          ))
        }
      </section>

    </div >
  )
}
