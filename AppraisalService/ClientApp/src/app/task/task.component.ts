import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})

export class TaskComponent implements OnInit{
  showDialog: boolean = false;
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Task', icon: 'fas fa-tasks' }
    ];
  }

  data = [
    { id: '1', name: 'Task 1', owner: 'Nam Nguyen', status: 'Assigned', priority: 'High', duedate: '2/15/2019', assigneddate: '1/25/2019' },
    { id: '2', name: 'Task 2', owner: 'Oanh Nguyen', status: 'Open', priority: 'Low', duedate: '3/15/2019', assigneddate: '4/25/2019' }
  ];

  cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'owner', header: 'Owner' },
      { field: 'status', header: 'Status' },
      { field: 'priority', header: 'Priority' },
      { field: 'duedate', header: 'Due Date' },
      { field: 'assigneddate', header: 'Assigned Date' }
    ];

  DialogClick() {
    this.showDialog = true;
  }

  CloseDialogClick() {
    this.showDialog = false;
  }

}
