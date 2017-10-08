import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  
  // the ActivatedRoute is an object that gives us metadata about the current active route
  // including the currently loaded user, 

  constructor(private route:  ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      // the 'id' param here, matches the id in the app.module path statement
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // the following is an observable, used to watch if this ever happens, if user clicks link created in user.component.html
    // we only need this after adding the link
    this.route.params.subscribe(
      (params: Params) => {
      // this gets executed whenever the parameter changes
        this.user.id = params['id'];
          this.user.name = params['name'];
      });
  }

}
