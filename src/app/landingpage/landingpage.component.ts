import { Component, OnInit } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent implements OnInit {
  user: string = 'Eugene Hope';
  panelOpenState = false;
  data: Array<any>;
  navItems: Array<any>;
  opened: boolean;
  drawer:MatDrawerContainer;
  green: string = '#50b848';
  red: string = '#EA1A00';
  yellow: string = '#FFD55A';
  hasBackdrop: boolean = true;
  mode: string = 'side';

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor() {
    this.navItems = [
      'Dashboard',
      'Data Load',
      'SARS Submission',
      'Correspondance',
      'Client Servicing',
      'Reports' ,
      'Admin' ,
      'User Management',
    ];
    this.data = [
      {
        fundEntity: 'SAFAF',
        fileLoaded: this.green,
        promoted: this.green,
        logicalFile: this.yellow,
        test: this.green,
        live: this.red,
        sarsResponse: this.yellow,
        certificateGenerated: this.green,
        eFillingCompleted: this.yellow,
        dueDate: this.red,
      },
      {
        fundEntity: 'SISRAN',
        fileLoaded: this.green,
        promoted: this.green,
        logicalFile: this.yellow,
        test: this.green,
        live: this.red,
        sarsResponse: this.yellow,
        certificateGenerated: this.green,
        eFillingCompleted: this.yellow,
        dueDate: this.yellow,
      },
      {
        fundEntity: 'FCRAPF',
        fileLoaded: this.green,
        promoted: this.green,
        logicalFile: this.yellow,
        test: this.green,
        live: this.red,
        sarsResponse: this.yellow,
        certificateGenerated: this.green,
        eFillingCompleted: this.yellow,
        dueDate: this.red,
      },
      {
        fundEntity: 'FCRAPF',
        fileLoaded: this.green,
        promoted: this.green,
        logicalFile: this.yellow,
        test: this.green,
        live: this.red,
        sarsResponse: this.yellow,
        certificateGenerated: this.green,
        eFillingCompleted: this.yellow,
        dueDate: this.yellow,
      },
    ];
  }
  closeAllSidenav() {
    this.drawer.close();
  }
  ngOnInit(): void {}
}
