import Sidebar from '@/components/common/Sidebar';
import Head from 'next/head';
import Link from 'next/link';
import { Component } from 'react';

export class contactUs extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Contact Us | Nivarana</title>
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
            content="Nivarana: Diverse, insightful platform with engaging content on tech, lifestyle, and more. Foster intellectual growth and community enrichment."
          />
          <meta
            name="keywords"
            content="Nivarana, Weazy Infotech, Technology, Nivarana,Innovation,Lifestyle,Education,Health,Travel,Science,Entertainment,Reviews,Insights,Blogging,Trends,Opinions,Ideas,Inspiration"
          />
          <meta name="author" content="Weazy Infotech Pvt. Ltd," />
          {/* ogtags */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="Nivarana" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://blogs.weazy.in" />
          <meta
            property="og:image"
            content="https://blogs.weazy.in/images/package/favicon-192x192.png"
          />
          <meta property="og:site_name" content="Nivarana" />
          <meta
            property="og:description"
            content="Nivarana: Diverse, insightful platform with engaging content on tech, lifestyle, and more. Foster intellectual growth and community enrichment."
          />
          {/* twitter tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="https://blogs.weazy.in" />
          <meta name="twitter:creator" content="Nivarana" />
          <meta name="twitter:title" content="Nivarana" />
          <meta
            name="twitter:description"
            content="Nivarana: Diverse, insightful platform with engaging content on tech, lifestyle, and more. Foster intellectual growth and community enrichment."
          />
          <meta
            name="twitter:image"
            content="https://blogs.weazy.in/images/package/favicon-192x192.png"
          />
        </Head>
        <section className="page-header my-2">
          <div className="container-xl">
            <div className="text-center">
              <h1 className="mt-0 mb-2">Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
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
                  <p>
                    Write to us if you wish to join our team. Tell us about your
                    interests, skills, and motivation to join, and email your CV
                    to{' '}
                    <a href="mailto:parth.sharma@nivarana.org">
                      parth.sharma@nivarana.org
                    </a>
                    .
                  </p>
                  <p>
                    If you wish to lead an awareness session for Nivarana please
                    write to us{' '}
                    <a href="mailto:nivarana.for.india@gmail.com">
                      (nivarana.for.india@gmail.com)
                    </a>{' '}
                    mentioning the topic you would like to cover and why you are
                    the right person to conduct the awareness session.
                  </p>
                  <p>
                    If you wish to collaborate with us, if you wish to support
                    us or wish to re-publish our work please write to{' '}
                    <a href="mailto:parth.sharma@nivarana.org">
                      parth.sharma@nivarana.org
                    </a>
                    .
                  </p>
                  <p>
                    Please check the ‘Submission Guidelines’ if you wish to
                    write for us.
                  </p>
                  <strong>Support Us</strong>
                  <p>
                    We are currently not a registered organization. However, you
                    can still help us. If you wish to support us in any way
                    please write to{' '}
                    <a href="mailto:parth.sharma@nivarana.org">
                      parth.sharma@nivarana.org
                    </a>{' '}
                    and our founding editor will share more details with you.
                  </p>
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
}

export default contactUs;
