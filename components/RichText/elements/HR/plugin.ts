import { Editor, Element as SlateElement } from 'slate';

const withHR = (incomingEditor: Editor): Editor => {
  const editor = incomingEditor;
  const { isVoid } = editor;

  editor.isVoid = (element) => (SlateElement.isElementType(element, 'hr') ? true : isVoid(element));

  return editor;
};

export default withHR;
