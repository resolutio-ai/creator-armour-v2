import Image from 'next/image';
import { FC } from 'react';
import logo from "../../../public/landingpage/logo-with-text.svg"
import { AiFillDiscord, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';

const Footer: FC = () => {
    return (
        <footer className='footer flex flex-col bg-black p-5 md:p-10 text-neutral-content'>
            <div className='flex w-full flex-col items-center gap-5 md:flex-row'>
                <aside className='flex-0 '>
                    <Image
                        src={logo}
                        alt='resolution logo'
                        width={200}
                        height={50}
                    />
                </aside>
                <div className='flex-1 text-center text-sm md:text-lg lg:text-2xl  text-white'>
                    {"Want to learn more ? Let's talk."}
                </div>
                <nav className='flex-0 justify-end'>
                    <div className='grid grid-flow-col gap-4 '>
                        <a
                            target='_blank'
                            rel='noopener'
                            href='https://www.instagram.com/resolutio_art/'
                            title='Resolutio Instagram'
                        >
                            <AiFillInstagram className="text-white text-[2rem]" />
                        </a>
                        <a
                            target='_blank'
                            rel='noopener'
                            href='https://discord.gg/24my5DbuS9'
                            title='Resolutio Discord'
                        >
                            <AiFillDiscord className="text-white text-[2rem]" />                          
                        </a>
                        <a
                            target='_blank'
                            rel='noopener'
                            href='https://twitter.com/resolutio_art'
                            title='Resolutio Twitter'
                        >
                            <AiFillTwitterCircle className="text-white text-[2rem]" />
                        </a>
                        <a
                            target='_blank'
                            rel='noopener'
                            href='https://www.linkedin.com/company/dec-resolutio/'
                            title='Resolutio Linkedin'
                        >
                            <AiFillLinkedin className="text-white text-[2rem]" />
                            
                        </a>
                        <a
                            target='_blank'
                            rel='noopener'
                            href='mailto:resolutio.zs@gmail.com'
                            title='Resolutio Mail'
                        >
                            <AiFillMail className="text-white text-[2rem]" />
                        </a>
                    </div>
                </nav>
            </div>

            <aside className='flex w-full flex-row justify-center'>
                <p className='justify-center text-xs md:text-sm lg:text-md mt-4 text-center  text-white'>
                    resolutio © Copyright {new Date().getFullYear()}. All Rights
                    Reserved.
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
