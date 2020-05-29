import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="Maincontiner">
        <header className="header">
          <div className="core-admin-wrapper"><span className="core-adimin-data">Core Admin</span></div>
          <div className="header__Right__icons">
            <div className="border_div">
              <div className="icons homeIcon "><span className="hometext">Home</span></div>
              <div className="icons border_div usreIcon "><span className="hometext textcolor">Users</span></div>
              <div className="icons border_div dropdownIcon"><span
                className="left_alignment_text textcolor">Dropdown</span></div>
              <div className="icons search_border_div searchIcon"><span
                className="left_alignment_text textcolor">Search</span></div>
              <div className="smithdiv">
                <div className="icons smith_profile">
                  <div className="downarrow"><span className="name">John Smith</span></div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="downContiner">
          <div className="LeftWrapper">
            <div className="leftOuter">
              <div className="LeftContiner LeftContiner--displayflex">
                <div className="leftContinerbox">
                  <div className="sidbarlines">
                    <div className="Dashboard Imgalign common"><span className="sidebarText">Dashboard</span></div>
                  </div>
                </div>
                <div className="leftContinerbox">
                  <div className="inactive">
                    <div className="lab Imgalign common"><span className="sidebarText">UI Lab</span>
                    </div>
                  </div>
                </div>
                <div className="leftContinerbox">
                  <div className="inactive">
                    <div className="form Imgalign common"><span className="sidebarText">Forms</span></div>
                  </div>
                </div>
                <div className="leftContinerbox">
                  <div className="inactive">
                    <div className="chart Imgalign common"><span className="sidebarText">Charts</span></div>
                  </div>
                </div>
                <div className="leftContinerbox">
                  <div className="inactive">
                    <div className="other Imgalign common"><span className="sidebarText">Others</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="LeftContinerMiddle">
              <div className="cover">
                <div className="cpuImage"><span className="cpu_usage">CPU Usage</span></div>
              </div>

              <div className="leftContinerbox">
                <div className="graph_outer"><span className="graph_orders">Orders</span><br />
                  <span className=" graph_orders graph-sacle">847</span></div>
                <div className="graph1-image-order graph_style"></div>
              </div>
              <div className="leftContinerbox">
                <div className="graph_outer"><span className="graph_orders graph_Income">Income</span>
                  <span className=" graph_orders graph-sacle graph_Income">$43.330</span></div>
                <div className="graph2-image-income graph_style"></div>
              </div>
              <div className="leftContinerbox">
                <div className="graph_outer"><span className="graph_orders graph_Review">Reviews</span><br />
                  <span className=" graph_orders graph-sacle graph_Review">223</span></div>
                <div className="graph3-image-review graph_style"></div>
              </div>
            </div>
          </div>
          <div className="rightWrapper">
            <div className="Dashboard_div">
              <div className="dashbord_Left_div">
                <div className="dashboardImage"><span className="dashboard_data">Dashboard</span><br />
                  <span className="dashboard_data dashboard_subtitile">A subtitle can be added here</span>
                </div>
              </div>
              <div className="dashboard_right_div">
                <div className="dashbord-right-div--displayflex">
                  <div className="dashboard-graph-displayflex margindiv">
                    <div className="dash-board-graph-style"><span
                      className="dashboard-graph_orders">Orders</span>
                      <span className="dashboard-graph_scale">847</span></div>
                    <div className="dashboard_graph_image dashboard-style"></div>
                  </div>
                  <div className="dashboard-graph-displayflex">
                    <div className="dash-board-graph-style"><span
                      className="dashboard-graph_orders">Reviews</span>
                      <span className="dashboard-graph_scale color-style">223</span></div>
                    <div className="dashboard_graph_image_green dashboard-style"></div>
                  </div>
                  <div className="dashboard-graph-displayflex">
                    <div className="dash-board-graph-style"><span
                      className="dashboard-graph_orders">New visits</span>
                      <span className="dashboard-graph_scale  color-style">7970</span></div>
                    <div className="dashboard_graph_image_merron "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-secondWrapper">
              <div className="home-and-dashbaord-div">
                <div className="blue_right_arrow">
                  <div className="Home-Icon"><span className="homedata">Home</span> </div>
                  <div className="right-arrow">

                    <div className="secondWrapper-dashboard-div">
                      <div className="secondWrapper-dashboard-img"><span
                        className="secondWrapper-dashboard-data">Dashboard</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Foloder-graph">
                <div className="Foloder-graph-left">
                  <ul className="graph-outer-wrapper">
                    <li className="one">
                      <div className="right-red right-angle angle-style"><span className="plus_symbol">+</span>
                      </div>
                      <div className="newproject graph_common_style"><span className="newproject_data">New
                                            Project</span> </div>
                    </li>

                    <li className="one two">
                      <div className="messagebox"><span className="number">14</span></div>
                      <div className="message graph_common_style"><span
                        className="newproject_data">Messages</span>
                      </div>

                    </li>
                    <li className="one three">
                      <div className="file graph_common_style"><span
                        className="newproject_data Filedata">Files</span>
                      </div>

                    </li>
                    <li className="one four">
                      <div className="right-red right-angle-green angle-style"><span
                        className="plus_symbol">+</span>
                      </div>
                      <div className="graph_user graph_common_style"><span
                        className="newproject_data userdata Filedata">Users
                                        </span> </div>

                    </li>
                    <li className="one  five">
                      <div className="Friends graph_common_style"><span
                        className="newproject_data Filedata friends_data">Friends</span>
                      </div>

                    </li>
                    <li className="one six">
                      <div className="right-red right-angle-blue angle-style"><span
                        className="plus_symbol">+</span>
                      </div>
                      <div className="twitter graph_common_style"><span
                        className="newproject_data">Followers</span>
                      </div>

                    </li>


                  </ul>

                </div>
                <div className="Foloder-graph-right">
                  <div className="ChartsHeading"><span className="Chartsdata">Charts</span>
                    <div className="settingIcon"></div>
                  </div>
                  <div className="visitors-and-graphs-sacle graphs-sacle-display-flex ">
                    <div className="graphs-sacle-left graphs-sacle-left-displayflex">
                      <div className="graph-left-firstbox">
                        <div className="grap-left-data">
                          <div className="visit_img"><span className="visit_number">973,3119</span></div>
                          <div className="activebars-and-inactivebars">
                            <div className="Activebars"></div>
                            <div className="Inactivebar"></div>
                            <span className="total_visit">TOTAL VISITS</span>
                          </div>
                        </div>
                      </div>
                      <div className="graph-left-secondbox graph-left-secondbox-displayflex">
                        <div className="grap-secondbox-left">
                          <div className="grap-left-data">
                            <div className="person-Img"><span
                              className=" visit_number visit_number-second">8,800</span></div>
                            <div className="activebars-and-inactivebars activebars-and-inactivebars1">
                              <div className="Activebars Activebars1"></div>
                              <div className="Inactivebar Inactivebar1"></div>
                              <span className="total_visit">NEW VISITORS</span>
                            </div>
                          </div>
                        </div>
                        <div className="grap-secondbox-left grap-secondbox-right">
                          <div className="grap-left-data">
                            <div className="eye-Img"><span
                              className=" visit_number visit_number-second">25668</span></div>
                            <div className="activebars-and-inactivebars activebars-and-inactivebars1">
                              <div className="Activebars Activebars2"></div>
                              <div className="Inactivebar Inactivebar2"></div>
                              <span className="total_visit">PAGE VIEWS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="graphs-sacle-right graph-img"></div>
                  </div>
                </div>
              </div>

            </div>
            <div className="cal-and-news  cal-and-news-displyflex">
              <div className="calender-div-left">
                <div className="full-calender-Wrapper">
                  <div className="Full-calender">
                    <span className="calender">Full calender</span>

                  </div>
                  <div className="month-week-day">
                    <ul className="ulWrapper">
                      <li className="list-item calnder-month">month</li>
                      <li className="list-item  week">week</li>
                      <li className="list-item  day">day</li>
                    </ul>
                  </div>
                </div>
                <div className="Month-List">
                  <div className="month-list-right-arrow"></div>
                  <span className="month-list-month">April2013</span>
                  <div className="month-list-left-arrow"></div>

                </div>
                <div className="weekdays-list">
                  <ul className="weekdays">
                    <li className="weekdays-sunday">Sun</li>
                    <li className="weekdays-sunday">Mon</li>
                    <li className="weekdays-sunday">Tue</li>
                    <li className="weekdays-sunday">Wed</li>
                    <li className="weekdays-sunday">Thu</li>
                    <li className="weekdays-sunday">Fri</li>
                    <li className="weekdays-sunday">Sat</li>
                  </ul>
                </div>
                <div className="date-list-Wrapper">
                  <ul className="date-list">
                    <div className="calender-border-div">
                      <li>31</li>
                      <li>1
                                        <div className="event1 event-common-stytle">
                          <span className="event-style">All Day<br />Event</span>
                        </div>
                      </li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                    </div>
                    <div className="calender-border-div">

                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                      <li>10</li>
                      <li>11</li>
                      <li>12</li>
                      <li>13</li>
                    </div>
                    <div className="calender-border-div">

                      <li>14</li>
                      <li>15</li>
                      <li>16</li>
                      <li>17</li>
                      <li>18</li>
                      <li>19
                                        <div className="event2  event-common-stytle">
                          <span className="event-style">Long Event</span>
                        </div>
                      </li>
                      <li>20</li>
                    </div>
                    <div className="calender-border-div1">

                      <li className="extra-height">21
                                        <div className="event2  event3  event-common-stytle">
                          <span className="event-style">Long Event</span>
                        </div>
                        <div className="repeating-event"><span
                          className="event-style">4p<br />Repeating<br />Event</span></div>
                      </li>
                      <li>22</li>
                      <li>23</li>
                      <li>24
                                        <div className="event4  event-common-stytle">
                          <span className="event-style">10-30am<br />Metting</span>
                        </div>
                        <div className="lunch-break  event-common-stytle">
                          <span className="event-style">12pm Lunch</span>
                        </div>
                      </li>
                      <li>25
                                        <div className="event5  event-common-stytle">
                          <span className="event-style">7p<br />Birthday<br />party</span>
                        </div>
                      </li>
                      <li>26</li>
                      <li>27</li>
                    </div>

                    <div className="calender-border-div1">
                      <li>28
                                        <div className="event6  event-common-stytle"><span className="event-style">Click for
                                                Google</span></div>
                        <div className="repeating-event  event-common-stytle"><span
                          className="event-style">4p<br />Repeating<br />Event</span></div>
                      </li>
                      <li>29</li>
                      <li>30</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                    </div>
                    <div className="calender-border-div1">
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                      <li>10</li>
                      <li>11</li>
                    </div>


                  </ul>
                </div>

              </div>
              <div className="news-data-right">
                <div className="news_heading">
                  <div className="news_heading-Wrapper">
                    <span className="news_heading_data">News with avatara(scrollable
                                    box)</span>
                  </div>

                  <div className="news_number"><span className="number-data">178</span></div>
                </div>
                <div className="twitter-news">
                  <div className="twitter-news-img common-news-style"></div>
                  <div className="twitter_para">
                    <div className="Heading">
                      <h4 className="twitteheading_data">Twitter Bootstrap v3.0 is coming!</h4>
                    </div>
                    <div className="para">
                      <p className="twitter_descrption">Razorthink enables financial services companies to
                      easily
                      and quickly harness the financial services companies to easily services company
                                    </p>
                    </div>

                  </div>
                  <div className="news-date">
                    <span className="date">06</span><br />
                    <span className="month">jan</span>
                  </div>
                </div>
                <div className="twitter-news">
                  <div className="ruby-news-img common-news-style"></div>
                  <div className="twitter_para">
                    <div className="Heading">
                      <h4 className="twitteheading_data">Ruby on Rails 4.0</h4>
                    </div>
                    <div className="para">
                      <p className="twitter_descrption">Razorthink enables financial services companies to
                      easily
                      and quickly harness the financial services companies to easily services company
                                    </p>
                    </div>

                  </div>
                  <div className="news-date">
                    <span className="date">06</span><br />
                    <span className="month">jan</span>
                  </div>
                </div>
                <div className="twitter-news">
                  <div className="mobile-news-img common-news-style"></div>
                  <div className="twitter_para">
                    <div className="Heading">
                      <h4 className="twitteheading_data">All about SCSS</h4>
                    </div>
                    <div className="para">
                      <p className="twitter_descrption">Razorthink enables financial services companies to
                      easily
                      and quickly harness the financial services companies to easily services company
                                    </p>
                    </div>

                  </div>
                  <div className="news-date">
                    <span className="date">06</span><br />
                    <span className="month">jan</span>
                  </div>
                </div>
                <div className="twitter-news">
                  <div className="twitter-news-img2 common-news-style"></div>
                  <div className="twitter_para">
                    <div className="Heading">
                      <h4 className="twitteheading_data">Twitter Bootstrap v3.0 is coming!</h4>
                    </div>
                    <div className="para">
                      <p className="twitter_descrption">Razorthink enables financial services companies to
                      easily
                      and quickly harness the financial services companies to easily services company
                                    </p>
                    </div>

                  </div>
                  <div className="news-date">
                    <span className="date">06</span><br />
                    <span className="month">jan</span>
                  </div>
                </div>
                <div className="twitter-news">
                  <div className="ruby-news-img common-news-style"></div>
                  <div className="twitter_para">
                    <div className="Heading">
                      <h4 className="twitteheading_data">Ruby on Rails 4.0</h4>
                    </div>
                    <div className="para">
                      <p className="twitter_descrption">Razorthink enables financial services companies to
                      easily
                      and quickly harness the financial services companies to easily services company
                                    </p>
                    </div>

                  </div>
                  <div className="news-date">
                    <span className="date">06</span><br />
                    <span className="month">jan</span>
                  </div>
                </div>
                <div className="twitter-news">
                  <div className="mobile-news-img common-news-style"></div>
                  <div className="twitter_para">
                    <div className="Heading">
                      <h4 className="twitteheading_data">All about SCSS</h4>
                    </div>
                    <div className="para">
                      <p className="twitter_descrption">Razorthink enables financial services companies to
                      easily
                      and quickly harness the financial services companies to easily services company
                                    </p>
                    </div>

                  </div>
                  <div className="news-date">
                    <span className="date">06</span><br />
                    <span className="month">jan</span>
                  </div>
                </div>
                <div className="twitter-news">
                  <div className="mobile-news-img common-news-style"></div>
                  <div className="twitter_para">
                    <div className="Heading">
                      <h4 className="twitteheading_data">All about SCSS</h4>
                    </div>
                    <div className="para">
                      <p className="twitter_descrption">Razorthink enables financial services companies to
                      easily
                      and quickly harness the financial services companies to easily services company
                                    </p>
                    </div>

                  </div>
                  <div className="news-date">
                    <span className="date">06</span><br />
                    <span className="month">jan</span>
                  </div>
                </div>


              </div>


            </div>

            <div className="profile_wrapper">
              <div className="user1profile"></div>
              <div className="user1info">
                <div className="user1leftarrow">
                  <div className="user1_comment"><span className="user1-comment">COMMENT</span></div>
                  <div className="user1-data"><span className="user1-name">Michel</span> posted a comment
                                on this
                                task:<span className="user1-name">Core ADmin</span></div>

                  <div className="user1-paragraph">Razorthink Deep Learning (DL) AI solves data challenges
                  previously
                  impossible using traditional analytics and machine learning AI.
                  Enterprise grade security, deployment and
                                management ensures successful implementations and ongoing support.</div>
                  <div className="attachment-icon"><span className="user1_project">project_news.docx</span></div>

                </div>
              </div>
            </div>

            <div className="taskWrapper">
              <div className="user1profile user2-profile"></div>
              <div className="user1info user2info">
                <div className="user1leftarrow border">
                  <div className="user2_TASK"><span className="user1-comment">Task</span></div>
                  <div className="user1-data user2-data"><span className="user1-name name2">Michel</span> complete
                                this
                                task:<span className="user1-name delete"><strike>Core ADmin</strike></span></div>
                </div>
              </div>

            </div>



            <div className="profile_wrapper">
              <div className="user1profile user3-profile"></div>
              <div className="user1info user3-wrapper">
                <div className="user1leftarrow">
                  <div className="user1_comment"><span className="user1-comment">COMMENT</span></div>
                  <div className="user1-data"><span className="user1-name">John</span>added new 3 files in
                                project:<span className="user1-name">Core ADmin</span></div>

                  <div className="user3-box-outer">
                    <div className="center-wrapper">
                      <div className="user3-box1 border-class"><span className="box-height-and-width">240 x
                                            100</span>
                      </div>
                      <div className="user3-box1"><span className="box-height-and-width">240 x 100</span></div>
                      <div className="user3-box1"><span className="box-height-and-width">240 x 100</span></div>
                    </div>

                  </div>


                </div>
              </div>

            </div>
            <div className="project-comment-box">
              <div className="project-comment-data-info">
                <div className="core-admin-comment">Add a comment for project <span className="user-name">Core
                                Admin<br /></span><span className="italic-text">on the
                                textarea below to expand it</span> </div>
                <div className="user-profile"></div>
              </div>
              <div className="add-comment project-comment-data-info"><span className="user-enter-comments">add a
                            comment(click to expand)</span></div>

            </div>
            <p>hello</p>

          </div> </div>
      </div>




    )
  }
}

export default App;
