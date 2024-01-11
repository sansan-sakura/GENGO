import "./styles.scss";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, Editor, useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MenuBar } from "./MenuBar";
import { useCallback, useEffect, useState } from "react";

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

const Editer = () => {
  const [html, setHtml] = useState(null);

  const editor = useEditor({
    content: `
        <p>
          Wow, this editor instance exports its content as HTML.
        </p>
      `,
    extensions: [StarterKit],
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setHtml(html);
    },
  });
  console.log(html, "editor");
  useEffect(() => {
    if (!editor) {
      return undefined;
    }

    // Get the initial content …
    setHtml(editor.getHTML());

    // … and get the content after every change.
    editor.on("update", () => {
      setHtml(editor.getHTML());
    });
  }, [editor]);

  const setContent = useCallback(() => {
    // You can pass a HTML document to the editor.
    editor.commands.setContent(
      `
        <p>
          It’s 19871. You can’t turn on a radio, or go to a mall without hearing Olivia Newton-John’s hit song, Physical.
        </p>
      `,
      true
    );

    // It’s likely that you’d like to focus the Editor after most commands.
    editor.commands.focus();
  }, [editor]);

  const clearContent = useCallback(() => {
    editor.chain().clearContent(true).focus().run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="actions">
        <button className="button" onClick={setContent}>
          Set Content
        </button>
        <button className="button" onClick={clearContent}>
          Clear Content
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          Italic
        </button>
      </div>

      <EditorContent editor={editor} />

      <div className="export">
        <h3>HTML</h3>
        <pre>
          <code>{html}</code>
        </pre>
      </div>
    </>
  );
};
export default Editer;
