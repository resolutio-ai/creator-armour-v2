import Image from 'next/image';
import landingPageImage from "../../../public/landingpage/restricted.svg"

export default function RestrictedAccess() {
    return (
        <section className=' p-[8%] h-[85vh]'>
            <div className='m-auto w-[70%] h-[70%] text-center'>
                <Image
                    src={landingPageImage}
                    alt='Restricted Access Image'
                    width={140}
                    height={140}
                    className='h-full w-full'
                />
                <p className='font-[700] text-[1.5rem] mt-4'>Restricted for early access pass holders. Apply for early access pass <a className="text-[#5c447e] underline" href='https://docs.google.com/forms/d/e/1FAIpQLSdFA8JiIw1Dnfmv8uRlnLnw8wSCiH3ENT7qO6I_pIMoTLaafQ/viewform' target='_blank'>here</a>.</p>
            </div> 
                       
        </section>
    );
};