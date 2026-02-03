import React from "react";
import { Link } from "react-router-dom";

const RELATIVE_PATH_REGEX = /(?<=\s)\/[a-zA-Z0-9-_\/]+/g;

function displayFromPath(path: string) {
  const parts = path.split("/").filter(Boolean);
  const last = parts[parts.length - 1] || "";
  return last.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function useLinkify() {
  function linkifyChildren(children: React.ReactNode): React.ReactNode[] {
    const arr = React.Children.toArray(children);

    return arr.flatMap((child, idx) => {
      if (typeof child === "string") {
        const text = child;
        const matches = text.match(RELATIVE_PATH_REGEX);
        if (!matches) return text;

        const parts = text.split(RELATIVE_PATH_REGEX);
        const out: React.ReactNode[] = [];

        for (let i = 0; i < parts.length; i++) {
          if (parts[i]) out.push(parts[i]);
          if (matches[i]) {
            const path = matches[i];
            out.push(
              <Link
                key={`link-${idx}-${i}`}
                to={path.trim()}
                className="text-primary hover:underline font-medium"
              >
                {displayFromPath(path.trim())}
              </Link>
            );
          }
        }
        return out;
      }

      if (React.isValidElement(child)) {
        const element = child as React.ReactElement<{ children?: React.ReactNode }>;
        if (element.props.children) {
          return React.cloneElement(element, {
            ...element.props,
            children: linkifyChildren(element.props.children),
          });
        }
      }

      return child;
    });
  }

  function pruneEmptyTextNodes(children: React.ReactNode) {
    const arr = React.Children.toArray(children);
    return arr.filter((c) => (typeof c === "string" ? c.trim() !== "" : true));
  }

  return { linkifyChildren, pruneEmptyTextNodes };
}
