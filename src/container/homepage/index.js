import React from 'react';
import './style.css';
import Layout from '../../component/layout';
import { NavLink } from 'react-bootstrap';
import {FiArrowRight, FiCalendar} from 'react-icons/fi';

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



            <div className="reviews_div">
                <div className="reviews_div_top">

                </div>
                <div className="reviews_div_bottm"> 

                </div>
            </div>
          </div>
        </div>
    </Layout>
   )

 }

export default Homepage