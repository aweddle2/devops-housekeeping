import { Injectable } from '@angular/core';
import { DevOpsService } from './dev-ops-service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';
import { GitRepo } from '../models/git-repo';
import { Observable, catchError, of, tap } from 'rxjs';
import { Buffer } from 'buffer';

@Injectable()
export class AzureDevOpsService implements DevOpsService {

  public baseUrl: string = '';
  public httpOptions: any = null;

  constructor(public http: HttpClient, public settingsService: SettingsService) {
    var azure_devops_organisation = settingsService.getSetting('azure_devops_organisation');
    this.baseUrl = "https://dev.azure.com/" + azure_devops_organisation + "/_apis/";

    var azure_devops_auth_token = settingsService.getSetting('azure_devops_auth_token');

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(azure_devops_auth_token).toString('base64')
      })
    };

  }

  getGitRepos(page: number): Observable<GitRepo[]> {
    return this.http.get<GitRepo[]>(this.baseUrl + "git/repositories").pipe(catchError(this.handleError<GitRepo[]>('GitRepo[]', []))
    );
  }

  /**
* Handle Http operation that failed.
* Let the app continue.
*
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }
}




