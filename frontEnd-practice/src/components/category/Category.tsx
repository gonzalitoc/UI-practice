import Content from "./CategoryContent";
import account from "../../images/icon-account.png";
import authenticate from "../../images/icon-authenticate.png";
import billing from "../../images/icon-billing.png";
import comment from "../../images/icon-comment.png";
import organization from "../../images/icon-organizations.png";
import version from "../../images/icon-versions.png";
import type { CategoryListValue } from "../../typings";

const categories: CategoryListValue = {
  left: [
    {
      image: version,
      title: "Using Abstract",
      paragraph:
        "Abstract lets you manage, version, and document your designs in one place.",
      link: "Learn More →",
    },
    {
      image: organization,
      title: "Manage organizations, teams, and projects",
      paragraph:
        "Use Abstract organizations, teams, and projects to organize your people and your work.",
      link: "Learn More →",
    },
    {
      image: authenticate,
      title: "Authenticate to Abstract",
      paragraph:
        "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
      link: "Learn More →",
    },
  ],
  right: [
    {
      image: account,
      title: "Manage your account",
      paragraph:
        "Configure your account settings, such as your email, profile details, and password.",
      link: "Learn More →",
    },
    {
      image: billing,
      title: "Manage billing",
      paragraph: "Change subscriptions and payment details.",
      link: "Learn More →",
    },
    {
      image: comment,
      title: "Abstract support",
      paragraph: "Get in touch with a human.",
      link: "Learn More →",
    },
  ],
};

function Category() {
  return (
    <section className="pt-28 pb-40 px-28 max-lg:px-16 max-lg:pt-16 max-sm:px-18 max-sm:pt-10 max-sm:pb-28 max-xs:px-8 max-xs:pb-20">
      <div className="flex justify-center max-lg:flex-wrap max-w-w-1600 my-0 mx-auto">
        <div className="flex flex-col pr-9">
          {categories.left.map((category, index) => (
            <Content {...category} key={index} />
          ))}
        </div>
        <div className="flex flex-col">
          {categories.right.map((category, index) => (
            <Content {...category} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
