export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6257ee6e2fa93168177df7f5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pgbx86er',
                  apiId: '43560bf9-b3ce-40a2-8c6d-a4b8aeffb78c'
                },
                {
                  buildHookId: '6257ee6fcc6616676256a7c8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-end77umc',
                  apiId: 'b4efab7c-6e1a-4e5b-9312-7d59e5b12f82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/quedet/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-end77umc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
