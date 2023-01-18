import { createTemplateAction } from '@backstage/plugin-scaffolder-backend';
import { Config } from '@backstage/config';
import fetch from 'node-fetch';

export const createJenkinsPipelineAction = (config: Config) => {
  return createTemplateAction<{ jobName: string, repoUrl: string }>({
    id: 'diadem:make-pipeline',
    schema: {
      input: {
        required: ['repoUrl'],
        type: 'object',
        properties: {
            jobName: {
            type: 'string',
            title: 'JobName',
            description: 'The name of the jpb/pipeline',
          },
            repoUrl: {
            type: 'string',
            title: 'RepoURL',
            description: 'The url of the repositiory, to pick Jenkinsfile',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
            jobLink: {
            title: 'Jenkins Job Link',
            type: 'string',
          },
         },
      },
    },
    async handler(ctx) {
        
        const { jobName, repoUrl } = ctx.input;
        const jenkinsConfig = config.getConfig('jenkins');

        const baseUrl = `${jenkinsConfig.getString('baseUrl')}/createItem?name=${jobName}`
        const userName = jenkinsConfig.getString('username');
        const apiKey =   jenkinsConfig.getString('apiKey');

        const authB64 = Buffer.from(`${userName}:${apiKey}`).toString('base64');
        const authHeaderVal = `Basic ${authB64}`
        //To do read from jekinsconfig.xml and use "replace-in-file" to post file instead

        //Single branch
        //const bodyXML = `<flow-definition	plugin="workflow-job@1254.v3f64639b_11dd">	<actions><org.jenkinsci.plugins.pipeline.modeldefinition.actions.DeclarativeJobAction	plugin="pipeline-model-definition@2.2118.v31fd5b_9944b_5" /><org.jenkinsci.plugins.pipeline.modeldefinition.actions.DeclarativeJobPropertyTrackerAction  plugin="pipeline-model-definition@2.2118.v31fd5b_9944b_5">	<jobProperties />	<triggers />	<parameters />	<options /></org.jenkinsci.plugins.pipeline.modeldefinition.actions.DeclarativeJobPropertyTrackerAction>	</actions>	<description>sample backstage automated pipeline</description>	<keepDependencies>false</keepDependencies>	<properties><com.coravy.hudson.plugins.github.GithubProjectProperty plugin="github@1.36.0">	<projectUrl>${repoUrl}</projectUrl>	<displayName>Git Repo for ${repoUrl} </displayName></com.coravy.hudson.plugins.github.GithubProjectProperty>	</properties>	<definition	class="org.jenkinsci.plugins.workflow.cps.CpsScmFlowDefinition"		plugin="workflow-cps@3583.v4f58de0d78d5"><scm class="hudson.plugins.git.GitSCM" plugin="git@4.14.3">	<configVersion>2</configVersion>	<userRemoteConfigs>		<hudson.plugins.git.UserRemoteConfig><url>${repoUrl}</url><credentialsId>git-hub-pt0ken</credentialsId>		</hudson.plugins.git.UserRemoteConfig>	</userRemoteConfigs>	<branches>		<hudson.plugins.git.BranchSpec><name>*/main</name>		</hudson.plugins.git.BranchSpec>	</branches>	<doGenerateSubmoduleConfigurations>false	</doGenerateSubmoduleConfigurations>	<submoduleCfg class="empty-list" />	<extensions /></scm><scriptPath>Jenkinsfile</scriptPath><lightweight>false</lightweight> </definition>	<triggers /> <disabled>false</disabled></flow-definition>`;

        //Multi Branch branch
        const bodyXML = `<org.jenkinsci.plugins.workflow.multibranch.WorkflowMultiBranchProject	plugin="workflow-multibranch@716.vc692a_e52371b_">	<actions />	<description>Multi-branch ${jobName}</description>	<displayName>Multi-branch ${jobName}</displayName>	<properties />	<folderViews		class="jenkins.branch.MultiBranchProjectViewHolder"		plugin="branch-api@2.1051.v9985666b_f6cc">		<owner			class="org.jenkinsci.plugins.workflow.multibranch.WorkflowMultiBranchProject"			reference="../.." />	</folderViews>	<healthMetrics>		<com.cloudbees.hudson.plugins.folder.health.WorstChildHealthMetric			plugin="cloudbees-folder@6.800.v71307ca_b_986b">			<nonRecursive>false</nonRecursive>		</com.cloudbees.hudson.plugins.folder.health.WorstChildHealthMetric>		<jenkins.branch.PrimaryBranchHealthMetric			plugin="branch-api@2.1051.v9985666b_f6cc" />	</healthMetrics>	<icon class="jenkins.branch.MetadataActionFolderIcon"		plugin="branch-api@2.1051.v9985666b_f6cc">		<owner			class="org.jenkinsci.plugins.workflow.multibranch.WorkflowMultiBranchProject"			reference="../.." />	</icon>	<orphanedItemStrategy		class="com.cloudbees.hudson.plugins.folder.computed.DefaultOrphanedItemStrategy"		plugin="cloudbees-folder@6.800.v71307ca_b_986b">		<pruneDeadBranches>true</pruneDeadBranches>		<daysToKeep>-1</daysToKeep>		<numToKeep>6</numToKeep>		<abortBuilds>false</abortBuilds>	</orphanedItemStrategy>	<triggers>		<com.cloudbees.hudson.plugins.folder.computed.PeriodicFolderTrigger			plugin="cloudbees-folder@6.800.v71307ca_b_986b">			<spec>H H/4 * * *</spec>			<interval>86400000</interval>		</com.cloudbees.hudson.plugins.folder.computed.PeriodicFolderTrigger>	</triggers>	<disabled>false</disabled>	<sources		class="jenkins.branch.MultiBranchProject$BranchSourceList"		plugin="branch-api@2.1051.v9985666b_f6cc">		<data>			<jenkins.branch.BranchSource>				<source class="jenkins.plugins.git.GitSCMSource"					plugin="git@4.14.3">					<id>f3aefb1f-c9dc-4c0f-bab6-80d076493060</id>					<remote>${repoUrl}</remote>					<credentialsId>git-hub-pt0ken</credentialsId>					<traits>						<jenkins.plugins.git.traits.BranchDiscoveryTrait />					</traits>				</source>				<strategy					class="jenkins.branch.DefaultBranchPropertyStrategy">					<properties class="empty-list" />				</strategy>			</jenkins.branch.BranchSource>		</data>		<owner			class="org.jenkinsci.plugins.workflow.multibranch.WorkflowMultiBranchProject"			reference="../.." />	</sources>	<factory		class="org.jenkinsci.plugins.workflow.multibranch.WorkflowBranchProjectFactory">		<owner			class="org.jenkinsci.plugins.workflow.multibranch.WorkflowMultiBranchProject"			reference="../.." />		<scriptPath>Jenkinsfile</scriptPath>	</factory></org.jenkinsci.plugins.workflow.multibranch.WorkflowMultiBranchProject>`

        // Debug Info
        console.info(`************ repourl.  ${repoUrl}`);
        console.info(`************ baseurl .  ${baseUrl}`);
        console.info(`************ body .  ${bodyXML}`);
        console.info(`************ authHVal .  ${authHeaderVal}`);
        
        try {

            const response = await fetch(baseUrl, {
                method: 'POST',
                body: bodyXML,
                headers: {'Content-Type': 'text/xml', 'Authorization': authHeaderVal}
            });
            const data = await response.status;

            console.log(`************ . Response Jenkins ${data}`);

            
        } catch (error) {
            console.error(error);
        }


        // OUT put to UI console
        ctx.output('jobLink', `${baseUrl}/job/${jobName}`); 
        
    },
  });
};