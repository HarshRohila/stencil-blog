import { Component, h } from '@stencil/core';

const posts = [
  {
    title: 'About me',
    content: 'A Passionate Software Engineer',
  },
  {
    title: 'Techs explored',
    content: 'Ember js',
  },
  {
    title: 'Ember js',
    content:
      "I looked into various frontend frameworks/libraries but haven't found anything similar to Ember Data",
  },
  {
    title: 'Ember Data',
    content:
      'Ember Data provides an abstraction for <b>data source</b> in your app. Most apps consumes some form of REST APIs (which is a type of data source). Using ember data its very simple to use REST API',
  },
];
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        {posts.map(post => (
          <post-component post={post}></post-component>
        ))}

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
