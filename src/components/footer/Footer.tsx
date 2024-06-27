import FooterContent from "./FooterContent";
const linksOne = [
  { text: "Start Trial" },
  { text: "Pricing" },
  { text: "Download" },
];
const linksTwo = [
  { text: "Blog" },
  { text: "Help Center" },
  { text: "Release Notes" },
  { text: "Status" },
];
const linksTree = [
  { text: "Twitter" },
  { text: "LinkedIn" },
  { text: "Facebook" },
  { text: "Facebook" },
  { text: "Dribbble" },
  { text: "Podcast" },
];
const linksFour = [
  { text: "About Us" },
  { text: "Careers" },
  { text: "Legal" },
];

function Footer() {
  return (
    <footer className=" bg-black text-white pb-14 ">
      <section className="h-full items-end page flex page--spacing justify-between max-lg:items-center max-sm:flex-col max-sm:items-end">
        <div className="flex gap-16 flex-wrap pb-24 max-lg:gap-10  max-sm:gap-5 max-sm:pb-14">
          <FooterContent title="Abstract" links={linksOne} />
          <FooterContent title="Resources" links={linksTwo} />
          <FooterContent title="Community" links={linksTree} />
          <div>
            <FooterContent title="Company" links={linksFour} />
            <div className="mt-7">
              <h3 className="font-semibold">Contact Us</h3>
              <a className="font-light hover:underline text-white" href="#">
                info@abstract.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <a
            className=""
            title="Go to goabstract.com"
            href="https://www.goabstract.com"
          >
            <svg
              className="w-32 mb-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 51"
              preserveAspectRatio="xMinYMid slice"
            >
              <g className="" fill="#fff">
                <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
                <circle cx="21.24" cy="29.58" r="4.96"></circle>
              </g>
            </svg>
          </a>
          <p className="text-xl leading-7 font-light ">
            © Copyright 2023 <br />
            Abstract Studio Design, Inc.
            <br /> All rights reserved
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
