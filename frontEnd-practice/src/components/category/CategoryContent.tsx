import type { CategoryContentProps } from "../../typings";

function CategoryContent(props: CategoryContentProps) {
  const { image, title, paragraph, link } = props;

  return (
    <div className="flex space-y-2  items-start  mt-24">
      <img
        className=" w-20 mr-8 "
        src={image}
        alt="imagen descriptiva al texto"
      />
      <div>
        <h4 className=" font-bold text-2xl ">{title}</h4>
        <p className="text-2xl mt-5  text-text-color font-light ">
          {" "}
          {paragraph}
        </p>
        <a href="#" className="mt-5 block text-xl hover:underline text-bl-bg ">
          {link}
        </a>
      </div>
    </div>
  );
}

export default CategoryContent;
