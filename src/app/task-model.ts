export interface TaskModel {
  id: number;
  TaskName: string;
  StartDate: Date;
  EndDate: Date;
  Duration: number;
  Priority: string;
  Progress: number;
  isParent: boolean;
  ParentID: number | null;
}
