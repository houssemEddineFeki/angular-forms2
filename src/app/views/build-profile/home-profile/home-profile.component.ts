import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'home-profile.component.html',
  styleUrls: ['./home-profile.component.css']
})
export class HomeProfileComponent implements OnInit {
  profileProgression : any [] = [
    {
      name: 'Personal',
      styleclass : 'fa fa-user fa-2x'
    },
    {
      name: 'Employment',
      styleclass : 'fa fa-briefcase fa-2x'
    },
    {
      name: 'Financial',
      styleclass : 'fa fa-university fa-2x'
    },
    {
      name: 'Citizenship',
      styleclass : 'fa fa-globe fa-2x'
    }
  ]
  ngOnInit() {
  }
}
