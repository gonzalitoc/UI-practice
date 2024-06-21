import type { CategoryContentProps } from '../../typings'

function CategoryContent(props: CategoryContentProps) {
  const { image, title, paragraph, link } = props

  return (
    <div className="flex  items-start pr-6 mt-12">
      <img className=" w-20 mr-8 " src={image} alt="imagen descriptiva al texto" />
      <div>
        <h4 className="m-0 font-bold text-2xl ">{title}</h4>
        <p className="text-2xl mt-7 text-text-color font-light "> {paragraph}</p>
        <a href="#" className="mt-5 block text-xl hover:underline text-bl-bg ">
          {link}
        </a>
      </div>
    </div>
  )
}

export default CategoryContent
