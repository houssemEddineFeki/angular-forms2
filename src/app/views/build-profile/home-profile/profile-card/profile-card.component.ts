import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jQuery:any;
declare var $ :any;
@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() prof2:any
  @Output() cardClicked: EventEmitter<any> = new EventEmitter<any>();
  Url : string
  constructor(private router:Router) {}
  ngOnInit(): void {
    (function ( $ ) {
      $.fn.progress = function() {
        var percent = this.data("percent");
        this.css("width", percent+"%");
        //console.log(percent);
      };
    }( jQuery ));
    
    $(document).ready(function(){
      $(".bar-one .bar").progress();
      $(".bar-two .bar").progress();
      $(".bar-three .bar").progress();
    });
  }
onClick(){
  //console.log(this.prof2.name);
  this.Url = 'build-profile/' + this.prof2.name.toLowerCase();
  this.router.navigate([this.Url])
}

}