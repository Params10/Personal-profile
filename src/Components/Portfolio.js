import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
    
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>RentForcement</h3>
                      <p>The platform would help connect all such people from the city and create a Sharing Economy, which would allow users to share resourceswithout possessing them. In need, one can take products on rent at cheaper rates and once the sole purpose of that product is served, he/she can return it back to the original owner who may earn some great bucks in this transaction.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                     
                        <li><a href="https://github.com/Params10/RentForcement/tree/master" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                     
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">

                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Internet-Radio</h3>
                      <p>An InternetTV/Radio application that is implemented using multicast IP ASM(Any Source Multicast) model in C language. This Live Streaming service can be implemented in any kind of LAN(WLAN/Ethernet) provided the server and clients are in the same network.
The project uses two different Transport Layer Protocols(TCP/IP & UDP) for communicating different data.And uses two way communication for fetching radio list(TCP) and other for streaming service(UDP).
</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                  
                        <li><a href="https://github.com/Params10/Internet-Radio-TCP-UDP-Multicast-Streaming" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Video Streaming Using Redis messaging</h3>
                      <p> The platform developed to stream videos using micro-services which can communicate using redis queue messaging . instance of linux on GCP served as central server for data system.Providing Cloud Services for User to login Discover videos and streaming any Video available in the gallery .Load balancing Using Round-robin algorithm. UI for the application is Still under development phase .</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                       
                        <li><a href="https://github.com/Params10/Video-Streaming" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                   
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
            
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Project Management System platform</h3>
                      <p>The platform was generated using java on Eclipse IDE to handle and manage various projects within a company or an organisation using object oriented programming, providing systematic interface for admins to handle , assign and asses employees to several project taken upon by the organisation.</p>
                    </div>
                    <ul className="actions">
                    
                    </ul>
                  </div>
                </article>
              </div>
              
              <ul className="actions">
                <li className="wide-button"><a href="https://github.com/Params10" className="button portfolio-button" target="_blank" rel="noopener noreferrer">All Projects</a></li>
              </ul>
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;
