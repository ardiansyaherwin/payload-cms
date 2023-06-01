import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import { Text, Element as SlateElement } from 'slate';
import RedHeadline from './leaves/RedHeadline/Component';
import RedUnderline from './leaves/RedUnderline/Component';

const serialize = (children: any): React.ReactElement[] => children.map((node, i: number) => {
  if (Text.isText(node)) {
    let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />;

    if (SlateElement.isElementType(node, 'bold')) {
      text = (
        <strong key={i}>
          {text}
        </strong>
      );
    }

    if (node['red-headline']) {
      text = (
        <RedHeadline>
          {text}
        </RedHeadline>
      );
    }

    if (node['red-underline']) {
      text = (
        <RedUnderline>
          {text}
        </RedUnderline>
      );
    }

    if (SlateElement.isElementType(node, 'code')) {
      text = (
        <code key={i}>
          {text}
        </code>
      );
    }

    if (SlateElement.isElementType(node, 'italic')) {
      text = (
        <em key={i}>
          {text}
        </em>
      );
    }

    if (SlateElement.isElementType(node, 'underline')) {
      text = (
        <span
          style={{ textDecoration: 'underline' }}
          key={i}
        >
          {text}
        </span>
      );
    }

    if (SlateElement.isElementType(node, 'strikethrough')) {
      text = (
        <span
          style={{ textDecoration: 'line-through' }}
          key={i}
        >
          { text}
        </span>
      );
    }

    return (
      <Fragment key={i}>
        {text}
      </Fragment>
    );
  }

  if (!node) {
    return null;
  }

  switch (node.type) {
    case 'h1':
      return (
        <h1 key={i}>
          {serialize(node.children)}
        </h1>
      );
    case 'h2':
      return (
        <h2 key={i}>
          {serialize(node.children)}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={i}>
          {serialize(node.children)}
        </h3>
      );
    case 'h4':
      return (
        <h4 key={i}>
          {serialize(node.children)}
        </h4>
      );
    case 'h5':
      return (
        <h5 key={i}>
          {serialize(node.children)}
        </h5>
      );
    case 'h6':
      return (
        <h6 key={i}>
          {serialize(node.children)}
        </h6>
      );
    case 'quote':
      return (
        <blockquote key={i}>
          {serialize(node.children)}
        </blockquote>
      );
    case 'ul':
      return (
        <ul key={i}>
          {serialize(node.children)}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i}>
          {serialize(node.children)}
        </ol>
      );
    case 'li':
      return (
        <li key={i}>
          {serialize(node.children)}
        </li>
      );
    case 'link':
      return (
        <a
          href={escapeHTML(node.url)}
          key={i}
        >
          {serialize(node.children)}
        </a>
      );

    case 'hr':
      return (
        <hr key={i} />
      );

    default:
      return (
        <p key={i}>
          {serialize(node.children)}
        </p>
      );
  }
});

export default serialize;
