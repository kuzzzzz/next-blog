import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/post";

export default function Post({ postData }) {
  console.log(postData);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {new Date(postData.published.split("T")[0]).toDateString()}
        </div>
        <div className={utilStyles.lightText}>
          By--{postData.author.displayName}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  //  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // console.log(params)
  const postData = await getPostData(params.id);
  // console.log(postData);
  return {
    props: {
      postData,
    },
  };
}

// 3557564880715745117;
// 1085537155911424167;
// 4213492248518831344;
// 2083225942900963577;
