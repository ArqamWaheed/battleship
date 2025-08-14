import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: {
      js,
    },
    extends: ["js/recommended", prettier],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
]);
