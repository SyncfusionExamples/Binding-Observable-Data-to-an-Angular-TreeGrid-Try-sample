import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-treegrid';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskStoreService extends Subject<DataStateChangeEventArgs> {
  private readonly apiUrl = 'api/tasks';

  constructor(private http: HttpClient) {
    super();
  }

  public execute(state: any): void {
    if (state.requestType === 'expand') {
      this.getChildData(state).subscribe((x) =>
        super.next(x as DataStateChangeEventArgs)
      );
    } else {
      this.getTasks(state).subscribe((x) =>
        super.next(x as DataStateChangeEventArgs)
      );
    }
  }

  getChildData(state?: any): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any) => ({
        result: response.slice(1, 3),
      }))
    );
  }

  getTasks(state?: any): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any) => {
        return state.dataSource === undefined || state.where > 0
          ? <any>{
              result: response,
              count: response.length,
            }
          : response;
      })
    );
  }
}
