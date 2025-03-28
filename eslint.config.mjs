import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "next/typescript",
      "prettier",
    ],
    parser: "@typescript-eslint/parser",
    // rules: {
    //   '@typescript-eslint/no-explicit-any': 'error',
    // },
  }),
];

export default eslintConfig;
