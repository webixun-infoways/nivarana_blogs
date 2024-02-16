import moment from 'moment';
import Link from 'next/link';

function Footer() {
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
                <li className="list-inline-item">
                  <Link href={'/contact-us'}>Contact Us</Link>
                </li>
                <li className="list-inline-item">
                  <Link href={'/submission-guidelines'}>
                    Submission Guidelines
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href={'/about-us'}>About Us</Link>
                </li>
                <li className="list-inline-item">
                  <Link href={'/terms-of-use'}>Terms of Use</Link>
                </li>
              </ul>
            </div>
            {/* go to top button */}
            <div className="col-md-3 text-center">
              <ul className="social-icons list-unstyled list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-medium" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-youtube" />
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

export default Footer;
