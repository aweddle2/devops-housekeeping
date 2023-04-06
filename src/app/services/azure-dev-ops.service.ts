import { Injectable } from '@angular/core';
import { DevOpsService } from './dev-ops-service';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';
import { GitRepo } from '../models/git-repo';

@Injectable()
export class AzureDevOpsService implements DevOpsService {

  constructor(public http: HttpClient, public settingsService: SettingsService) {
    var azure_devops_organisation = settingsService.getSetting('azure_devops_organisation');
    let azure_devops_auth_token = settingsService.getSetting('azure_devops_auth_token');

    // your collection url
    let orgUrl = "https://dev.azure.com/" + azure_devops_organisation;


  }

  async getGitRepos(page: number): Promise<GitRepo[]> {
    // let gitApiObject: GitApi.IGitApi = await this.connection.getGitApi();

    // let repos: GitInterfaces.GitRepository[] = await gitApiObject.getRepositories();

    let returnValue: GitRepo[] = [];

    //repos.forEach(repo => {
    //  let gitRepo: GitRepo = new GitRepo();
    //  gitRepo.name = repo.name || '';
    //  gitRepo.url = repo.url || '';
    //});

    return returnValue;

  }
}
