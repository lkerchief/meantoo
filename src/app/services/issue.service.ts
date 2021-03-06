import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  addIssue(title, responsible, description, severity) {
    const issue = {
      title,
      responsible,
      description,
      severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title,
      responsible,
      description,
      severity,
      status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }
}
