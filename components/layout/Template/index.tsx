import React from 'react';
import Footer from '../Footer';

import { Type as FooterType } from '../../../globals/Footer';
import { Type as SocialMediaType } from '../../../globals/SocialMedia';

type Props = {
  footer: FooterType,
  socialMedia: SocialMediaType,
}

const Template: React.FC<Props> = ({ children, footer, socialMedia }) => (
  <React.Fragment>
    {children}
    <Footer
      footer={footer}
      socialMedia={socialMedia}
    />
  </React.Fragment>
);

export default Template;
