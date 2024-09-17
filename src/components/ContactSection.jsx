import userData from "../data/siteConf.js";
import SocialIcons from "./SocialIcons.jsx";

export default function ContactSection() {
  return (
    <p id="contact" className="flex flex-col gap-8">
      <p className="text-lg mt-4">
        Shoot a{" "}
        <a
          href={`mailto:${userData.email}`}
          className=" border-b-2 border-gray-800 dark:border-gray-300 font-bold "
        >
          mail
        </a>{" "}
        and I&apos;ll get back. I swear.
      </p>
      <SocialIcons />
    </p>
  );
}
