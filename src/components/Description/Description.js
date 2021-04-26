import React, { Component } from "react";
import "../../CSS/Carousel.scss";
import "../../CSS/Description.scss";
import Reviews from "../Reviews/Reviews";

class Description extends Component {
  public = process.env.PUBLIC_URL;
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      isJobSaved: false,
    };
  }

  removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  };

  handleEasyApply = () => {
    const { redirect_url } = this.props.location.state;
    console.log(redirect_url, "redirect_url");
    window.open(redirect_url);
  };
  render() {
    if (window.state == undefined) {
      this.props.history.push("*");
      return <div></div>;
    }
    const { job } = this.props.location.state;
    // let job = window.state.data[1];
    console.log(window.state);
    return (
      <div>
        <div class="container-fluid jobCardContainer px-4 px-md-0">
          <div class="row">
            <div class="col-12 jobCard  py-2 px-auto my-2 mx-auto">
              <div className="d-flex justify-content-between">
                <div className="lhs mx-3">
                  <div className="jobTitle">{this.removeTags(job.title)}</div>
                  <div className="companyName">{job.company.display_name}</div>
                  <div className="subInfoStrip d-flex flex-column flex-md-row">
                    <div className="experience d-flex y-center">
                      <div className="experienceLogo">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fal"
                          data-icon="briefcase"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="svg-inline--fa"
                        >
                          <path
                            fill="currentColor"
                            d="M464 128H352V56c0-13.26-10.74-24-24-24H184c-13.26 0-24 10.74-24 24v72H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM192 64h128v64H192V64zm288 368c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V288h160v40c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-40h160v144zM224 320v-32h64v32h-64zm256-64H32v-80c0-8.82 7.18-16 16-16h416c8.82 0 16 7.18 16 16v80z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                      <div className="experienceText infoText pt-2 px-2">
                        4-6 Yrs
                      </div>
                    </div>
                    <div className="salary d-flex mx-md-5 y-center">
                      <div className="salaryLogo mt-1">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fal"
                          data-icon="sack-dollar"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="svg-inline--fa fa-sack-dollar fa-w-16"
                        >
                          <path
                            fill="currentColor"
                            d="M334.89 121.63l43.72-71.89C392.77 28.47 377.53 0 352 0H160.15c-25.56 0-40.8 28.5-26.61 49.76l43.57 71.88C-9.27 240.59.08 392.36.08 412c0 55.23 49.11 100 109.68 100h292.5c60.58 0 109.68-44.77 109.68-100 0-19.28 8.28-172-177.05-290.37zM160.15 32H352l-49.13 80h-93.73zM480 412c0 37.49-34.85 68-77.69 68H109.76c-42.84 0-77.69-30.51-77.69-68v-3.36c-.93-59.86 20-173 168.91-264.64h110.1C459.64 235.46 480.76 348.94 480 409zM285.61 310.74l-49-14.54c-5.66-1.62-9.57-7.22-9.57-13.68 0-7.86 5.76-14.21 12.84-14.21h30.57a26.78 26.78 0 0 1 13.93 4 8.92 8.92 0 0 0 11-.75l12.73-12.17a8.54 8.54 0 0 0-.65-13 63.12 63.12 0 0 0-34.17-12.17v-17.6a8.68 8.68 0 0 0-8.7-8.62H247.2a8.69 8.69 0 0 0-8.71 8.62v17.44c-25.79.75-46.46 22.19-46.46 48.57 0 21.54 14.14 40.71 34.38 46.74l49 14.54c5.66 1.61 9.58 7.21 9.58 13.67 0 7.87-5.77 14.22-12.84 14.22h-30.61a26.72 26.72 0 0 1-13.93-4 8.92 8.92 0 0 0-11 .76l-12.84 12.06a8.55 8.55 0 0 0 .65 13 63.2 63.2 0 0 0 34.17 12.17v17.55a8.69 8.69 0 0 0 8.71 8.62h17.41a8.69 8.69 0 0 0 8.7-8.62V406c25.68-.64 46.46-22.18 46.57-48.56.02-21.5-14.13-40.67-34.37-46.7z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                      <div className="salaryText infoText pt-2 px-2">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="rupee-sign"
                          role="img"
                          style={{ height: 11 + "px", marginTop: -2 + "px" }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          className="svg-inline--fa fa-rupee-sign fa-w-10"
                        >
                          <path
                            fill="currentColor"
                            d="M308 80c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v31.659c0 6.627 5.373 12 12 12h93.61c39.065 0 67.203 17.4 79.458 48.341H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h179.59c-3.43 49.738-35.677 80.341-86.615 80.341H12c-6.627 0-12 5.373-12 12v34.974c0 3.495 1.524 6.816 4.173 9.096l182.094 156.685a11.996 11.996 0 0 0 7.827 2.904h61.326c11.13 0 16.263-13.837 7.827-21.096L101.818 320h13.31c79.002 0 136.718-54.257 140.65-136H308c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-56.354c-5.067-21.636-14.409-40.497-27.202-56H308z"
                          ></path>
                        </svg>
                        {"  "}
                        {job.salary_min} - {job.salary_max}
                      </div>
                    </div>
                    <div className="location y-center">
                      <div className="locationLogo">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fal"
                          data-icon="map-marker-alt"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          className="svg-inline--fa fa-map-marker-alt fa-w-12"
                        >
                          <path
                            fill="currentColor"
                            d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                      <div className="locationText infoText pt-2 px-2">
                        {job.location.display_name}
                      </div>
                    </div>
                  </div>
                  <div className="footerStrip d-flex justify-content-between">
                    <div className="jobTimeStamp"></div>
                    <div className="rating"></div>
                  </div>
                </div>

                <div className="rhs companyLogo  p-2 d-flex justify-content-between flex-column">
                  <div className="">
                    <img
                      src={this.public + `/building logo.webp`}
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div class="interactionsBtns d-flex mt-3 mb-2">
                <div class="easyApplyBtn">
                  <button
                    type="button"
                    class="btn btn-outline-primary rounded-pill"
                    onClick={this.handleEasyApply}
                  >
                    Easy Apply
                  </button>
                </div>
                <div class="saveJobBtn mx-3">
                  <button
                    type="button"
                    class="btn btn-outline-primary rounded-pill"
                  >
                    Save Job
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 jd card-shadowed">
              <div class="aboutJob">About the job</div>
              <div class="description">
                We are looking for Outstanding employee with minimum 3 yrs of
                experience, who will be responsible for the designing,
                structuring, and developing amazing products that benefit
                hundreds or thousands of customers. Our company is a leading
                firm in our industry in the Americas. We're pleased to have a
                5.0 Glassdoor rating. We are looking to hire talented employees
                that are looking to work in a high paced and very challenging
                environment.
                <ol className="mt-4 mb-2">
                  <li>
                    Working with the creative director and the creative team to
                    come up with timelines and pipeline structures for any
                    project to keep the project life cycle on track according to
                    the companies commitments to their clients.
                  </li>
                  <li>
                    You have significant experience with modern Web technologies
                    including Angular and Node.js as well as REST API design and
                    services development.
                  </li>
                  <li>
                    rovide accurate and timely project reporting on all content
                    marketing activities.
                  </li>
                  <li>
                    Impeccable writing and editorial skills, with a good command
                    of the English language.
                  </li>
                  <li>
                    Project management skills to manage a team of content
                    creators, editorial schedules, and deadlines. Ability to
                    tell a story using words, images, or audio, and an
                    understanding of how to create content that draws an
                    audience.
                  </li>
                  <li>
                    {" "}
                    Keenness to contribute to ideas and solving problems.
                  </li>
                  <li>
                    {" "}
                    Advertising is a time-sensitive business so we are looking
                    for someone who doesn’t like wasting any.
                  </li>
                  <li>
                    A good understanding of the software development lifecycle
                    Strong logic and problem-solving skills and ability to
                    troubleshoot applications and environment issues
                  </li>
                </ol>
              </div>
            </div>
            <div class="col-12 reviews card-container">
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
