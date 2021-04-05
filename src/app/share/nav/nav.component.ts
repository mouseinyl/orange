import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public on =false
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  see(){
    this.on = !this.on
  }
  find(x){
      this.router.navigate(['',x])
  }

}
