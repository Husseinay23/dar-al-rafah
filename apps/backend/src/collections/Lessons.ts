import { CollectionConfig } from "payload/types";

export const Lessons: CollectionConfig = {
  slug: "lessons",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
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
      name: "body",
      type: "richText",
      localized: true,
    },
    {
      name: "videoUrl",
      type: "text",
      admin: {
        description: "YouTube or Vimeo URL",
      },
    },
    {
      name: "duration",
      type: "number",
      admin: {
        description: "Duration in minutes",
      },
    },
    {
      name: "order",
      type: "number",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "resources",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
        {
          name: "type",
          type: "select",
          options: [
            { label: "PDF", value: "pdf" },
            { label: "Link", value: "link" },
            { label: "Video", value: "video" },
          ],
          defaultValue: "link",
        },
      ],
    },
  ],
};
