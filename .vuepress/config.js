module.exports = {
  title: 'Open Microservice Guide',
  description: 'The open standard for reusable microservices',
  themeConfig: {
    repo: 'microservices/microservice.guide',
    repoLabel: 'Edit in GitHub',
    editLinkText: 'Edit in GitHub',
    editLinks: true,
    sidebar: [
      {
        title: 'Documentation',
        collapsable: false,
        children: [
          '/overview/',
          '/overview/comparisons/openapi/',
          '/anatomy/',
          '/container/',
          '/commands/',
          '/interface/',
          '/environment/',
          '/volumes/',
          '/authentication/',
          '/metrics/',
          '/logs/',
          '/requirements/',
          '/health/',
          '/scaling/',
          '/lifecycle/'
        ]
      },
      {
        title: 'Examples',
        collapsable: false,
        children: [
          '/http/'
        ]
      },
      {
        title: 'CLI',
        collapsable: false,
        children: [
          '/cli/overview/',
          '/cli/validate/',
          '/cli/test/',
          '/cli/debug/'
        ]
      }
    ]
  }
}
