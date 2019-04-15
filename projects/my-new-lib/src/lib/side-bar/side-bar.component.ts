import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sinn-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() nomeSistema: string;
  @Input() versaoSistema: string;
  @Input() backgroundMenu: string;
  menuItens = [];
  public color = '#fff';
  public menuItems = [
    {
      path: '',
      id: 'inicio',
      title: 'Início',
      icon: 'home',
      children: null,
      permission: null
    }
  ];
  public activeFontColor: '#000';
  public normalFontColor: string;
  public dividerBgColor: string;

  constructor() {}

  ngOnInit() {}
}
