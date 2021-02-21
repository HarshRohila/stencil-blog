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
        <div class="content">
          <h1>Framework vs Library</h1>
          <p>
            Many people use these terms interchangeably but this is important to
            know. There are not just frontend frameworks but backend frameworks
            too. React is considered a UI library, but Angular, Ember are
            frameworks.
          </p>

          <h3>Framework</h3>
          <ul>
            <li>
              Framework is an application. Its having various classes/concepts
              (eg controller, service, routes)
            </li>
            <li>
              Framework app decides when and how to create objects from these
              classes.
            </li>
            <li>
              Devs using frameworks only need to define classes of particular
              type(controller, service etc) and framework apps will take care of
              creating objects.
            </li>
            <li>
              For eg, generally services are singleton, so framework ensures
              single instance of services across application
            </li>
            <li>
              This is also called <b>dependency injection</b>, as framework
              takes care of creating objects instead of developers
            </li>
            <li>
              Developers need not to take care of architecture of app, as its
              already decided by frameworks
            </li>
          </ul>

          <h3>Library</h3>
          <ul>
            <li>
              Library is not an app, it's just a collection of modules/classes.
            </li>
            <li>
              Devs can use these libraries by importing them in their projects
            </li>
            <li>
              Devs decide app architecture as library is not having its own
            </li>
          </ul>

          <p>
            So libraries are easy to use, just install and import. So it's
            easier for devs to get started with React compared to Angular and
            Ember
          </p>
          <p>
            Framework requires some learning about its components(controller,
            service etc) and about framework lifecycle and its component
            lifecycle.
          </p>

          <h4>So why to spend time learning frameworks?</h4>
          <ul>
            <li>
              Frameworks decides architecture for us, so there is less
              boilerplate code, less code less bugs :)
            </li>
            <li>
              The number of things already decided by framework determines how
              much opinionated it is.
            </li>
            <li>
              Ember is considered more opinionated than Angular. So Ember
              requires more learning time than Angular
            </li>
            <li>
              Things already decided by frameworks are as per best practices in
              software engineering
            </li>
            <li>
              Once dev learns a frameworks, it requires fewer decisions and app
              can be developed very fast
            </li>
            <li>
              All apps using a particular framework have the same structure.
              Frameworks like Ember provide a cli for file generation, so
              generated files follow a particular folder structure. So almost
              all Ember projects have same folder structure (which is not the
              case with React)
            </li>
          </ul>
        </div>

        {/* <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link> */}
      </div>
    );
  }
}
