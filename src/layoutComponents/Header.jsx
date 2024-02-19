import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [category, setCategory] = useState([]);
  const [openMenus, setOpenMenus] = useState([]);
  const [currentPath, setCurrentPath] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput === '') return;
    router.push('/search?search=' + searchInput);
  };

  const toggleSubMenu = (index) => {
    setOpenMenus((prevOpenMenus) =>
      prevOpenMenus.includes(index)
        ? prevOpenMenus.filter((i) => i !== index)
        : [...prevOpenMenus, index]
    );
  };

  useEffect(() => {
    fetchCategory();
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        document.querySelector('body').classList.add('down');
      } else {
        setIsScrolled(false);
        document.querySelector('body').classList.remove('down');
      }
    };

    setCurrentPath(pathname);
    if (currentPath !== pathname) {
      document.querySelector('.search-popup').classList.remove('visible');
      document.querySelector('.canvas-menu').classList.remove('open');
      document.querySelector('.main-overlay').classList.remove('active');
      document.querySelector('body').classList.remove('down');
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, currentPath]);

  const toggleSidebar = () => {
    const canvasMenu = document.querySelector('.canvas-menu');
    const mainOverlay = document.querySelector('.main-overlay');

    canvasMenu.classList.toggle('open');
    mainOverlay.classList.toggle('active');
  };

  const searchPopup = () => {
    document.querySelector('.search-popup').classList.toggle('visible');
  };

  const fetchCategory = async () => {
    try {
      const res = await fetch(global.api + 'category');
      const data = await res.json();
      if (data.status === true) {
        setCategory(data.data);
      } else {
        setCategory([]);
      }
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  return (
    <>
      <div className="search-popup">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => {
            searchPopup();
          }}
        />
        <div className="search-content">
          <div className="text-center">
            <h3 className="mb-4 mt-0">Press ESC to close</h3>
          </div>
          <form className="d-flex search-form" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search and press enter ..."
              aria-label="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="btn btn-default btn-lg" type="submit">
              <i className="icon-magnifier" />
            </button>
          </form>
        </div>
      </div>
      <div className="canvas-menu d-flex align-items-end flex-column">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => toggleSidebar()}
        />
        <div className="logo mt-0">
          <img src="/images/logo.png" alt="logo" className="w-40" />
        </div>
        <nav>
          <ul className="vertical-menu">
            {category.map((item, index) =>
              item.children.length > 0 ? (
                <li
                  className="active"
                  key={index}
                  onClick={() => toggleSubMenu(index)}
                >
                  <span
                    className={`switch ${
                      openMenus.includes(index)
                        ? 'icon-arrow-up'
                        : 'icon-arrow-down '
                    }`}
                    onClick={() => toggleSubMenu(index)}
                  ></span>
                  {item.name}
                  <ul
                    className={`submenu ${
                      openMenus.includes(index) ? 'openmenu' : ''
                    }`}
                  >
                    {item.children.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={`/category/${subItem.path}`}>
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Link href={`/category/${item.path}`}>{item.name}</Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
      <header className="header-personal">
        <div className="container-xl header-top">
          <div className="row align-items-center">
            <div className="col-4 d-none d-md-block d-lg-block">
              {/* social icons */}
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
                  <a href="https://twitter.com/Nivarana4India" target="_blank">
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
            <div className="col-md-4 col-sm-12 col-xs-12 text-center">
              {/* site logo */}
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </Link>
              <span className="slogan d-block">
                Professional Writer &amp; Personal Blogger
              </span>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              {/* header buttons */}
              <div className="header-buttons float-md-end mt-4 mt-md-0">
                <button
                  className="search icon-button"
                  onClick={() => {
                    searchPopup();
                  }}
                >
                  <i className="icon-magnifier" />
                </button>
                <button className="burger-menu icon-button d-unset float-end d-md-none">
                  <span className="burger-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg clone">
          <div className="collapse navbar-collapse justify-content-center centered-nav">
            <ul className="navbar-nav mr-auto">
              {category.map((item, index) =>
                item.children.length > 0 ? (
                  <li className="nav-item dropdown" key={index}>
                    <a className="nav-link dropdown-toggle">{item.name}</a>
                    <ul className="dropdown-menu">
                      {item.children.map((child, index) => (
                        <li key={index}>
                          <Link
                            href={`/category/${child.path}`}
                            className="dropdown-item"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" href={`/category/${item.path}`}>
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse justify-content-center centered-nav">
            <ul className="navbar-nav mr-auto">
              {category.map((item, index) =>
                item.children.length > 0 ? (
                  <li className="nav-item dropdown" key={index}>
                    <a className="nav-link dropdown-toggle">{item.name}</a>
                    <ul className="dropdown-menu">
                      {item.children.map((child, index) => (
                        <li key={index}>
                          <Link
                            href={`/category/${child.path}`}
                            className="dropdown-item"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" href={`/category/${item.path}`}>
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
      </header>
      <div className="main-overlay" onClick={() => toggleSidebar()} />
    </>
  );
}

export default Header;
