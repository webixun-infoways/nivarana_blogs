import Sidebar from '@/components/common/Sidebar';
import Head from 'next/head';
import Link from 'next/link';
import { Component } from 'react';

export class submissionGuidelines extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Submission Guidelines | Nivarana</title>
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
              <h1 className="mt-0 mb-2">Submission Guidelines</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Submission Guidelines
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
                    We welcome evidence-based articles that will help readers
                    understand the state of public health in India. Our magazine
                    focuses on breaking down health programs and policies in
                    India and decoding publically available data on various
                    public health issues. As cancer is one of the rapidly
                    growing public health concerns, we have sections focusing on
                    preventive and supportive oncology. We are committed to
                    being an inclusive platform and aim to address the issues of
                    various sections of society.
                  </p>
                  <p>
                    If you wish to write for us, email your pitch (max 400
                    words) to{' '}
                    <a href="mailto:nivarana.for.india@gmail.com">
                      nivarana.for.india@gmail.com
                    </a>{' '}
                    indicating the category your article will fit in, relevance
                    of your subject, evidence you wish to bring to light, who
                    you are, and why you are the right person to write about the
                    mentioned issue. Contributors assume responsibility for
                    confirming the factual content and originality of their
                    pieces. Nivarana is editorially independent and the
                    editorial decision solely rests with the editor. We
                    currently do not offer any honorarium for submitted
                    articles.
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

export default submissionGuidelines;
