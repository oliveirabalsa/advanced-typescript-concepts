// TS index.ts

let str: string;
str = "whatever you want";

let strLiteral: "hello";
strLiteral = "hello";

// Error: not 'hello'
strLiteral = "anything else is an error";

templateLiteral = "Example: hello";
let templateLiteral: `Example: ${string}`;
templateLiteral = "Example: world";

// Error: not 'Example: ${string}`
templateLiteral = "without a Example prefix";

///////////////////////////////////////

// TS index.ts

type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary";
type Style = `${Size}-${Color}`;

/**
 * @param style is a combination of
 * Size: 'small' or 'medium' or 'large'
 * Color: 'primary' or 'secondary!
 * e.g. 'small-secondary'
 */
function applyStyle(style: Style) {}

applyStyle("small-primary");
applyStyle("large-secondary");
// Error: not Style
applyStyle("medim-primary");
