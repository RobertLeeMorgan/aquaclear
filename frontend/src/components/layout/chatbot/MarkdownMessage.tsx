import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useLinkify from "../../hooks/useLinkify";

export default function MarkdownMessage({ children }: { children: string }) {
  const { linkifyChildren, pruneEmptyTextNodes } = useLinkify();

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p({ node, ...props }) {
          const cleaned = pruneEmptyTextNodes(props.children);
          return <p>{linkifyChildren(cleaned)}</p>;
        },
        a({ node, ...props }) {
          const cleaned = pruneEmptyTextNodes(props.children);
          return <a className="font-semibold text-primary cursor-pointer hover:underline">{linkifyChildren(cleaned)}</a>;
        },
        ul({ node, ...props }) {
          const cleaned = pruneEmptyTextNodes(props.children);
          return <ul className="list-disc my-0">{cleaned}</ul>;
        },
        ol({ node, ...props }) {
          const cleaned = pruneEmptyTextNodes(props.children);
          return <ol className="list-disc my-0">{cleaned}</ol>;
        },
        li({ node, ...props }) {
          const cleaned = pruneEmptyTextNodes(props.children);
          return <li className="ml-4 mb-4 list-disc">{linkifyChildren(cleaned)}</li>;
        },
        h1({ node, ...props }) {
          const cleaned = pruneEmptyTextNodes(props.children);
          return <h1 className="text-lg font-semibold">{linkifyChildren(cleaned)}</h1>;
        },
        h2({ node, ...props }) {
          const cleaned = pruneEmptyTextNodes(props.children);
          return <h2 className="text-base font-semibold">{linkifyChildren(cleaned)}</h2>;
        },
         h3({ node, ...props }) {
          const cleaned = pruneEmptyTextNodes(props.children);
          return <h2 className="text-base font-semibold">{linkifyChildren(cleaned)}</h2>;
        },
        strong({ node, ...props }) {
          const cleaned = pruneEmptyTextNodes(props.children);
          return <strong>{linkifyChildren(cleaned)}</strong>;
        },
        span({ node, ...props }) {
          const cleaned = pruneEmptyTextNodes(props.children);
          return <span>{linkifyChildren(cleaned)}</span>;
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
