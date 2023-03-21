export const websiteUrl =  "https://WebFullstackBlog.virgel1995.repl.co";
export const githubBaseUrl = "https://github.com/virgel1995/react-blog";

export const API = "https://webfull-stack-courses.herokuapp.com"


export const siteConfig = {
  repo: {
    url: githubBaseUrl,
    editUrl: `${githubBaseUrl}/edit/main/content`,
    blobUrl: `${githubBaseUrl}/blob/main`,
  },
  author: {
    name: "virus24",
    github: "virgel1995",
    twitter: "@virus24",
    email: "kazouya25@gmail.com",
  },
  seo: {
    title: "Virus-Blog",
    description: "Blog for Whatsapp group for web development",
    openGraph: {
      url: websiteUrl,
      type: "website",
      image: {
        url: `${websiteUrl}/static/assets/devloper.gif`,
        width: 1240,
        height: 1080,
        alt: "Blog for Whatsapp group for web development",
        type: "image/png",
      },
      locale: "en_US",
      siteName: "Virus-Blog",
    },
    twitter: {
      site: "@virus24",
      handle: "@virus24",
      cardType: "summary_large_image",
      image: {
        url: `${websiteUrl}/static/assets/devloper.gif`,
        width: 1012,
        height: 506,
        alt: "Blog for Whatsapp group for web development",
        type: "image/png",
      },
    },
    robots: "index, follow",
  },
};