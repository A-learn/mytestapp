import { Component, OnInit } from '@angular/core';

declare var device: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'mytestapp';

  ngOnInit() { 
    document.addEventListener("deviceready", function() { 
    alert(device.platform); 
      }, false); 
    } 
}
