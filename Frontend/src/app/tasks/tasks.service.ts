import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http';
import { Task } from './schema/tasks';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient ) { 
  }

  //retreiving tasks
  getTasks(){
    return this.http.get('http://ec2-3-215-68-245.compute-1.amazonaws.com:3200/api/tasks').pipe(map(res=>res));
  }

  addTask(newTask:any){
    var headers=new HttpHeaders();
    //const headers = new HttpHeaders().set('Content-Type', 'application/json')
    headers.append('Content-Type','application/json');
    return this.http.post('http://ec2-3-215-68-245.compute-1.amazonaws.com:3200/api/add',newTask,{headers:headers}).pipe(map(res=>res));
  }
  deleteTask(id:any){
    return this.http.delete('http://ec2-3-215-68-245.compute-1.amazonaws.com:3200/api/delete/'+id).pipe(map(res => res));
  }

  viewTask(id:any){
    return this.http.get('http://ec2-3-215-68-245.compute-1.amazonaws.com:3200/api/viewtask/'+id).pipe(map(res => res));
  }

  updateTask(id:any,newTask:any){
    var headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://ec2-3-215-68-245.compute-1.amazonaws.com:3200/api/update/'+id,newTask,{headers:headers}).pipe(map(res=>res));
  }

}


