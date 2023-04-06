import { Injectable } from "@angular/core";
import { GitRepo } from "../models/git-repo";

//This is really an interface, but Angular does not include interfaces in the compiled code
//https://www.damirscorner.com/blog/posts/20211015-InterfacesInAngularDependencyInjection.html
@Injectable({
    providedIn: 'root'
})
export abstract class DevOpsService {
    public abstract getGitRepos(page: number): Promise<GitRepo[]>;
}
