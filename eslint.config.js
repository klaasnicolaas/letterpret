import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier";

const config = [
  { ignores: ["components/ui/**"] },
  ...nextConfig,
  prettierConfig,
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default config;
