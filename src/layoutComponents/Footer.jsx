import moment from 'moment';
import Link from 'next/link';
import { Component } from 'react';

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const res = await fetch(global.api + 'fetch_static_pages');
      const data = await res.json();
      this.setState({ data: data.data });
    } catch (error) {
      console.log('error', error);
    }
  };
  render() {
    return (
      <footer>
        <div className="container-xl">
          <div className="footer-inner">
            <div className="row d-flex align-items-center gy-4">
              {/* copyright text */}
              <div className="col-md-3">
                <span className="copyright">
                  © {moment().format('YYYY')} Nivarana. All Rights Reserved.
                </span>
              </div>
              {/* social icons */}
              <div className="col-md-6 text-center">
                <ul className="social-icons list-unstyled list-inline mb-0">
                  {this.state.data.length > 0 &&
                    this.state.data.map((item, index) => (
                      <li className="list-inline-item" key={index}>
                        <Link href={'/staticPage/' + item.page_name}>
                          {item.page_title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              {/* go to top button */}
              <div className="col-md-3 text-center">
                <ul className="social-icons list-unstyled list-inline mb-0">
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/nivarana_for_india"
                      target="_blank"
                    >
                      <i className="icon-social-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://twitter.com/Nivarana4India"
                      target="_blank"
                    >
                      <i className="icon-social-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://m.facebook.com/nivarana.for.india"
                      target="_blank"
                    >
                      <i className="icon-social-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://youtube.com/@nivarana4India?feature=shared"
                      target="_blank"
                    >
                      <i className="icon-social-youtube" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://open.spotify.com/show/3We8DodIwKwylMHZieNtAz?si=hDsy47dsQZalmmtklv5S4A"
                      target="_blank"
                    >
                      <i className="icon-social-spotify" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://open.spotify.com/show/2zfhTXNsaV26xft0NRLGnM?si=G-YNeTlHSva6zM-GjsvaNg"
                      target="_blank"
                    >
                      <i className="icon-social-spotify" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://in.linkedin.com/company/nivaranaforindia#:~:text=About%20us,to%20health%20and%20social%20problems"
                      target="_blank"
                    >
                      <i className="icon-social-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
