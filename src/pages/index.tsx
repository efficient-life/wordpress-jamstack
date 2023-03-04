import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import fetch from 'node-fetch';
import React from 'react';

type Props = {
  contentHtml: string;
};

const Home: NextPage<Props> = ({ contentHtml }) => {
  // const changeUrlHtmlData = contentHtml.replace(
  //   new RegExp(`https://effil.net`, 'g'),
  //   'localhost:3333',
  // );

  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await fetch('https://effil.net/puroguram/post-260/?_embed');
  const html = await response.text();
  return {
    props: {
      contentHtml: html,
    },
  };
  // const response = await fetch('http://localhost:3333/api/wp');
  // const { contentHtml } = (await response.json()) as { contentHtml: string };
  // return {
  //   props: {
  //     contentHtml,
  //   },
  // };
};
export default Home;
