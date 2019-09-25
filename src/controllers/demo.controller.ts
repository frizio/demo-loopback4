import {get} from '@loopback/rest';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

export class DemoController {
  @get('/demo')
  demo(): string {
    return 'Hello world';
  }
}
