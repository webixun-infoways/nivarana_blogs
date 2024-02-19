import Sidebar from '@/components/common/Sidebar';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function staticPage() {
  const router = useRouter();
  const [data, setData] = React.useState({});

  useEffect(() => {
    fetchData(router.query.staticPageSingle);
  }, [router.query.staticPageSingle]);

  const fetchData = async (e) => {
    try {
      const res = await fetch(global.api + 'fetch_static_page/' + e);
      const data = await res.json();
      setData(data.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <Head>
        <title>{data.page_title} | Nivarana</title>
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
          content="Nivarana is India's public health awareness and advocacy platform that aims to bring a change by making public health-related information and stories more understandable and accessible to the general public."
        />
        <meta
          name="keywords"
          content="Public health, advocacy, research, India, health information, cancer, health, health information, health policy, health programs, digital health, awareness, health poetry"
        />
        <meta name="author" content="Weazy Infotech Pvt. Ltd," />
        {/* ogtags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Nivarana" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://nivarana.org" />
        <meta
          property="og:image"
          content="https://nivarana.org/images/package/favicon-192x192.png"
        />
        <meta property="og:site_name" content="Nivarana" />
        <meta
          property="og:description"
          content="Nivarana is India's public health awareness and advocacy platform that aims to bring a change by making public health-related information and stories more understandable and accessible to the general public."
        />
        {/* twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://nivarana.org" />
        <meta name="twitter:creator" content="Nivarana" />
        <meta name="twitter:title" content="Nivarana" />
        <meta
          name="twitter:description"
          content="Nivarana is India's public health awareness and advocacy platform that aims to bring a change by making public health-related information and stories more understandable and accessible to the general public."
        />
        <meta
          name="twitter:image"
          content="https://nivarana.org/images/package/favicon-192x192.png"
        />
      </Head>
      <section className="page-header my-2">
        <div className="container-xl">
          <div className="text-center">
            <h1 className="mt-0 mb-2">{data.page_title}</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {data.page_title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="main-content">
        <div className="container-xl">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="page-content bordered rounded padding-30">
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.description,
                  }}
                />
              </div>
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

export default staticPage;
