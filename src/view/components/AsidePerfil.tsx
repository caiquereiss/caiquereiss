

import CaiqueReis from '../../assets/caique-reis.jpeg';
import { LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Button } from './Button';
export function AsidePerfil() {
  return (
    <div className='w-full h-full  mb-12  relative top-8 md:top-32 '>
      <div className="flex w-[163px]  flex-col justify-center items-center gap-8 mx-auto my-0 ">
        <img className='w-[163px] h-[163px] object-cover rounded-full border-4 border-indigo-250' src={CaiqueReis} />

        <section className='w-full flex flex-col justify-center items-center font-semibold'>
          <h1 className='text-2xl text-indigo-250'>Caique Reis</h1>
          <span className='text-base mt-1'>FullStack Developer</span>
        </section>

        <section className='text-center'>
          <span className='text-gray-650 font-medium text-base text-center'>Expertise sólida em  desenvolvimento web/mobile, moldando a experiência digital.</span>
        </section>
      </div>

      <div className="flex w-[163px]  flex-col justify-center items-center gap-8 mx-auto my-0 mt-9 ">
        <section className='flex justify-center items-center gap-3'>
          <a href="https://www.linkedin.com/in/dosreiscaique/" target="_blank">
            <LinkedInLogoIcon className='w-[30px] h-[30px] text-indigo-250' />
          </a>
          <a href="https://github.com/caiquereiss" target="_blank">
            <GitHubLogoIcon className='w-[30px] h-[30px] text-indigo-250' />
          </a>
          <a href="https://www.instagram.com/caequereis/" target="_blank">
            <InstagramLogoIcon className='w-[30px] h-[30px] text-indigo-250' />
          </a>
          <a href="https://twitter.com/dosreiscaique" target="_blank">
            <TwitterLogoIcon className='w-[30px] h-[30px] text-indigo-250' />
          </a>
        </section>
        <a href="https://api.whatsapp.com/send?phone=27999814325" target="_blank" rel="noopener noreferrer">
          <Button className='bg-indigo-250 font-semibold text-base'>Contate-me</Button>
        </a>
      </div>
    </div>
  )
}
