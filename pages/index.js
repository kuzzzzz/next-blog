import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { getPost, getAllPostIds } from "../lib/post";

export async function getStaticProps() {
  const allPostsIds = await getAllPostIds();
  const allPostsData = await getPost();

  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  // console.log(allPostsData["items"]);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          This is a personal message from lord kuzzz the great conqueror and
          sacker of worlds to ceenan the peaceable and gentle saviour of worlds,
          welcome to the den of champions and war room of warriors....
          {` `}
        </p>
        Haha cringe anime messages... lol I don't know what to type as welcome
        home message and didn't feel like going with the regular cheesy stuff.
        {` `}
        <p>I am Just glad and excited that you are coming today. {"<" + "3"}</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.items.map(({ id, author, published, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {new Date(published.split("T")[0]).toDateString()}
              </small>
              <br />
              <small className={utilStyles.lightText}>
                By--{author.displayName}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
