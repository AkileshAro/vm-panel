import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  current_section = "";
  constructor(public router: Router) {
    router.events.subscribe((val: any) => {
      this.changeCurrentSection(val.url)
    });
  }

  ngOnInit(): void {
    this.changeCurrentSection(this.router.url)
  }

  changeCurrentSection(url) {
    if (url == '/main/dashboard') this.current_section = 'Dashboard';
    if (url == '/main/create') this.current_section = 'Create';
  }

  logOut() {
    this.router.navigate(['/auth'])
  }
}
