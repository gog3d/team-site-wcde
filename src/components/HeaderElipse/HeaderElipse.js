import { React, useCallback, useMemo, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderElipse.css'
import logo from '../../images/logo.svg'
import elipse1 from '../../images/Subtract.svg';
import elipse1_pad from '../../images/pad/Subtract.svg';
import menu from '../../images/mob/Menu.svg';
import close from '../../images/mob/Close.svg';

const  HeaderElipse = () => {

  const { pathname } = useLocation();
  const [aboutPath, setAboutPath] = useState(false);
//  const [aboutCardPath, setAboutCardPath] = useState(false);

  const refNav = useRef();

  const [menuOpen, setMenu] = useState(false);
  
  const elipseFigure = useMemo(() => {
    if(pathname.indexOf('/about') === 0) {
      setAboutPath(true);
    } else {
      setAboutPath(false);
    }
    return pathname.indexOf('/about/') === 0 ? null : (
      <div className='header-elipse__elipse-wrapp'>
        <img className='header-elipse__elipse-desk' src={elipse1}  alt="абстрактная геометрическая фигура"/>
        <img className='header-elipse__elipse-pad' src={elipse1_pad}  alt="абстрактная геометрическая фигура"/>
      </div>
    )
  }, [pathname]);

  const onClickMenu = useCallback(() => {
      if(menuOpen) {
        setMenu(false);
        refNav.current.style.transform ='translateX(100%)';
      } else {
        setMenu(true);
        refNav.current.style.transform ='translateX(0%)';
      }
     
  }, [menuOpen, refNav]);

    return (
        <div className='header-elipse'>
          <div className='header-elipse__nav-wrapper' >
            <Link className='header-elipse__logo-Link' to="/">
              <img className='header-elipse__logo' src={logo} alt='Логотип'></img>
            </Link>
              <div className={'header-elipse__nav-menu-wrapper-mob'}>
                <button onClick={onClickMenu} className={'header-elipse__nav-menu-button'}>
                  <img className={'header-elipse__nav-img'} src={menuOpen ? close : menu} alt='menu-img-close'></img>
                </button>
                {
                    <div className='header-elipse__nav-mob-hid'>
                      <nav className='header-elipse__nav-mob' ref={refNav}>
                        <Link 
                          style={{backgroundColor: 'rgba(244, 106, 20, 1)'}} 
                          className='header-elipse__nav-link common__link' to="/"
                        >
                          Проект
                        </Link>
                        <Link 
                          style={{backgroundColor: 'rgba(104, 82, 217, 1)'}} 
                          className='header-elipse__nav-link common__link' to="/about"
                        >
                          О нас
                        </Link>
                        <Link 
                        style={{backgroundColor: 'rgba(97, 151, 255, 1)'}}
                        className='header-elipse__nav-link common__link' to="cases"
                        >
                          Кейсы
                        </Link>
                      </nav>
                    </div>
                }
              </div>
              <div className={'header-elipse__nav-menu-wrapper'}>
                {
                      <nav className='header-elipse__nav'>
                        <Link

                          className='header-elipse__nav-link common__link header-elipsemain__nav-link-main'
                          to="/"
                        >
                          Проект
                        </Link>
                        <Link 
                          style={aboutPath ? {backgroundColor: 'rgba(97, 151, 255, 1)', color: 'rgba(255, 255, 255, 1)'} : null}
                          className='header-elipse__nav-link common__link header-elipsemain__nav-link-about' 
                          to="/about"
                        >
                          О нас
                        </Link>
                        <Link
                        className='header-elipse__nav-link common__link header-elipsemain__nav-link-cases' 
                        to="cases"
                        >
                          Кейсы
                        </Link>
                      </nav>
                }
               </div>
          </div>
          {
            elipseFigure
          }
        </div>
    )
}

export default HeaderElipse