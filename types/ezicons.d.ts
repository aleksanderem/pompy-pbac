declare namespace JSX {
  interface IntrinsicElements {
    "easier-icon": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        name: string;
        variant?: "stroke" | "solid" | "bulk" | "duotone" | "twotone";
        corners?: "rounded" | "sharp" | "standard";
        size?: string | number;
        color?: string;
        "stroke-width"?: string | number;
      },
      HTMLElement
    >;
  }
}
