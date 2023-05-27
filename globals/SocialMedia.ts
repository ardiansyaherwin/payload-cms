import { GlobalConfig } from 'payload/types';
import link from '../fields/link';

const SocialMedia: GlobalConfig = {
  slug: 'social-media',
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      type: 'array',
      fields: [
        link,
      ],
    },
  ],
};

export default SocialMedia;
