import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  styleUrls: ['./user-details-card.component.scss']
})
export class UserDetailsCardComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() contactNumber: String;

  constructor() { }

  ngOnInit(): void {
  }

  
}
