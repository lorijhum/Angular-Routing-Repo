import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // now we are adding the server-resolver and commenting out the earlier code, note:  the name 'server' in data[]
    // matches the name in the app-routing module path for serverResolver, this is used for asynchronous data
      this.route.data.subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      );
    
    
    // we are adding the + so that id is treated as a number rather than a string
//    const id = +this.route.snapshot.params['id'];
//    this.server = this.serversService.getServer(id);
//  
//   this.route.params.subscribe(
//      (params: Params) => {
      // this gets executed whenever the parameter changes
//        this.server = this.serversService.getServer(+params['id']);
//        
//         
//      });

}
  onEdit() {
    // we have to add queryParamsHanlding to preserve the parm to allow edit, without this edit was always set to not allowed
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
