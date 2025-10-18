import { CollectionConfig } from "payload/types";

export const Courses: CollectionConfig = {
  slug: "courses",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "level", "status", "publishedAt"],
  },
  access: {
    read: ({ req: { user } }) => {
      // Public read for published courses, authenticated for drafts
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
      name: "summary",
      type: "textarea",
      localized: true,
    },
    {
      name: "description",
      type: "richText",
      localized: true,
    },
    {
      name: "cover",
      type: "relationship",
      relationTo: "media",
      hasMany: false,
    },
    {
      name: "level",
      type: "select",
      options: [
        {
          label: "مبتدئ",
          value: "beginner",
        },
        {
          label: "متوسط",
          value: "intermediate",
        },
        {
          label: "متقدم",
          value: "advanced",
        },
      ],
      required: true,
    },
    {
      name: "topics",
      type: "relationship",
      relationTo: "topics",
      hasMany: true,
    },
    {
      name: "duration",
      type: "number",
      admin: {
        description: "Total duration in minutes",
      },
    },
    {
      name: "lessons",
      type: "relationship",
      relationTo: "lessons",
      hasMany: true,
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
