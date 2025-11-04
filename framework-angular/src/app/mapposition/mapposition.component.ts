import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-mapposition',
  imports: [],
  templateUrl: './mapposition.component.html',
  styleUrl: './mapposition.component.css'
})
export class MappositionComponent {
  @Output() notify = new EventEmitter();

  @Input() public zoom = 13;
  @Input() public lat = 52.51604;
  @Input() public lng = 13.37691;
}