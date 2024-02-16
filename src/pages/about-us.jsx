import Sidebar from '@/components/common/Sidebar';
import Head from 'next/head';
import Link from 'next/link';
import { Component } from 'react';

export class aboutUs extends Component {
  render() {
    return (
      <>
        <Head>
          <title>About Us | Nivarana</title>
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
              <h1 className="mt-0 mb-2">About Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
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
                  <div>
                    <p>
                      ‘Nivarana’, a word used in Sivapurana (religious Sanskrit
                      text in Hinduism) refers to ‘removing distress’.’
                    </p>
                    <p>
                      In Buddhism, ‘Nivarana’ means obstacles that blind our
                      mental vision – sensual desires, ill-will, slothfulness,
                      restlessness, doubts, and ignorance. One must overcome
                      these obstacles to attain nirvana. Nivarana was also the
                      name of a Bodhisattva (a person on the path to Buddhahood)
                      representing the encyclopedia of knowledge – the
                      Bodhisattva of wisdom.
                    </p>
                    <p>
                      Started in July 2022, Nivarana aims to address the barrier
                      of ignorance. India currently lacks a dedicated and
                      reliable source of public health-related information.
                      Nivarana is the first and only website dedicated to
                      matters concerning India’s public health. We aim to engage
                      the public with public health through extensively
                      researched yet simple-to-understand articles, online
                      awareness sessions, and interviews with pioneers in this
                      field. With cancer increasingly becoming a common problem,
                      a section of this website is dedicated to information on
                      cancer prevention and the care of cancer patients. Public
                      health needs attention, now more than ever.
                    </p>
                    <p>
                      It is time we conversed about things that really matter!
                    </p>
                  </div>
                  <div>
                    <b>About the Team :</b>
                    <p>
                      <strong>Parth Sharma - Founder and Lead Editor</strong> :
                      Parth is a physician, researcher, and writer. He graduated
                      from Christian Medical College, Vellore in 2020 and is
                      currently doing his MD in Preventive and Social Medicine
                      in Maulana Azad Medical College, Delhi, India. Having
                      witnessed a lot of suffering during his clinical practice
                      in the Departments of Medical Oncology and Emergency
                      Medicine, he wants to work to improve not just people’s
                      quality of life but also their quality of death. He is
                      interested in preventive and supportive oncology and wants
                      to work to improve the accessibility and affordability of
                      cancer care in India.
                    </p>
                    <p>
                      <strong>Christianez Ratna Kiruba - Deputy Editor</strong>
                    </p>
                    <p>
                      <strong>Divya Shrinivas - Managing Editor</strong> : Divya
                      Shrinivas is an MBBS intern at Government Medical College,
                      Ambajogai. Her interests are varied from being a
                      coordinator at an NGO which makes help accessible for
                      people suffering from substance use disorders to making
                      education accessible to underprivileged kids. She is
                      passionate about women and child health and is an aspiring
                      pediatrician with the hope of making quality healthcare
                      accessible to all children. <br />
                      In her free time, she enjoys reading, petting stray
                      animals, and watching wildlife documentaries.
                    </p>
                    <p>
                      <strong>Radhikaa Sharma - Associate Editor</strong> :
                      Radhikaa is a 2019 MBBS graduate from Assam Medical
                      College, who wishes to learn about and generate interest
                      in public health. She has worked as a medical officer for
                      the National Health Mission, where she saw the benefits of
                      primary and preventive healthcare firsthand. In her free
                      time, Radhikaa can be found reading fiction, non-fiction,
                      and open-access journals.
                    </p>
                    <p>
                      <strong>Royson Dsouza - Writer</strong> : Royson is a
                      general surgeon with a special interest in global and
                      rural surgery. He completed his MS in General Surgery from
                      Christian Medical College Vellore in 2020. He then worked
                      in Gudalur Adivasi Hospital, an organization striving for
                      the health and welfare of the tribals in the Nilgiris.
                      <br />
                      He is currently pursuing a fellowship in Colorectal
                      Surgery at Christian Medical College, Vellore. He has
                      several publications focusing on rural health care.
                      Besides surgery he loves his family, playing basketball,
                      trekking, biking, and cooking.
                    </p>
                    <p>
                      <strong>Janvi Bokoliya- Content Designer </strong> : Janvi
                      is a student in her pre-final year of MBBS at Maulana Azad
                      Medical College. She has a strong interest in public
                      health and social issues and enjoy reading fiction, doing
                      calligraphy, and watching documentaries in their free
                      time. She is poised to make a meaningful contribution to
                      society in the future.
                    </p>
                  </div>
                  <div>
                    <b>Our Advisors :</b>
                    <p>
                      <strong>Siddhesh Zadey -</strong> Researcher and Writer,
                      Co-founder{' '}
                      <a href="http://www.asarforindia.org" target="_blank">
                        ASAR
                      </a>
                      . Duke University, North Carolina, USA.
                    </p>
                    <p>
                      <strong>Dr Pranab Chatterjee -</strong> Epidemiologist and
                      Writer. Johns Hopkins University, Baltimore, USA.
                    </p>
                    <p>
                      <strong>Dr Sunil Chandy -</strong> Former Director,
                      Christian Medical College, Vellore.
                    </p>
                    <p>
                      <strong>Dr Purnima Menon -</strong> Senior Director for
                      Food and Nutrition Policy, CGIAR; Senior Research Fellow,
                      IFPRI.
                    </p>
                    <p>
                      <strong>Patralekha Chatterjee -</strong> Journalist,
                      Public Policy Analyst. Visiting Fellow, Global Health
                      Justice Partnership, Yale.
                    </p>
                    <p>
                      <strong>Dr Gagandeep Kang -</strong> Director, Division of
                      Global Health, Bill and Melinda Gates Foundation, USA.
                    </p>
                    <p>
                      <strong>Dr Cyriac Abby Philips -</strong>{' '}
                      Clinician-Scientist, The Liver Institute, Center of
                      Excellence in GI Sciences, Rajagiri Hospital, Aluva,
                      Kerala.
                    </p>
                  </div>
                  <div>
                    <b>Past Advisors :</b>
                    <p>
                      <strong>Dr Sonali Vaid -</strong> Global Health
                      Specialist, Founder{' '}
                      <a href="https://www.incluvelabs.com/" target="_blank">
                        Incluve Labs
                      </a>
                      , Alumnus Harvard T.H. Chan School of Public Health
                    </p>
                  </div>
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

export default aboutUs;
