import userData from "@/data/siteConf";
import { LinkedIn, Twitter, Instagram } from "@/components/SvgProvider";

export default function SocialIcons() {
  return (
    <div className="social-icons flex flex-row space-x-8">
      <a
        href={userData.socialLinks.linkedin}
        className="h-10 w-10 rounded-full   flex items-center justify-center cursor-pointer"
      >
        <LinkedIn />
      </a>
      <a
        href={userData.socialLinks.twitter}
        className="h-10 w-10 rounded-full   flex items-center justify-center cursor-pointer"
      >
        <Twitter />
      </a>
      <a
        href={userData.socialLinks.instagram}
        className="h-10 w-10 rounded-full  flex items-center justify-center cursor-pointer"
      >
        <Instagram />
      </a>
    </div>
  );
}
