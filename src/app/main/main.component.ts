import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  active: string;

  constructor(private router: Router) {
    const segments = this.router.parseUrl(this.router.url).root.children.primary.segments.map(s => s.path);
    this.active = segments[segments.length - 1];
  }

  ngOnInit(): void {
  }

  navigateTo(url = ''): void {
    if (!url) {
      this.router.navigate(['login']);
      return;
    }
    this.router.navigate(['main', url.toLowerCase()]);
    this.active = url;
  }

}
