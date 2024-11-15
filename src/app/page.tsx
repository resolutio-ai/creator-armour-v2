import DescriptionAndImage from "@/components/general/descriptionAndImage";
import houseOfMemory from "../../public/landingpage/house-of-memory-image.svg"
import tornMagazine from "../../public/landingpage/torn-newspaper-mashup.svg"
import indianMarketplace from "../../public/landingpage/indian-market.svg"
import liquidMemoirs from "../../public/landingpage/liquid-memories.svg"
import TextDescriptor from "@/components/general/textDescription";
import { landingPageData } from "@/data/adapter/CMS/settings/data.config";
import Blogs from "@/components/general/blogs";
import OurTeam from "@/components/general/team";

export default function Home() {
  const story = landingPageData.ourStory;
  const evidenceInfo = landingPageData.evidenceLink;
  const resolveDispute = landingPageData.resolveDispute;
  const community = landingPageData.community;
  const understandingYourRights = landingPageData.exploreYourRights;
  const eventsAndWorkshops = landingPageData.events;
  const lavendarCollection = landingPageData.lavenderLink;
  const blogs = landingPageData.blogs;

  return (
    <section className="mt-[6rem] md:[4rem]">

      <DescriptionAndImage
        headerText={story.heading ?? "the Idea came to you. Create it. Own it. Eternalise it."}
        subText={story.description ?? "making the Artist as Eternal as your Art."}
        buttonText={story.btnText ?? "Learn more"}
        buttonUrl={story.link ?? "www.resolutio.ai"}
        isExternal={true}
        imageAlt={"House Of Memory Image"}
        imageSrc={houseOfMemory}
      />

      <TextDescriptor
        headerText={evidenceInfo.heading ?? "the Idea came to you. Create it. Own it. Eternalise it."}
        subText={evidenceInfo.description ?? "making the Artist as Eternal as your Art."}
        buttonText={evidenceInfo.btnText ?? "Learn more"}
        buttonUrl={evidenceInfo.link ?? "www.resolutio.ai"}
        isExternal={evidenceInfo.isExternal ?? true}        
       />

      <DescriptionAndImage
        headerText={resolveDispute.heading ?? "Resolve your art dispute"}
        subText={resolveDispute.description ?? "resolve any creator dispute"}
        buttonText={resolveDispute.btnText ?? "Resolve"}
        buttonUrl={resolveDispute.link ?? "/evidence"}
        isExternal={false}
        imageAlt={resolveDispute.heading ?? "Torn Magazine Image"}
        imageSrc={resolveDispute.imageURL ?? tornMagazine}
        reverseDirection={resolveDispute.isExternal ?? true}
      />

      <TextDescriptor
        headerText={community.heading ?? "the Idea came to you. Create it. Own it. Eternalise it."}
        subText={community.description ?? "making the Artist as Eternal as your Art."}
        buttonText={community.btnText ??"Learn more"}
        buttonUrl={community.link ?? "www.resolutio.ai"}
        isExternal={community.isExternal ?? true}
      />
      
      <DescriptionAndImage
        headerText={understandingYourRights.heading ?? "Understand your rights"}
        subText={understandingYourRights.description ??  "Unlock the power of your IP Rights with our AI Bot! Get Answers. Protect Your Art"}
        buttonText={understandingYourRights.btnText ??  "Learn more"}
        buttonUrl={understandingYourRights.link ?? "/evidence"}
        isExternal={understandingYourRights.isExternal ?? false}
        imageAlt="Indian Market Place"
        imageSrc={understandingYourRights.imageURL ?? indianMarketplace}        
      />

      <DescriptionAndImage
        headerText="Resolve your art dispute"
        subText="resolve any creator dispute"
        buttonText="Resolve"
        buttonUrl="/evidence"
        isExternal={false}
        imageAlt="Natural Spring"
        imageSrc={liquidMemoirs}
        reverseDirection={true}
      />

      <DescriptionAndImage
        headerText={eventsAndWorkshops.heading ?? "Understand your rights"}
        subText={eventsAndWorkshops.description ?? "Unlock the power of your IP Rights with our AI Bot! Get Answers. Protect Your Art"}
        buttonText={eventsAndWorkshops.btnText ?? "Learn more"}
        buttonUrl={eventsAndWorkshops.link ?? "/evidence"}
        isExternal={eventsAndWorkshops.isExternal ?? false}
        imageAlt="Indian Market Place"
        imageSrc={eventsAndWorkshops.imageURL ?? indianMarketplace}
      />

      <TextDescriptor
        headerText={lavendarCollection.heading ?? "the Idea came to you. Create it. Own it. Eternalise it."}
        subText={lavendarCollection.description ?? "making the Artist as Eternal as your Art."}
        buttonText={lavendarCollection.btnText ?? "Learn more"}
        buttonUrl={lavendarCollection.link ?? "www.resolutio.ai"}
        isExternal={lavendarCollection.isExternal ?? true}
      />

      <Blogs {...blogs} />
      <OurTeam />
    </section>
  );
}
