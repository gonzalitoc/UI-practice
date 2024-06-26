import type { CategoryContentProps } from "../../typings";

function CategoryContent(props: CategoryContentProps) {
  const { image, title, paragraph, link } = props;

  return (
    <div className="flex items-start  mt-24 max-xs:mt-8">
      <img
        className=" w-20 mr-8 max-xs:w-14 max-xs:mr-5"
        src={image}
        alt="imagen descriptiva al texto"
      />
      <div>
        <h4 className=" font-bold text-2xl max-xs:text-xl">{title}</h4>
        <p className="text-2xl mt-5  max-xs:text-xl max-xs:mt-2 text-text-color font-light ">
          {" "}
          {paragraph}
        </p>
        <a
          href="#"
          className="mt-5 block text-xl max-xs:mt-2 hover:underline text-bl-bg "
        >
          {link}
        </a>
      </div>
    </div>
  );
}

export default CategoryContent;
