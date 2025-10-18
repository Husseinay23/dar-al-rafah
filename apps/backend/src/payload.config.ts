import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { slateEditor } from "@payloadcms/richtext-slate";
import { seoPlugin } from "@payloadcms/plugin-seo";

// Collections
import { Users } from "./collections/Users";
import { Topics } from "./collections/Topics";
import { Media } from "./collections/Media";
import { Courses } from "./collections/Courses";
import { Lessons } from "./collections/Lessons";
import { News } from "./collections/News";
import { Papers } from "./collections/Papers";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@": require("path").resolve(__dirname, "src"),
        },
      },
    }),
  },
  collections: [Users, Topics, Media, Courses, Lessons, News, Papers],
  globals: [],
  typescript: {
    outputFile: require("path").resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: require("path").resolve(
      __dirname,
      "generated-schema.graphql"
    ),
  },
  plugins: [
    seoPlugin({
      collections: ["courses", "news", "papers"],
    }),
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  editor: slateEditor({}),
  secret: process.env.PAYLOAD_SECRET,
  typescript: {
    outputFile: require("path").resolve(__dirname, "payload-types.ts"),
  },
  serverURL:
    process.env.PAYLOAD_PUBLIC_SERVER_URL ||
    `http://localhost:${process.env.PORT || 4000}`,
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
  localization: {
    locales: [
      {
        label: "العربية",
        code: "ar",
      },
      {
        label: "English",
        code: "en",
      },
      {
        label: "Français",
        code: "fr",
      },
    ],
    defaultLocale: "ar",
    fallback: true,
  },
  cors: [process.env.PAYLOAD_PUBLIC_FRONTEND_URL || "http://localhost:5173"],
  csrf: [process.env.PAYLOAD_PUBLIC_FRONTEND_URL || "http://localhost:5173"],
});
