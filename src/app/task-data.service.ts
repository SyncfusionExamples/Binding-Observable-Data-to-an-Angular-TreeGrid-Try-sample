import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TaskModel } from './task-model';

@Injectable({
  providedIn: 'root',
})
export class TaskDataService implements InMemoryDbService {
  createDb() {
    const tasks: TaskModel[] = [
      { id: 1,  TaskName: 'Parent Task 1',  StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'high',   Progress: 50, isParent: true, ParentID: null },
      { id: 2,  TaskName: 'Parent Task 2',  StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Medium', Progress: 50, isParent: true, ParentID: null },
      { id: 3,  TaskName: 'Parent Task 3',  StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 4,  TaskName: 'Parent Task 4',  StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 5,  TaskName: 'Parent Task 5',  StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 6,  TaskName: 'Parent Task 6',  StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 7,  TaskName: 'Parent Task 7',  StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 8,  TaskName: 'Parent Task 8',  StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 9,  TaskName: 'Parent Task 9',  StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 10, TaskName: 'Parent Task 10', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 11, TaskName: 'Parent Task 11', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 12, TaskName: 'Parent Task 12', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 13, TaskName: 'Parent Task 13', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 14, TaskName: 'Parent Task 14', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 15, TaskName: 'Parent Task 15', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 16, TaskName: 'Parent Task 16', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 17, TaskName: 'Parent Task 17', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 18, TaskName: 'Parent Task 18', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 19, TaskName: 'Parent Task 19', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 20, TaskName: 'Parent Task 20', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 21, TaskName: 'Parent Task 21', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 22, TaskName: 'Parent Task 22', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 23, TaskName: 'Parent Task 23', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 24, TaskName: 'Parent Task 24', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
      { id: 25, TaskName: 'Parent Task 25', StartDate: new Date('02/23/2017'), EndDate: new Date('02/27/2017'), Duration: 35, Priority: 'Low',    Progress: 40, isParent: true, ParentID: null },
    ];
    return { tasks };
  }
}
