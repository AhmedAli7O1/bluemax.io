import { Component, OnInit } from '@angular/core';
import {
  faGithub, faNpm, faTwitter,
  faFacebook, faStackOverflow,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faGithub = faGithub;
  faNpm = faNpm;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faStackOverflow = faStackOverflow;
  faYoutube = faYoutube;

}
