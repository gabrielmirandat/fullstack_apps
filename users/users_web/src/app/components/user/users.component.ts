import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';

import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
  showList = true;
  showAdd = false;
  showEdit = false;
  showDetails = false;

  users:User[];
  currentUser:User;
  currentIndex:number;

  constructor( private userService:UserService) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe((users) => {
      this.users = users.data;
    })
  }

  addUser(user){
    this.userService.add(user).subscribe((insertedId) => {
        this.showAdd = false; 
        this.showList = true;
        this.users.push(Object.assign({id: insertedId.data}, user));
        console.log('user added');
    })
  }

  editUser(user){
    this.userService.update(user.id, user).subscribe(() => {
      console.log('user edited');
      this.showEdit = false; 
      this.showList = true;
      this.users[this.currentIndex] = user;
    })
  }

  deleteUser(id, index){
    this.userService.delete(id).subscribe(() => {
      console.log('user deleted');
      this.users.splice(index, 1);
    })
  }

  copyCurrentUser(index){
    this.currentUser = Object.assign({}, this.users[index]);
    this.currentIndex = index;
  }
}
