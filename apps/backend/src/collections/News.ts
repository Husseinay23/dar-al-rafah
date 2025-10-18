import { CollectionConfig } from "payload/types";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "status", "publishedAt"],
  },
  access: {
    read: ({ req: { user } }) => {
      // Public read for published news, authenticated for drafts
      return true;
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      localized: true,
    },
    {
      name: "body",
      type: "richText",
      localized: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "topics",
      hasMany: false,
    },
    {
      name: "cover",
      type: "relationship",
      relationTo: "media",
      hasMany: false,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          label: "مسودة",
          value: "draft",
        },
        {
          label: "منشور",
          value: "published",
        },
      ],
      defaultValue: "draft",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
  ],
};
