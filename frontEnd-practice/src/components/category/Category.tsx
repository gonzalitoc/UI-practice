import Content from './CategoryContent'
import account from '../../images/icon-account.png'
import authenticate from '../../images/icon-authenticate.png'
import billing from '../../images/icon-billing.png'
import comment from '../../images/icon-comment.png'
import organization from '../../images/icon-organizations.png'
import version from '../../images/icon-versions.png'
import type { CategoryListValue } from '../../typings'

const categories: CategoryListValue = {
  left: [
    {
      image: version,
      title: 'Using Abstract',
      paragraph: 'Abstract lets you manage, version, and document your designs in one place.',
      link: 'Learn More →',
    },
    {
      image: organization,
      title: 'Manage organizations, teams, and projects',
      paragraph: 'Use Abstract organizations, teams, and projects to organize your people and your work.',
      link: 'Learn More →',
    },
    {
      image: authenticate,
      title: 'Authenticate to Abstract',
      paragraph: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
      link: 'Learn More →',
    },
  ],
  right: [
    {
      image: account,
      title: 'Manage your account',
      paragraph: 'Configure your account settings, such as your email, profile details, and password.',
      link: 'Learn More →',
    },
    {
      image: billing,
      title: 'Manage billing',
      paragraph: 'Change subscriptions and payment details.',
      link: 'Learn More →',
    },
    {
      image: comment,
      title: 'Abstract support',
      paragraph: 'Get in touch with a human.',
      link: 'Learn More →',
    },
  ],
}

function Category() {
  return (
    <section className="pl-40 pr-40 pt-28 pb-9">
      <div className="flex  page ">
        <div className="flex flex-wrap w-full">
          {categories.left.map((category, index) => (
            <Content {...category} key={index} />
          ))}
        </div>
        <div className="flex flex-wrap w-full">
          {categories.right.map((category, index) => (
            <Content {...category} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Category
