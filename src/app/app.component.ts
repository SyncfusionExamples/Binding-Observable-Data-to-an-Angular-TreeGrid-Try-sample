import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DataStateChangeEventArgs,
  ToolbarService,
  EditService,
  TreeGridComponent,
} from '@syncfusion/ej2-angular-treegrid';
import { Observable } from 'rxjs';
import { TaskStoreService } from './task-store.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToolbarService, EditService],
})
export class AppComponent implements OnInit {
  public tasks!: Observable<DataStateChangeEventArgs>;
  @ViewChild('treegrid')
  public treegrid!: TreeGridComponent;
  public pageSettings!: Object;

  constructor(private readonly TaskService: TaskStoreService) {
    this.tasks = TaskService;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    console.log(state);
    if (state.requestType === 'expand') {
      if ((state.data as any)['id'] == 1) {
        // Children of Parent Task 1
        state.childData = <any>[
          { id: 102, TaskName: 'BirthDate', ParentID: 1, Duration: 23, Progress: 34, isParent: true },
          { id: 103, TaskName: 'Address',   ParentID: 1, Duration: 23, Progress: 34, isParent: true },
        ];
      } else if ((state.data as any)['id'] == 102) {
        // Children of BirthDate
        state.childData = <any>[
          { id: 104, TaskName: 'Subchild 3', ParentID: 102, Duration: 23, Progress: 34, isParent: false },
        ];
      } else if ((state.data as any)['id'] == 103) {
        // Children of Address
        state.childData = <any>[
          { id: 105, TaskName: 'Subchild 4', ParentID: 103, Duration: 23, Progress: 34, isParent: false },
        ];
      } else if ((state.data as any)['id'] == 2) {
        // Children of Parent Task 2
        state.childData = <any>[
          { id: 205, TaskName: 'Subchild 4', ParentID: 2, Duration: 23, Progress: 34, isParent: false },
        ];
      }
      state.childDataBind!();
    } else {
      this.TaskService.execute(state);
    }
  }

  ngOnInit(): void {
    const state: any = { skip: 0, take: 15 };
    this.pageSettings = { pageSize: 1, pageSizeMode: 'Root' };
    this.TaskService.execute(state);
  }
}
