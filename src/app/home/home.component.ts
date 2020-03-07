import { Component } from '@angular/core';
import {
  faBook,
  faSchool,
  faPuzzlePiece,
  faDraftingCompass,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import {
  faNewspaper
} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  faSchool = faSchool;
  faBook = faBook;
  faNewspaper = faNewspaper;
  faPuzzlePiece = faPuzzlePiece;
  faDraftingCompass = faDraftingCompass;
  faGlobe = faGlobe;

}
