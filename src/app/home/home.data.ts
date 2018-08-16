import {Technology} from '../data-models/models';

export class HomeData {
  technologies: Technology[];

  constructor() {
    this.technologies = [
      {
        logo: '../../assets/angular.svg',
        name: 'Angular',
        description: 'Angular is a platform that makes it easy to build applications with the web. Angular combines declarative ' +
          'templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. ' +
          'Angular empowers developers to build applications that live on the web, mobile, or the desktop',
        url: 'https://angular.io/'
      }, {
        logo: '../../assets/angular-cli.svg',
        name: 'Angular CLI',
        description: 'The Angular CLI makes it easy to create an application that already works, right out of the box. ' +
          'It already follows our best practices!',
        url: 'https://cli.angular.io/'
      }, {
        logo: '../../assets/angular-material.svg',
        name: 'Angular Material',
        description: 'Angular team\'s Material Design components built for and with Angular.',
        url: 'https://material.angular.io/'
      }, {
        logo: '../../assets/angular-forms.svg',
        name: 'Angular Reactive Forms',
        description: 'Reactive forms provide a model-driven approach to handling form inputs whose values change over time. ' +
          'This guide shows you how to create and update a simple form control, progress to using multiple controls in a group, ' +
          'validate form values, and implement more advanced forms.',
        url: 'https://angular.io/guide/reactive-forms'
      }, {
        logo: '../../assets/angular-pwa.svg',
        name: 'Angular PWA',
        description: 'Angular schematics for building PWA.',
        url: 'https://developers.google.com/web/progressive-web-apps/'
      }, {
        logo: '../../assets/firebase-logo.png',
        name: 'Firebase',
        description: 'Firebase is Google\'s mobile platform that helps you quickly develop high-quality apps and grow your business. ' +
          'Firebase gives you the tools to develop high-quality apps, grow your user base, and earn more money. We cover the ' +
          'essentials so you can monetize your business and focus on your users.',
        url: 'https://firebase.google.com/'
      }
    ];
  }
}


