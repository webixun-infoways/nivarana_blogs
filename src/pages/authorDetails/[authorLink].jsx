import Sidebar from '@/components/common/Sidebar';
import Singlepost from '@/components/common/Singlepost';
import Breadcrumb from '@/layoutComponents/Breadcrumb';
import Head from 'next/head';

function authorDetails({ data }) {
  return (
    <>
      <Head>
        <title>{data.author_name + ' | Nivarana'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/package/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/package/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/package/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/package/site.webmanifest" />
        {/* meta tags */}
        <meta
          name="description"
          content={
            data.meta_description !== null
              ? data.meta_description
              : 'Nivarana: Diverse, insightful platform with engaging content on tech, lifestyle, and more. Foster intellectual growth and community enrichment.'
          }
        />
        <meta
          name="keywords"
          content={
            data.meta_keyword !== null
              ? data.meta_keyword
              : 'Nivarana, Weazy Infotech, Technology, Nivarana,Innovation,Lifestyle,Education,Health,Travel,Science,Entertainment,Reviews,Insights,Blogging,Trends,Opinions,Ideas,Inspiration'
          }
        />
        <meta name="author" content="Weazy Infotech Pvt. Ltd," />
        {/* ogtags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={data.author_name + ' | Nivarana'} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={'https://blogs.weazy.in/authorDetails/' + data.path}
        />
        <meta
          property="og:image"
          content="https://blogs.weazy.in/images/package/favicon-192x192.png"
        />
        <meta property="og:site_name" content="Nivarana" />
        <meta
          property="og:description"
          content={
            data.meta_description !== null
              ? data.meta_description
              : 'Nivarana: Diverse, insightful platform with engaging content on tech, lifestyle, and more. Foster intellectual growth and community enrichment.'
          }
        />
        {/* twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://blogs.weazy.in" />
        <meta name="twitter:creator" content="Nivarana" />
        <meta name="twitter:title" content={data.author_name + ' | Nivarana'} />
        <meta
          name="twitter:description"
          content={
            data.meta_description !== null
              ? data.meta_description
              : 'Nivarana: Diverse, insightful platform with engaging content on tech, lifestyle, and more. Foster intellectual growth and community enrichment.'
          }
        />
        <meta
          name="twitter:image"
          content="https://blogs.weazy.in/images/package/favicon-192x192.png"
        />
      </Head>
      <Breadcrumb pageName={data.author_name} />
      <section className="main-content">
        <div className="container-xl">
          <div className="row gy-4">
            <div className="col-lg-12">
              <div className="about-author mb-4 padding-30 rounded row">
                {data.upload_image != null && (
                  <div className="col-md-2 col-sm-2 thumb d-flex justify-content-center align-items-center">
                    <img
                      src={global.img_link + data.upload_image}
                      className="author"
                      alt="author"
                    />
                  </div>
                )}
                <div
                  className={
                    data.upload_image != null
                      ? 'col-md-10 col-sm-10 details'
                      : 'col-md-12 col-sm-12 details'
                  }
                >
                  <h4 className="name mb-0">{data.author_name}</h4>
                  {data.first_peragraph != null && (
                    <p
                      className="mt-2"
                      dangerouslySetInnerHTML={{
                        __html: data.first_peragraph,
                      }}
                    />
                  )}
                  {data.description != null && (
                    <p
                      className="mt-2"
                      dangerouslySetInnerHTML={{
                        __html: data.description,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              {data.blogs.length > 0 && (
                <div className="row gy-4">
                  {data.blogs.map((item, index) => (
                    <Singlepost item={item} key={index} />
                  ))}
                </div>
              )}
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const { authorLink } = context.query;
  const res = await fetch(global.api + 'fetch_author?blog_path=' + authorLink);
  const data = await res.json();
  if (!data.status) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data.data[0],
    },
  };
}

export const config = {
  runtime: 'experimental-edge',
};

export default authorDetails;
