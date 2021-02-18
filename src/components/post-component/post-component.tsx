import { Component, Host, h, Prop, State } from '@stencil/core';

export interface Post {
  title: string;
  content: string;
}

@Component({
  tag: 'post-component',
  styleUrl: 'post-component.scss',
  shadow: true,
})
export class PostComponent {
  @Prop() post: Post;

  @State() isEditMode = false;

  render() {
    const { title, content } = this.post;
    return (
      <Host>
        {this.renderTitle()}
        <p>{content}</p>
      </Host>
    );
  }

  private renderTitle() {
    if (this.isEditMode) {
      const handleSubmit = () => {};

      return (
        <form onSubmit={handleSubmit}>
          <input type="text" value={this.post.title} />
          <input type="submit" value="Save" />
        </form>
      );
    } else {
      return (
        <h1>
          <button onClick={this.handleTitleEdit.bind(this)}>Edit</button>
          {this.post.title}
        </h1>
      );
    }
  }

  private handleTitleEdit() {
    this.isEditMode = true;
  }
}
