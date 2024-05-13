import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { Roboto_Slab } from "next/font/google";

import "./app/globals.css";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
});

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className={robotoSlab.className}>{children}</h1>,
    h2: ({ children }) => <h2 className={robotoSlab.className}>{children}</h2>,
    h3: ({ children }) => <h3 className={robotoSlab.className}>{children}</h3>,
    h4: ({ children }) => <h4 className={robotoSlab.className}>{children}</h4>,
    h5: ({ children }) => <h5 className={robotoSlab.className}>{children}</h5>,
    h6: ({ children }) => <h6 className={robotoSlab.className}>{children}</h6>,

    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
