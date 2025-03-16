export const TEAM_FILE = "ourTeam.json";
export const BLOGS_FILE = "blogs.json";

export const LINK_WITH_IMAGE_FOLDER = "/link-with-image";
export const OUR_STORY_FILE = "ourStory.json";
export const EVENTS_WORKSHOPS_FILE = "eventsAndWorkshop.json";
export const RESOLVE_DISPUTE_FILE = "resolveDispute.json";
export const UNDERSTAND_YOUR_RIGHTS_FILE = "understandYourRights.json";

export const LINK_FOLDER = "/link";
export const COMMUNITY_LINK_FILE = "communityLink.json";
export const LAVENDER_LINK_FILE = "lavenderLink.json";
export const EVIDENCE_LINK_FILE = "evidenceLink.json";

export const MEDIUM_OPTIONS = [
  "Film",
  "Photo",
  "Music",
  "AI",
  "Art",
  "Other",
] as const;

export const DEFAULT_MEDIUM = "Select a Medium";

export const LICENSE_OPTIONS = [
  "CC BY",
  "CC BY-SA",
  "CC BY-NC",
  "CC BY-NC-SA",
  "CC BY-NC-ND",
  "resolution License",
  "Your own license",
] as const;

export const DEFAULT_LICENSE = "Select a License";

export const ACCEPTED_WORK_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const ACCEPTED_LICENSE_TYPES = ["application/pdf"];

