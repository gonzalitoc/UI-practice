import { FooterProps } from "../../typings";

function FooterContent(props: FooterProps) {
  const { title, links } = props;

  return (
    <div className="flex flex-col mt-12 max-sm:mt-8">
      <h3 className="font-bold text-2xl  leading-7 mb-4">{title}</h3>

      {links.map((link, index) => (
        <a
          key={index}
          className="font-light hover:underline text-white"
          href="#"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}

export default FooterContent;
