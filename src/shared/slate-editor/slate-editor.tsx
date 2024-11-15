// import { useEffect } from "react";
import Editor from "react-simple-wysiwyg";

export const SlateEditor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  return <Editor value={value} onChange={(e) => onChange(e.target.value)} style={{ minHeight: "200px" }} />;
};