export const landingPageData = {
  events: {
    heading: "Events & Workshops",
    description:
      "Embark on a creative journey with our workshops, demystifying the art of protection. Engage in exciting competitions that celebrate your artistic talent. Stay tuned for upcoming events shaping your path in the realm of art safeguarding!",
    btnText: "See more",
    link: "https://resolutio.notion.site/Events-Workshops-40501f61e9fb4ee6afcd7673bfbc128f?pvs=4",
    isExternal: true,
    imageURL:
      "https://raw.githubusercontent.com/resolutio-ai/CMS/main/images/banners/Host%20a%20Workshop.png",
    isGIF: false,
    imagePosition: "left",
    showAuthor: false,
    author: {
      name: "#IBWDesignChallenge",
      artName: "",
      profileLink:
        "https://resolutio.notion.site/IBWDesignChallenge-becf5eb882784daf80c8cf2d4d4f8e6c?pvs=4",
    },
  },
  ourStory: {
    heading: "Protection: The Default Integration",
    description:
      "We're on a mission to protect you from exploitation, so you can focus on what you do best: creating art. Read on to discover our story and how we are building a safe haven for you.",
    btnText: "Our Story",
    link: "https://youtu.be/Vjzx1ZSgSdU",
    isExternal: true,
    imageURL:
      "https://raw.githubusercontent.com/resolutio-ai/CMS/main/images/banners/Memoria-Poster-4.jpg",
    isGIF: false,
    imagePosition: "right",
    showAuthor: true,
    author: {
      name: "Raymond George Dias",
      artName: "House of Momory",
      profileLink: "https://www.youtube.com/watch?v=vthNBIFNYjU",
    },
  },
  resolveDispute: {
    heading: "Resolve your art dispute",
    description:
      "Unlock affordable dispute resolution with resolutio – the go-to platform for creators seeking a cost-effective alternative to resolve conflicts, ensuring your artistic endeavors are protected",
    btnText: "Resolve",
    link: "/coming-soon",
    isExternal: false,
    imageURL:
      "https://raw.githubusercontent.com/resolutio-ai/CMS/601ec785cf6c81975a6a8524333bfe79821d2e00/images/banners/Solace%20Cover.jpg",
    isGIF: false,
    imagePosition: "left",
    showAuthor: true,
    author: {
      name: "Liquid Memoirs",
      artName: "Solace",
      profileLink:
        "https://open.spotify.com/album/34VBdfWGSLhulw2Qogoyk5?si=4YoAumNUR6Wjm1fokO8duw",
    },
  },
  exploreYourRights: {
    heading: "Understand your rights",
    description:
      "Explore our resources on creator protection, designed to demystify the law and reinforce your work's security. Topics include fundamentals of copyright and key clauses that should be included in freelancer contracts, offering you the essential tools and knowledge needed to effectively safeguard your creative work.",
    btnText: "Learn",
    link: "https://resolutio.notion.site/Protect-986eca25d9a2478c9bd1d4e66771faa8?pvs=4",
    isExternal: true,
    imageURL:
      "https://raw.githubusercontent.com/resolutio-ai/CMS/main/images/banners/aashi.png",
    isGIF: false,
    imagePosition: "right",
    showAuthor: true,
    author: {
      name: "Aashika Vijayan",
      artName: "Buffering",
      profileLink: "https://aashikav96.myportfolio.com/digital-illustrations",
    },
  },
  community: {
    heading: "Earn incentives for protecting your Community",
    description:
      "Become an arbiter, resolve disputes, protect your community. Get incentivized.",
    link: "https://docs.google.com/forms/d/1_ZgLIGn_BZ6Ym8HM-aiTJbT0HlrTb1k0M2APRdNFPT0/edit",
    isExternal: true,
    btnText: "Become an Arbiter",
  },
  evidenceLink: {
    heading: "Protect what you create",
    description:
      "You want to protect all those great ideas you have? We want you to create them, lots of them, with no worries while we work on protecting your works.",
    link: "/evidence",
    isExternal: false,
    btnText: "Add Artwork",
  },
  lavenderLink: {
    heading: "Lavender House Collective",
    description:
      "resolutio is a creator led collective. Come be a part of the collective to access the exclusive perks for LH Collective.",
    link: "/coming-soon",
    isExternal: false,
    btnText: "opening soon",
  },
  blogs: {
    heading: "Blogs",
    link: "https://medium.com/resolutio-nft",
    btnText: "Read More",
    blogList: [
      {
        id: 1,
        title: "Art Collaboration and Authorship Issues",
        link: "https://medium.com/resolutio-nft/art-collaboration-and-authorship-issues-ca1344fd39cc",
        description:
          "Art is not always a one-(wo)man show, although creating art has been romanticised as the brainchild of one particular author/creator. Art, and its various expressions, often result from teamwork and involve multiple parties working together with a shared aim to build a final product.",
        imageURL:
          "https://raw.githubusercontent.com/resolutio-ai/CMS/main/images/blogs/article_1.jpg",
      },
      {
        id: 2,
        title: "Licensing vs Assignment of IP rights in PFP Projects",
        link: "https://medium.com/resolutio-nft/licensing-vs-assignment-of-ip-rights-in-pfp-projects-62af128c91",
        description:
          "In continuation of our discussion on PFP projects, an interesting occurrence that took place last week was the announcement made by Mousebelt, to create an ‘instruction manual to Bored Ape Yacht Club (BAYC) owners to utilize the IP rights of their NFTs.’",
        imageURL:
          "https://raw.githubusercontent.com/resolutio-ai/CMS/main/images/blogs/article_2.jpg",
      },
      {
        id: 3,
        title: "Specific Issues of Contract Law Concerning PFP Projects",
        link: "https://medium.com/resolutio-nft/specific-issues-of-contract-law-concerning-pfp-projects-a6ee8b4a391a",
        description:
          "We have already established in Sushruti’s article that legal contracts play an important role in defining the rights and obligations of the parties involved in a transaction concerning PFP NFTs. Therefore, we shall now examine what such a contract actually contains and which provisions are particularly advisable.",
        imageURL:
          "https://raw.githubusercontent.com/resolutio-ai/CMS/main/images/blogs/article_3.png",
      },
    ],
  },
};

export const WAITLIST_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdFA8JiIw1Dnfmv8uRlnLnw8wSCiH3ENT7qO6I_pIMoTLaafQ/viewform";
