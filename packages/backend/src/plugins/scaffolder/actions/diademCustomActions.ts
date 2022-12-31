import { createTemplateAction } from '@backstage/plugin-scaffolder-backend';

import { Config } from '@backstage/config';

export const createJenkinsPipelineAction = (config: Config) => {
//export const createJenkinsPipelineAction = () => {
  return createTemplateAction<{ repoUrl: string }>({
    id: 'diadem:make-pipeline',
    schema: {
      input: {
        required: ['repoUrl'],
        type: 'object',
        properties: {
            repourl: {
            type: 'string',
            title: 'RepoURL',
            description: 'The url of the repositiory, to pick Jenkinsfile',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          jenkinsBaseUrl: {
            title: 'JekinsUrl',
            type: 'string',
          },
          jenkinsApiKey: {
            title: 'JekinsKey',
            type: 'string',
          },
        },
      },
    },
    async handler(ctx) {
        
        
        const jenkinsConfig = config.getConfig('jenkins');
        const { repoUrl } = ctx.input;
        console.info(`************ .  ${repoUrl}`);
        console.info(`************ .  ${jenkinsConfig.getString('baseUrl')}`);
        console.info(`************ .  ${jenkinsConfig.getString('apiKey')}`);
        


        ctx.output('jenkinsBaseUrl', jenkinsConfig.getString('baseUrl'));
        ctx.output('jenkinsApiKey',jenkinsConfig.getString('apiKey')); 
        
        
       

    },
  });
};