export default function sitemap() {
  return [
    {
      url: "https://alraimigroup.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },

    {
      url: "https://alraimigroup.com/fashion-manufacturing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },

    {
      url: "https://alraimigroup.com/luxury-packaging",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },

    {
      url: "https://alraimigroup.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    }
  ];
}