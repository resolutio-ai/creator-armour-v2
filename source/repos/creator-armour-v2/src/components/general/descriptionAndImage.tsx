import { PrimaryButton } from "../evidence/button";
import Image from "next/image"


export default function DescriptionAndImage({
    headerText,
    subText,
    buttonText,
    buttonUrl,
    isExternal,
    imageSrc,
    imageAlt,
    reverseDirection
}: { headerText: string, subText: string, buttonText: string, buttonUrl: string, isExternal?: boolean, imageSrc: string, imageAlt: string, reverseDirection?: boolean, isGif?: boolean, author?: { name: string, artName: string, profileLink: string }, showAuthor?: boolean }) {
    return (
        <section className={`w-full md:flex ${reverseDirection ? "flex-row-reverse" : ""}`}>
            <section className="flex flex-col gap-3 p-[1.5rem] md:p-[3rem] md:w-[50%] justify-center">
                <h1 className="text-[2.3rem] lg:text-[3.2rem] font-[montserrat] font-[700] text-secondary leading-[1.1]">{headerText}</h1>
                <p className="text-[1.2rem] text-tertiary">{subText}</p>
                <PrimaryButton text={buttonText} disabled={false} link={buttonUrl} isExternal={isExternal} className="w-fit text-[0.87rem] hover:bg-primary hover:text-white px-4 py-2" />
            </section>
            <section className="md:w-[50%]">
                <Image src={imageSrc} alt={imageAlt} width={500}
                    height={500} className="h-full w-full object-cover" />
            </section>
        </section>
    )
}