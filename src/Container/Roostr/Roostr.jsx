import React from "react";
import "./Roostr.css";
import logo from "../Assets/Image/download.png";

export default function Roostr() {
  return (
    <>
      <div className="bg-roostr" >
        <div className=" position-relative">
        <div class="d-flex justify-content-center">
          <div className="header py-5 d-flex justify-content-center">
            <div className=" w-75 d-flex flex-column">
              <div className="main-hearder-chk d-flex">
                <div className=" inner-div">
                  <div className="d-flex img-chk p-3">
                    <img src={logo} alt="" />
                    <h4 className="py-2">ROOSTR</h4>
                  </div>
                </div>
              </div>
              <div className="chikn-detail p-md-5 p-2 row m-0 py-3">
                <div className="left-layer py-1 col-lg-5 d-flex flex-lg-column flex-row justify-content-between">
                  <div>
                    <h3>TOTAL KG OF YOUR ROOSTR</h3>
                    <h1>0 KG</h1>
                  </div>
                  <div>
                    <h3>TOTAL KG IN THE BARN</h3>
                    <h1>0 KG</h1>
                  </div>
                </div>
                <div className="right-layer row m-0 col-lg-7">
                  <div className="calim1 p-md-6 p-2  col-lg-8 d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex">
                      <h1>0.000000</h1>
                      <span className="span">🌱</span>
                    </div>
                    <h2 className="py-3">AVAILABLE FERT TO CLAIM</h2>
                    <p className="py-3">est. 0.000000 fert a day</p>
                  </div>
                  <div className="calim2 col-lg-4 d-flex justify-content-center align-items-center py-3">
                    <button className="py-1 px-5 border-0 ">Claim</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="card-two row m-0 justify-content-center">
          <div className="row m-0 p-0 justify-content-center card-main-div me-lg-4">
            <div className="col-lg-7">
              <div className="header-top">
                <div class="border-0 d-flex flex-row justify-content-between align-items-center dark_bg-lighten-5 false p-0 py-md-2 px-md-3 card-header">
                  <div class="d-flex flex-row w-100 px-md-2 justify-content-between align-items-center flex-wrap card-info-header">
                    <div
                      role="group"
                      className="common__TabButtonGroup-sc-1amidcb-1 kQtUGh d-none d-md-block btn-group"
                    >
                      <input
                        className="btn-check"
                        type="radio"
                        autocomplete="off"
                        id="radio-all-0"
                        value="all"
                        checked=""
                      />
                      <label
                        for="radio-all-0"
                        role="button"
                        tabindex="0"
                        className="px-3 dark-bg dark_text-white btn btn-outline-light "
                      >
                        All (-)
                      </label>
                      <input
                        className="btn-check"
                        type="radio"
                        autocomplete="off"
                        id="radio-roosted-1"
                        value="roosted"
                      />
                      <label
                        for="radio-roosted-1"
                        role="button"
                        tabindex="0"
                        className="px-3 dark-bg dark_text-white btn btn-outline-light"
                      >
                        Roosted (-)
                      </label>
                      <input
                        className="btn-check"
                        type="radio"
                        autocomplete="off"
                        id="radio-unroosted-2"
                        value="unroosted"
                      />
                      <label
                        for="radio-unroosted-2"
                        role="button"
                        tabindex="0"
                        className="px-3 dark-bg dark_text-white btn btn-outline-light"
                      >
                        Unroosted (-)
                      </label>
                    </div>
                    <div className="d-flex flex-row my-3 gap-3 d-none d-md-flex">
                      <span class=" d-inline-block span">
                        <button
                          disabled=""
                          type="button"
                          className="text-nowrap rounded-pill px-4 text-capitalize btn btn-primary btn-sm"
                        >
                          Roosted
                        </button>
                      </span>
                      <span class=" d-inline-block span">
                        <button
                          disabled=""
                          type="button"
                          className="text-nowrap rounded-pill px-4 text-capitalize btn btn-primary btn-sm"
                        >
                          Unroost all
                        </button>
                      </span>
                    </div>
                    <div className="custom-id row m-0">
                      <div className="navbar d-flex justify-content-start col-lg-12 col-12 ">
                        <div className="RoostTypeography__GreyMainHeader-sc-3st9az-0 ms-3 text-start text-light ">
                          SORT:&nbsp;
                        </div>
                        <div class="dropdown px-lg-3 py-3">
                          <select
                            name="custom-toggle"
                            id="privacy"
                            className="px-5 py-1"
                          >
                            <option value="1">
                              <div className="flex">
                                <label htmlFor="Lowest#">Lowest#</label>
                                <input
                                  type="radio"
                                  id="Lowest#"
                                  name="fav_language"
                                  value="Lowest#"
                                />
                              </div>
                            </option>
                            <option value="1">
                              <div className="flex">
                                <label htmlFor="Highest#">Highest#</label>
                                <input
                                  type="radio"
                                  id="Highest#"
                                  name="fav_language"
                                  value="Highest#"
                                />
                              </div>
                            </option>
                            <option value="1">
                              <div className="flex">
                                <label htmlFor="LowestKG#">LowestKG#</label>
                                <input
                                  type="radio"
                                  id="LowestKG#"
                                  name="fav_language"
                                  value="LowestKG#"
                                />
                              </div>
                            </option>
                            <option value="1">
                              <div className="flex">
                                <label htmlFor="HighestKG#">HighestKG#</label>
                                <input
                                  type="radio"
                                  id="HighestKG#"
                                  name="fav_language"
                                  value="HighestKG#"
                                />
                              </div>
                            </option>
                            <option value="1">
                              <div className="flex">
                                <label htmlFor="Lowest rarity">
                                  Lowest rarity
                                </label>
                                <input
                                  type="radio"
                                  id="Lowest rarity"
                                  name="fav_language"
                                  value="Lowest rarity"
                                />
                              </div>
                            </option>
                            <option value="1">
                              <div className="flex">
                                <label htmlFor="Highest rarity">
                                  Highest rarity
                                </label>
                                <input
                                  type="radio"
                                  id="Highest rarity"
                                  name="fav_language"
                                  value="Highest rarity"
                                />
                              </div>
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="mx-0 gy-3 d-flex justify-content-center row">
                        <div class="col-12">
                          <div class="p-2 d-flex justify-content-center align-items-center text-ligh py-5 mb-3 text-light ">
                            Please connect your wallet, to view your Chikn.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="farmland__FarmPageContainer-sc-qzn6bd-3 iKlGqa accordion accordion-flush mt-2">
              <div class="rounded border-0 text-white">
                <div class="border-0 d-flex justify-content-between align-items-center dark_bg-lighten-5 false border card-header-1 py-3 mt-2">
                  <div class="d-flex flex-row w-100 py-md-1 px-lg-3 justify-content-between align-items-center py-2">
                    <div class="RoostrTypography__RedTextBase-sc-1wwb9ns-13 RoostrTypography__RedTitleLarge-sc-1wwb9ns-20 cqJgGZ cXnifQ px-3">
                      FARMLAND
                    </div>
                    <div class="d-flex flex-column d-none d-md-flex">
                      <div class="RoostrTypography__RedTextBase-sc-1wwb9ns-13 RoostrTypography__RedTextMedium-sc-1wwb9ns-18 cqJgGZ iNGgRA px-3">
                        0.000000🌱
                      </div>
                      <div class="dark_text-dirty-white RoostrTypography__DarkGreyTextBase-sc-1wwb9ns-0 RoostrTypography__DarkGreyTextBold-sc-1wwb9ns-1 RoostrTypography__DarkGreySubTitle-sc-1wwb9ns-9 tdlqD bYzBWC hZTISu">
                        YOUR TOTAL FERTILIZER
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-collapse collapse show">
                  <div class="card-body d-fles">
                    <div class="col-12 pt-5">
                      <div class="p-5 d-flex justify-content-center align-items-center text-center">
                      Please connect your wallet, to view your Farmland.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
