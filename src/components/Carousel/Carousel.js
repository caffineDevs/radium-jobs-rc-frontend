import React, { Component } from "react";
import "../../CSS/Carousel.scss";
import axios from "axios";
import { Link } from "react-router-dom";

class Carousel extends Component {
  public = process.env.PUBLIC_URL;
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      isJobSaved: false,
      searchQuery: "",
    };
  }

  componentDidMount() {
    this.apiInit(1);
  }

  handleSearchQueryChange = (e) => {
    // this.setState({ ...this.state, searchQuery: e.target.value });
    this.setState((prevState) => {
      return {
        ...this.prevState,
        searchQuery: e.target.value,
      };
    });
    //  debugger
  };
  axiosParams = () => {
    // alert(this.state.searchQuery)
    const params = new URLSearchParams();
    params.append("app_id", "edc56392");
    params.append("app_key", "66f177b30fa400815299f42508a7f047");
    params.append("what", this.state.searchQuery);
    return params;
  };
  handleSearch = () => {
    // debugger;
    this.apiInit(1);
  };

  _toggleJobSaving = () => {
    this.setState({ ...this.state, isJobSaved: !this.state.isJobSaved });
  };

  apiInit = (page) => {
    // alert(this.state.searchQuery);
    axios
      .get(`https://api.adzuna.com/v1/api/jobs/gb/search/${page}`, {
        params: this.axiosParams(),
      })
      .then((res) => {
        // console.log(res.data);
        // this.setState({ ...this.state, data: res.data.results });

        this.setState((prevState) => {
          return {
            ...this.prevState,
            data: res.data.results,
          };
        });
        window.state = this.state;
      });
  };

  render() {
    return (
      <div className="container-fluid jobCardsContainer px-4 px-md-0">
        <div className="row">
          <div className="col-12 col-md-6">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.searchQuery}
                onChange={this.handleSearchQueryChange}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={this.handleSearch}
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          {this.state.data.map((job, index) => (
            <div className="col-12 jobCard py-2 px-auto my-2 mx-auto">
              <Link
                to={{
                  pathname: "/description",
                  state: {
                    job,
                    redirect_url: job.redirect_url,
                  },
                }}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex">
                  <div className="lhs mx-3">
                    <div className="jobTitle">{job.title}</div>
                    <div className="companyName">
                      {job.company.display_name}
                    </div>
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
                    <div className="jobDescription d-flex y-center">
                      <div className="jdLogo">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fal"
                          data-icon="file-alt"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          className="svg-inline--fa fa-file-alt fa-w-12"
                        >
                          <path
                            fill="currentColor"
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                      <div className="descriptionText px-2">
                        {job.description}
                      </div>
                    </div>

                    <div className="hashtagStrip d-flex flex-wrap mt-2">
                      <div className="hashtagPill badge badge-pill my-1 mx-1 ml-n1 badge-warning">
                        <span>#</span>svelte
                      </div>
                      <div className="hashtagPill badge badge-pill my-1 mx-1 badge-danger">
                        <span>#</span>angular
                      </div>
                      <div className="hashtagPill badge badge-pill my-1 mx-1 badge-success">
                        <span>#</span>javascript
                      </div>
                      <div className="hashtagPill badge badge-pill my-1 mx-1 mr-n1 badge-primary">
                        <span>#</span>react
                      </div>
                    </div>

                    <div className="footerStrip d-flex justify-content-between">
                      <div className="jobTimeStamp"></div>
                      <div className="rating"></div>
                    </div>
                  </div>

                  <div className="rhs companyLogo  p-2 d-flex justify-content-between flex-column">
                    <div className="">
                      {index <= 5 ? (
                        <img
                          src={this.public + `/${index}.webp`}
                          className=""
                        />
                      ) : (
                        <img
                          src={this.public + `/building logo.webp`}
                          className=""
                        />
                      )}
                    </div>

                    <div
                      className="bookmark text-end mx-2"
                      onClick={this._toggleJobSaving}
                    >
                      {this.state.isJobSaved ? (
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="bookmark"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          className="svg-inline--fa fa-bookmark fa-w-12"
                        >
                          <path
                            fill="#7f8e95"
                            d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
                            className=""
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bookmark"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          className="svg-inline--fa fa-bookmark fa-w-12"
                        >
                          <path
                            fill="#7f8e95"
                            d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
                            className=""
                          ></path>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
