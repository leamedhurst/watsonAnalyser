import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    render() {
        return (
          <header>
              <div class="wrapper" style={{width: "50px"}}>
                  <h1 class="base--h1">Watson Qualitative Analyzer</h1>
                  <nav class="top-bar language-theme-color" role="navigation" style={{width:"50px"}}>
                      <div class="top-bar-menu">
                      </div>
                  </nav>
                  <div class="drawer" tabIndex="0">
                      <div class="drawer-container">
                          <div class="drawer-title">
                              <h3>Menu</h3>
                              <a class="close-drawer">
                                  <img src="http://www.ibm.com/watson/developercloud/images/x.svg" />
                              </a>
                          </div>
                          <div>
                              <ul class="mobile-main-nav">
                                  <li>
                                      <a class="button" href="https://console.ng.bluemix.net/registration/?target=/catalog/%3fcategory=watson">Start free in Bluemix</a>
                                  </li>
                                  <li class="has-dropdown">
                                      <a href="/watson/developercloud/services-catalog.html">Services</a>
                                      <div class="services-mobile-nav">
                                          <div>
                                              <span class="nav-title language-title">Language</span>
                                              <ul>
                                                  <li><a href="/watson/developercloud/alchemy-language.html" class="active">AlchemyLanguage</a></li>
                                                  <li><a href="/watson/developercloud/conversation.html">Conversation</a></li>
                                                  <li><a href="/watson/developercloud/document-conversion.html">Document Conversion</a></li>
                                                  <li><a href="/watson/developercloud/language-translator.html">Language Translator</a></li>
                                              </ul>
                                          </div>
                                          <div>
                                              <ul class="no-title">
                                                  <li><a href="/watson/developercloud/nl-classifier.html">Natural Language Classifier </a></li>
                                                  <li><a href="/watson/developercloud/personality-insights.html">Personality Insights</a></li>
                                                  <li><a href="/watson/developercloud/retrieve-rank.html">Retrieve and Rank</a></li>
                                                  <li><a href="/watson/developercloud/tone-analyzer.html">Tone Analyzer</a></li>
                                              </ul>
                                          </div>
                                          <div>
                                              <span class="nav-title speech-title">Speech</span>
                                              <ul>
                                                  <li><a href="/watson/developercloud/speech-to-text.html">Speech to Text</a></li>
                                                  <li><a href="/watson/developercloud/text-to-speech.html">Text to Speech</a></li>
                                            </ul>
                                          </div>
                                          <div>
                                              <span class="nav-title vision-title">Vision</span>
                                              <ul>
                                                  <li><a href="/watson/developercloud/visual-recognition.html">Visual Recognition</a></li>
                                              </ul>
                                          </div>
                                          <div>
                                              <span class="nav-title data-insights-title">Data Insights</span>
                                              <ul>
                                                  <li><a href="/watson/developercloud/alchemy-data-news.html">AlchemyData News</a></li>
                                                  <li><a href="/watson/developercloud/discovery.html">Discovery</a></li>
                                                  <li><a href="/watson/developercloud/tradeoff-analytics.html">Tradeoff Analytics</a></li>
                                            </ul>
                                          </div>
                                          <div>
                                              <span class="nav-title embodied-cognition-title">Embodied Cognition</span>
                                              <ul>
                                                  <li><a href="/watson/developercloud/project-intu.html">Project Intu</a></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </li>
                                  <li><a href="/watson/developercloud/doc/">Docs</a></li>
                                  <li><a href="/watson/developercloud/starter-kits.html">Starter Kits</a></li>
                                  <li><a href="https://developer.ibm.com/watson/">Community</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
            </header>


        );
    }
}
