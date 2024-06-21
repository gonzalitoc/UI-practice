type CategoryContentProps = {
  /**
   * URL string for src image
   */
  image: string
  title: string
  paragraph: string
  link: string
}

type CategoryListValue = {
  left: CategoryContentProps[]
  right: CategoryContentProps[]
}

export type { CategoryContentProps, CategoryListValue }
