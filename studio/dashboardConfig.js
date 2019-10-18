export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5da9cac4c25792d5ac0219cb',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-zijhs126',
                  apiId: '241e07db-dc2a-4088-b362-5e2e954fb129'
                },
                {
                  buildHookId: '5da9cac45a66f2c1eb500d31',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-eedao4do',
                  apiId: '0010cbeb-93b3-42f6-b0a1-9c2380a2ca6b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/intetnionaltypo/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-eedao4do.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
