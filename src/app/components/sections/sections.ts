import { Component } from '@angular/core';

@Component({
  selector: 'app-sections',
  imports: [],
  templateUrl: './sections.html',
  styleUrl: './sections.css'
})
export class Sections {
  articles = [
      { img : 'https://superbdemo.com/themes/minimalistblogger/wp-content/uploads/2022/08/featured-img-2-850x341.jpg',
        alt : 'Ville',
        title : 'Nothing Beats New York',
        date : '2025-04-17',
        author : 'John Doe',
        content : 'Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id vehicula est, tincidunt pellentesque magna. Etiam porttitor nulla urna, quis vulputate justo euismod ac. Nunc viverra sollicitudin fringilla.'
      },
      {
        img : 'https://superbdemo.com/themes/minimalistblogger/wp-content/uploads/2022/08/featured-img-3-1.png',
        alt : 'femme qui travaille',
        title : 'The Joys Of Being A Morning Person',
        date : '2022-08-18',
        author : 'John Doe',
        content : 'Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id…'
      },
      {
        img : 'https://superbdemo.com/themes/minimalistblogger/wp-content/uploads/2022/08/featured-img-3.png',
        alt : 'bureau',
        title : 'Getting What You Want',
        date : '2022-08-09',
        author : 'John Doe',
        content : 'Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id…'
      },
      {
        img : 'https://superbdemo.com/themes/minimalistblogger/wp-content/uploads/2022/08/featured-img-4.png',
        alt : 'route avec arbre',
        title : "What i've learned from road trips",
        date : '2022-08-03',
        author : 'John Doe',
        content : 'Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id…'
      },
  ]
}
