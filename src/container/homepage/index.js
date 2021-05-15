import React from 'react';
import './style.css';
import Layout from '../../component/layout';
import { NavLink } from 'react-bootstrap';
import {FiArrowRight, FiCalendar, FiArrowLeft} from 'react-icons/fi';
import {GiUsaFlag} from 'react-icons/gi';
import a from '../../images/andrea.jpg';
import b from '../../images/Benny.jpg';
import s from '../../images/Shilpa-Rao.jpg';
import v from '../../images/vijay.jpg';

/**
* @author
* @function Homepage
**/

const Homepage = (props) => {
  return(
    <Layout>
        <div className="homePage_main_div">

          <div className="home_page_top_div">
            <div className="overlay_div">

            </div>
          </div>

          <div className="upcoming_shows_div">
            <div className="upcoming_shows_div_top"> 
              <label className="h_lbl">Upcoming Shows</label>
              <NavLink to="" className="viewall_btn">View All</NavLink>
            </div>

            {/*  Eaat code repeat Kori Disu. SAbi  */}
            <div className="upcoming_shows_div_bottom">
              <div className="card">
                <div className="card_top">
                  <img src={b} alt="b"/>
                </div>
                <div className="card_bottom">
                  <div className="gnre-div">
                    <label>Folk</label>
                  </div>
                  <label className="name_div">Benny Dayal</label>
                  <div className="link_bottm-div">
                    <div className="left_link_div">
                      <label>More Info <span><FiArrowRight/></span></label>
                    </div>
                    <div className="right_icon_div">
                    <FiCalendar/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card_top">
                  <img src={v} alt="v"/>
                </div>
                <div className="card_bottom">
                  <div className="gnre-div">
                    <label>Bollywood</label>
                  </div>
                  <label className="name_div">Vijay Yesudas</label>
                  <div className="link_bottm-div">
                    <div className="left_link_div">
                      <label>More Info <span><FiArrowRight/></span></label>
                    </div>
                    <div className="right_icon_div">
                    <FiCalendar/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card_top">
                  <img src={a} alt="a"/>
                </div>
                <div className="card_bottom">
                  <div className="gnre-div">
                    <label>Folk</label>
                  </div>
                  <label className="name_div">Andrea Jeremiah</label>
                  <div className="link_bottm-div">
                    <div className="left_link_div">
                      <label>More Info <span><FiArrowRight/></span></label>
                    </div>
                    <div className="right_icon_div">
                    <FiCalendar/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card_top">
                  <img src={s} alt="s"/>
                </div>
                <div className="card_bottom">
                  <div className="gnre-div">
                    <label>Folk</label>
                  </div>
                  <label className="name_div">Shilpa rao</label>
                  <div className="link_bottm-div">
                    <div className="left_link_div">
                      <label>More Info <span><FiArrowRight/></span></label>
                    </div>
                    <div className="right_icon_div">
                        <FiCalendar/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="reviews_div">
                <div className="reviews_div_top">
                <div className="upcoming_shows_div_top"> 
                  <label className="h_lbl">Reviews</label>
                  <div className="slide_number_div">
                    <label className="number_label"><span>1</span>/<span className="total_page_in_slide">12</span></label>
                    <label className="slide_icons"><span><FiArrowLeft/></span><span><FiArrowRight/></span></label>
                  </div>
                </div>
                </div>
                <div className="reviews_div_bottm"> 
                  <div className="card_review">
                    <div className="upper_div_review">
                      <div className="left_upper_div_review">
                        
                      </div>
                      <div className="right_upper_div_review">
                        <label className="right_upper_div_review_head">Isaac Oluwatemilorun</label>
                        <label className="right_upper_div_review_body"><span><GiUsaFlag/></span>PALO ALTO, CA</label>
                      </div>
                    </div>
                    <div className="bottom_div_review">
                      <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
                        laoreet adipiscing. 
                      </label>
                    </div>
                  </div>

                  <div className="card_review">
                    <div className="upper_div_review">
                      <div className="left_upper_div_review">
                        
                      </div>
                      <div className="right_upper_div_review">
                        <label className="right_upper_div_review_head">Isaac Oluwatemilorun</label>
                        <label className="right_upper_div_review_body"><span><GiUsaFlag/></span>PALO ALTO, CA</label>
                      </div>
                    </div>
                    <div className="bottom_div_review">
                      <label>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
                      laoreet adipiscing. 
                      </label>
                    </div>
                  </div>

                  <div className="card_review">
                    <div className="upper_div_review">
                      <div className="left_upper_div_review">
                        
                      </div>
                      <div className="right_upper_div_review">
                        <label className="right_upper_div_review_head">Isaac Oluwatemilorun</label>
                        <label className="right_upper_div_review_body"><span><GiUsaFlag/></span>PALO ALTO, CA</label>
                      </div>
                    </div>
                    <div className="bottom_div_review">
                      <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
                        laoreet adipiscing. 
                      </label>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </Layout>
   )

 }

export default Homepage