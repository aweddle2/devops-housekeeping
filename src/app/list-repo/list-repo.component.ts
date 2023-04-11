import { Component, OnInit, Inject } from '@angular/core';
import { DevOpsService } from '../services/dev-ops-service';
import { GitRepo } from '../models/git-repo';

@Component({
  selector: 'app-list-repo',
  templateUrl: './list-repo.component.html',
  styleUrls: ['./list-repo.component.less']
})
export class ListRepoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'remoteUrl'];
  public repoList: GitRepo[];

  constructor(@Inject('DevOpsService') public devOpsService: DevOpsService) {
    this.repoList = [];
  }
  ngOnInit(): void {
    this.devOpsService.getGitRepos(1).subscribe(value => this.repoList = value.value);
  }
}
