import { useState } from "react";
import Editor from "react-simple-wysiwyg";

export const SlateEditor = () => {
  const [html, setHtml] = useState("Type content here...");

  const onChange = (e: any) => {
    setHtml(e.target.value);
  };

  return <Editor value={html} onChange={onChange} />;
};
