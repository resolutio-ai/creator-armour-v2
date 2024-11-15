import { PrimaryButton } from "../evidence/button";

export default function TextDescriptor({
    headerText,
    subText,
    buttonText,
    buttonUrl,
    isExternal,
}: { headerText: string, subText: string, buttonText: string, buttonUrl: string, isExternal?: boolean }) {
    return (
        <section className="flex flex-col bg-[#f4f4f4] gap-3 py-[2.6rem] px-[1.5rem] md:px-[3.5rem] md:py-[4.5rem] justify-center">
            <h1
                className="text-[2rem] lg:text-[3rem] font-[montserrat] font-[700] text-primary leading-[1.1]">
                {headerText}
            </h1>
            <p className="text-[1.2rem] text-tertiary">
                {subText}
            </p>
            <PrimaryButton
                text={buttonText}
                disabled={false}
                link={buttonUrl}
                isExternal={isExternal}
                className="w-fit text-[0.87rem] bg-[#FFCA70] hover:bg-primary hover:text-white px-4 py-2"
            />
        </section>
    )
}