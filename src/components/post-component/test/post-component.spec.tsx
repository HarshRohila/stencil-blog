import { newSpecPage } from '@stencil/core/testing';
import { PostComponent } from '../post-component';

describe('post-component', () => {
  it('renders post', async () => {
    const page = await newSpecPage({
      components: [PostComponent],
      html: `<post-component></post-component>`,
    });
    const component = await page.find('post-component');
    const title = await page.find('post-component >>> [data-test="title"]');

    expect(page.root).toEqualHtml(`
      <post-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </post-component>
    `);
  });
});
