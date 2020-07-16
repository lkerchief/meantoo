import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Issue } from '../../models/issue.model';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    // this.fetchIssues(); // Commented out so e2e will run (no API available)
  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  fetchIssues() {
    this.issueService
    .getIssues()
    .subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested...');
      console.log(this.issues);
    });
  }
}
