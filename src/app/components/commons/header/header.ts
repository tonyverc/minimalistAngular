import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  img1 = 'https://superbdemo.com/themes/minimalistblogger/wp-content/uploads/2022/08/logo.png';
  img2 = 'https://superbdemo.com/themes/minimalistblogger/wp-content/uploads/2022/10/header-image-5.png';
  h3 = 'SEO OPTIMIZED/FAST/BEAUTIFUL';
  h1 = 'Simple But Significant';
  h2 = 'create your website easily';
}
