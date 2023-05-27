/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Field } from 'payload/types';
import { Type as PageType } from '../collections/Page';

export type Type = {
  type: 'page' | 'custom'
  label: string
  page?: PageType
  url?: string
}

const link: Field = {
  name: 'link',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'radio',
      defaultValue: 'page',
      options: [
        {
          value: 'page',
          label: 'Page',
        },
        {
          value: 'custom',
          label: 'Custom URL',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'page',
          label: 'Page to link to',
          type: 'relationship',
          relationTo: 'pages', // collections:Page
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'page',
            width: '50%',
          },
        },
        {
          name: 'url',
          label: 'Custom URL',
          type: 'text',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'custom',
            width: '50%',
          },
        },
      ],
    },
  ],
};

export default link;
