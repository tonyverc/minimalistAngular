import { Component, signal } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './components/commons/header/header';
import { Footer } from './components/commons/footer/footer';
import { Card } from './components/card/card';
import { Button } from './components/button/button';
import { Sections } from './components/sections/sections';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Card, Button,Sections],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('minimalistBlogger');


}


