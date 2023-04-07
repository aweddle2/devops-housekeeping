import { Injectable } from "@angular/core";
import { GitRepo } from "../models/git-repo";
import { Observable, of } from "rxjs";

//This should really be an interface, but javascript has no concept of interfaces so abstract class it is
//https://www.damirscorner.com/blog/posts/20211015-InterfacesInAngularDependencyInjection.html
@Injectable({
    providedIn: 'root'
})
export abstract class DevOpsService {
    public abstract getGitRepos(page: number): Observable<GitRepo[]>;

}
