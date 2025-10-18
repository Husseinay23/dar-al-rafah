import { CollectionConfig } from "payload/types";

export const Papers: CollectionConfig = {
  slug: "papers",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "year", "status"],
  },
  access: {
    read: ({ req: { user } }) => {
      // Public read for published papers, authenticated for drafts
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
      name: "abstract",
      type: "textarea",
      localized: true,
    },
    {
      name: "authors",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "affiliation",
          type: "text",
        },
        {
          name: "email",
          type: "email",
        },
      ],
    },
    {
      name: "year",
      type: "number",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "topics",
      type: "relationship",
      relationTo: "topics",
      hasMany: true,
    },
    {
      name: "pdf",
      type: "relationship",
      relationTo: "media",
      hasMany: false,
    },
    {
      name: "doi",
      type: "text",
      admin: {
        position: "sidebar",
        description: "Digital Object Identifier",
      },
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
