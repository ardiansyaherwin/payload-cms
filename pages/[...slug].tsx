import React from 'react';
import payload from 'payload';
import { GetServerSideProps } from 'next';
import getConfig from 'next/config';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { Type as PageType } from '../collections/Page';
import NotFound from '../components/NotFound';
import Head from '../components/Head';
import RenderBlocks from '../components/RenderBlocks';
import GridContainer from '../components/layout/GridContainer';
import Template from '../components/layout/Template';
import { FooterProps } from '../components/layout/Footer';

const { publicRuntimeConfig: { SERVER_URL } } = getConfig();

export type Props = {
  page?: PageType
  statusCode: number,
} & FooterProps

const Page: React.FC<Props> = (props) => {
  const { page, footer, socialMedia } = props;

  if (!page) {
    return <NotFound />;
  }

  return (
    <Template
      footer={footer}
      socialMedia={socialMedia}
    >
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <header className="classes.header">
        <h1>{page.title}</h1>
      </header>
      <div className="classes.featuredImage">
        {page.image && (
          <img
            src={`${SERVER_URL}/media/${page.image.sizes?.feature?.filename || page.image.filename}`}
            alt={page.image.alt}
          />
        )}
      </div>
      <RenderBlocks layout={page.layout} />
      <GridContainer>
        <Grid>
          <Cell cols={6}>
            left content
          </Cell>
          <Cell cols={6}>
            right content
          </Cell>
        </Grid>
      </GridContainer>
    </Template>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug ? (ctx.params.slug as string[]).join('/') : 'home';

  const pageQuery = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!pageQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: pageQuery.docs[0],
    },
  };
};
