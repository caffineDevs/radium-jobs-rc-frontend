import React, { Component } from "react";
import "../../CSS/Reviews.scss";
import Stars from "../Stars/Stars";

export class Reviews extends Component {
  public = process.env.PUBLIC_URL;
  render() {
    return (
      <div className="rating-stats">
        <div class="d-flex text-center flex-column flex-md-row align-items-center">
          <div class="meanRating w-25">
            <div class="numberTxt">4.8</div>
            <div class="stars mb-1">
              <Stars rating={3} totalRating={5} size={16} />
            </div>
            <div class="avgTxt">Average Rating</div>
          </div>
          <div class="progressBars w-100">
            <div class="d-flex">
              <div className="w-25">5 Stars</div>
              <div class="progress">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: 100 + "%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="d-flex">
              <div className="w-25">4 Stars</div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: 70 + "%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="d-flex">
              <div className="w-25">3 Stars</div>
              <div class="progress">
                <div
                  class="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: 50 + "%" }}
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="d-flex">
              <div className="w-25">2 Stars</div>
              <div class="progress">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: 35 + "%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="d-flex">
              <div className="w-25">1 Star</div>
              <div class="progress">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: 20 + "%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="lowerPart">
          <div class="comment d-flex flex-column align-items-center flex-sm-row">
            <div class="l y-centerhs">
              <div class="userContainer">
                <div class="imgContainer">
                  <img src={this.public + "/tony.png"} className="img-fluid" />
                </div>
                <div class="userInfo text-center">
                  <div className="avatarName">Robert D. Junior</div>
                  <div class="timeStamp">18 Days Ago</div>
                </div>
              </div>
            </div>
            <div class="rhs">
              <div class="briefComment">
                The job is really relaxing at times.
              </div>
              <div class="stars mb-1">
                <Stars rating={3} totalRating={5} size={16} />
              </div>
              <div class="mainCommentText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                velit, harum soluta modi illo quaerat ex aut enim dolorum earum
                alias delectus ducimus non commodi impedit, odio nesciunt autem.
                Necessitatibus?
              </div>

              <div class="d-flex justify-content-ends mt-3">
                <button
                  type="button"
                  class="btn btn-outline-primary mt-2 rounded-pill ml-auto"
                >
                  Report
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary mt-2 rounded-pill mx-2"
                >
                  Share
                </button>
              </div>
            </div>
          </div>

          <div class="comment d-flex flex-column align-items-center flex-sm-row">
            <div class="lhs y-center">
              <div class="userContainer">
                <div class="imgContainer">
                  <img
                    src={this.public + "/charlie sheen.png"}
                    className="img-fluid"
                  />
                </div>
                <div class="userInfo text-center">
                  <div className="avatarName">Charlie Sheen</div>
                  <div class="timeStamp">8 Days Ago</div>
                </div>
              </div>
            </div>
            <div class="rhs">
              <div class="briefComment">
                The job is really relaxing at times.
              </div>
              <div class="stars mb-1">
                <Stars rating={3} totalRating={5} size={16} />
              </div>
              <div class="mainCommentText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                velit, harum soluta modi illo quaerat ex aut enim dolorum earum
                alias delectus ducimus non commodi impedit, odio nesciunt autem.
                Necessitatibus?
              </div>

              <div class="d-flex justify-content-ends mt-3">
                <button
                  type="button"
                  class="btn btn-outline-primary mt-2 rounded-pill ml-auto"
                >
                  Report
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary mt-2 rounded-pill mx-2"
                >
                  Share
                </button>
              </div>
            </div>
          </div>

          <div class="comment d-flex flex-column align-items-center flex-sm-row">
            <div class="lhs y-center">
              <div class="userContainer">
                <div class="imgContainer">
                  <img src={this.public + "/tommy.png"} className="img-fluid" />
                </div>
                <div class="userInfo text-center">
                  <div className="avatarName">Tom Hardy</div>
                  <div class="timeStamp">8 Days Ago</div>
                </div>
              </div>
            </div>
            <div class="rhs">
              <div class="briefComment">
                The job is really relaxing at times.
              </div>
              <div class="stars mb-1">
                <Stars rating={3} totalRating={5} size={16} />
              </div>
              <div class="mainCommentText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                velit, harum soluta modi illo quaerat ex aut enim dolorum earum
                alias delectus ducimus non commodi impedit, odio nesciunt autem.
                Necessitatibus?
              </div>

              <div class="d-flex justify-content-ends mt-3">
                <button
                  type="button"
                  class="btn btn-outline-primary mt-2 rounded-pill ml-auto"
                >
                  Report
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary mt-2 rounded-pill mx-2"
                >
                  Share
                </button>
              </div>
            </div>
          </div>

          <div class="comment d-flex flex-column align-items-center flex-sm-row">
            <div class="lhs y-center">
              <div class="userContainer">
                <div class="imgContainer">
                  <img src={this.public + "/bradd.png"} className="img-fluid" />
                </div>
                <div class="userInfo text-center">
                  <div className="avatarName">Brad Pitt</div>
                  <div class="timeStamp">8 Days Ago</div>
                </div>
              </div>
            </div>
            <div class="rhs">
              <div class="briefComment">
                The job is really relaxing at times.
              </div>
              <div class="stars mb-1">
                <Stars rating={3} totalRating={5} size={16} />
              </div>
              <div class="mainCommentText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                velit, harum soluta modi illo quaerat ex aut enim dolorum earum
                alias delectus ducimus non commodi impedit, odio nesciunt autem.
                Necessitatibus?
              </div>

              <div class="d-flex justify-content-ends mt-3">
                <button
                  type="button"
                  class="btn btn-outline-primary mt-2 rounded-pill ml-auto"
                >
                  Report
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary mt-2 rounded-pill mx-2"
                >
                  Share
                </button>
              </div>
            </div>
          </div>

          <div class="comment d-flex flex-column align-items-center flex-sm-row">
            <div class="lhs y-center">
              <div class="userContainer">
                <div class="imgContainer">
                  <img src={this.public + "/leo.png"} className="img-fluid" />
                </div>
                <div class="userInfo text-center">
                  <div className="avatarName">Leonardo Di Caperio</div>
                  <div class="timeStamp">8 Days Ago</div>
                </div>
              </div>
            </div>
            <div class="rhs">
              <div class="briefComment">
                The job is really relaxing at times.
              </div>
              <div class="stars mb-1">
                <Stars rating={3} totalRating={5} size={16} />
              </div>
              <div class="mainCommentText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                velit, harum soluta modi illo quaerat ex aut enim dolorum earum
                alias delectus ducimus non commodi impedit, odio nesciunt autem.
                Necessitatibus?
              </div>

              <div class="d-flex justify-content-ends mt-3">
                <button
                  type="button"
                  class="btn btn-outline-primary mt-2 rounded-pill ml-auto"
                >
                  Report
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary mt-2 rounded-pill mx-2"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
