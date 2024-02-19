import Sidebar from '@/components/common/Sidebar';
import Singlepost from '@/components/common/Singlepost';
import Instagram from '@/components/Instagram';
import Loader from '@/components/loader/Loader';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [blogData, setBlogData] = useState([]);
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);
  const [count, setCount] = useState(1);
  const [buttonLoader, setButtonLoader] = useState(false);

  useEffect(() => {
    fetchData(count);
  }, []);

  const fetchData = (e) => {
    setButtonLoader(true);
    fetch(global.api + 'fetch_category_post?page=' + e)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setData(data.data);
          setBlogData([...blogData, ...data.data.data]);
        } else {
          setData({});
          setBlogData([]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
        setButtonLoader(false);
      });
  };

  const updateData = () => {
    setCount(count + 1);
    fetchData(count + 1);
  };

  return (
    <>
      <Head>
        <title>Nivarana</title>
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
      {loader ? (
        <Loader />
      ) : (
        <>
          <section className="main-content">
            <div className="container-xl">
              <div className="row gy-4">
                <div className="col-lg-8">
                  {blogData.map((values, index) => {
                    return <Singlepost item={values} key={index} />;
                  })}
                  {data.next_page_url != null &&
                    (buttonLoader ? (
                      <div className="d-flex align-item-center justify-content-center">
                        <button className="btn btn-default " disabled>
                          Loading...
                        </button>
                      </div>
                    ) : (
                      <div className="d-flex align-item-center justify-content-center">
                        <button
                          className="btn btn-default"
                          onClick={() => updateData()}
                        >
                          Load More
                        </button>
                      </div>
                    ))}
                </div>
                <div className="col-lg-4">
                  <Sidebar />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {/* <HomePageContent data={data} /> */}
      <Instagram />
    </>
  );
}
