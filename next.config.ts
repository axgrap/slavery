import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  modularizeImports: {
    "react-icons/?(((\\w*)?/?)*)": {
      transform: "@react-icons/all-files/{{ matches.[1] }}/{{ member }}",
      skipDefaultConversion: true,
    },
  },
};

export default nextConfig;
