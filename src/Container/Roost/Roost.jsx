import React from "react";
import "./Roost.css";
import logo from "../Assets/Image/download.png";
import logo1 from "../Assets/Image/egg.png";
import logo2 from "../Assets/Image/eggg.png";

export default function Roost() {
  return (
    <div style={{backgroundColor:'#191a32'}}>
      <div className='container'>
      <div className="main-page row justify-content-center m-0 p-0">
        <div class="d-flex justify-content-between align-items-center header-One py-5 px-5">
          <h1>Roost</h1>
          <button
            title="Refresh"
            disabled=""
            type="button"
            class="btn btn-dark"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"></path>
            </svg>
          </button>
        </div>
        <div className="inner-layer d-flex flex-column ">
          <div className=" inner-div">
            <div className="d-flex img-chk p-3">
              <img src={logo} alt="" />
              <h4 className="py-2">CHIKN</h4>
            </div>
          </div>
          <div className="chikn-detail p-md-5 p-2 row m-0 py-3">
            <div className="left-layer py-1 col-lg-5 d-flex flex-lg-column flex-row justify-content-between">
              <div>
                <h3>TOTAL KG OF YOUR ROOST</h3>
                <h1>0 KG</h1>
              </div>
              <div>
                <h3>TOTAL KG OF YOUR ROOST</h3>
                <h1>0 KG</h1>
              </div>
            </div>
            <div className="right-layer row m-0 col-lg-7">
              <div className="calim1 p-md-5 p-2  col-lg-7 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex">
                  <h1>0.000000</h1>
                  <img src={logo1} alt="" className="mt-2" />
                </div>
                <h2 className="py-3">AVAILABLE EGG TO CLAIM</h2>
                <p className="py-3">est. 0.000000 egg a day</p>
              </div>
              <div className="calim2 col-lg-5 d-flex justify-content-center align-items-center py-3">
                <button className="py-1 px-5 border-0 ">Claim</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card py-3 row w-100" style={{backgroundColor:'#191a32'}} >
          <div className="row card-info m-0 col-12 justify-content-center px-lg-4">
            <div className="col-lg-8 col-12 card-info-detail m-0 p-0 d-flex flex-column justify-contnet-center">
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
                  <span class=" d-inline-block">
                    <button
                      disabled=""
                      type="button"
                      className="text-nowrap rounded-pill px-4 text-capitalize btn btn-primary btn-sm"
                    >
                      Roosted
                    </button>
                  </span>
                  <span class=" d-inline-block">
                    <button
                      disabled=""
                      type="button"
                      className="text-nowrap rounded-pill px-4 text-capitalize btn btn-primary btn-sm"
                    >
                      Unroost all
                    </button>
                  </span>
                </div>
              </div>
              <div className="custom row m-0 p-0">
                <div className="navbar d-flex justify-content-start col-lg-12 col-12">
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
                          <label htmlFor="Lowest rarity">Lowest rarity</label>
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
                          <label htmlFor="Highest rarity">Highest rarity</label>
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
                    <div class="p-2 d-flex justify-content-center align-items-center text-ligh py-3 text-light mt-5 ">
                      Please connect your wallet, to view your Chikn.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 justify-content-center text-light classic ms-md-0 mt-md-4 ms-lg-2 mt-lg-0">
              <div class="border-0 d-flex justify-content-between align-items-center card-header">
                <div class="d-flex flex-row w-100 align-items-center justify-content-between flex-wrap my-md-3 mt-lg-0">
                  <div
                    role="group"
                    className="common__TabButtonGroup-sc-1amidcb-1 kQtUGh d-none d-md-block btn-group col-lg-7 col-7 px-2"
                  >
                    <input
                      class="btn-check"
                      type="radio"
                      autocomplete="off"
                      id="radio-stake-0"
                      value="stake"
                      checked=""
                    />
                    <label
                      for="radio-stake-0"
                      role="button"
                      tabindex="0"
                      class="px-2 dark-bg dark_text-white btn btn-outline-primary"
                    >
                      Stake
                    </label>
                    <input
                      class="btn-check"
                      type="radio"
                      autocomplete="off"
                      id="radio-swap-1"
                      value="swap"
                    />
                    <label
                      for="radio-swap-1"
                      role="button"
                      tabindex="0"
                      class="px-3 dark-bg dark_text-white btn btn-outline-primary"
                    >
                      Swap
                    </label>
                  </div>
                  <div class="d-flex flex-column align-items-center d-none d-md-flex col-4 py-3">
                    <div class="RoostrTypography__RedTextBase-sc-1wwb9ns-13 RoostrTypography__RedText-sc-1wwb9ns-17 cqJgGZ dbuSFW">
                      0.000000
                      <img
                        src={logo1}
                        className="RoostTypeography__EggImage-sc-3st9az-55 iFfWEY"
                      />
                    </div>
                    <div class="dark_text-dirty-white d-flex justify-content-center">
                      YOUR TOTAL EGG
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div class="d-flex flex-column align-items-center justify-content-center">
                  <div className="a2five text-center">
                    0.000000
                    <img src={logo1} alt="" className="col-12" />
                    <p>YOUR STAKED EGG</p>
                  </div>
                  <div className="a2five text-center">
                    0.000000
                    <img src={logo2} alt="" className="col-2" />
                    <p>EST DAILY FEED</p>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center dark_text-white text-primary common__MultiplierBadge-sc-1amidcb-2 gOOSQU translate-middle-y always-primary">
                <div className="tooltipHolder multiplier dark_bg-primary d-flex justify-content-center align-items-center ms-md-5 ">
                  &nbsp;<span>0x</span>&nbsp;<span>MULTIPLIER</span>&nbsp;
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  role="group"
                  className="common__TabButtonGroup-sc-1amidcb-1 kQtUGh btn-group"
                >
                  <input
                    class="btn-check"
                    type="radio"
                    autocomplete="off"
                    id="radio-tab-stake-0"
                    value="tab-stake"
                    checked=""
                  />
                  <label
                    for="radio-tab-stake-0"
                    role="button"
                    tabindex="0"
                    class="px-3 dark-bg dark_text-white btn btn-outline-primary"
                  >
                    Stake
                  </label>
                  <input
                    class="btn-check"
                    type="radio"
                    autocomplete="off"
                    id="radio-tab-unstake-1"
                    value="tab-unstake"
                  />
                  <label
                    for="radio-tab-unstake-1"
                    role="button"
                    tabindex="0"
                    class="px-3 dark-bg dark_text-white btn btn-outline-primary"
                  >
                    Unstake
                  </label>
                </div>
              </div>
              <div class="d-flex justify-content-center ">
                <div className="RoostrTypography__GreyTextBase-sc-1wwb9ns-23 RoostrTypography__GreyTextMedium-sc-1wwb9ns-24 dFxBmG cPdIKs py-4">
                  WHEN YOU STAKE
                </div>
                <div class="mt-3 text-center"></div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="row m-0 row-column cmd justify-content-center align-items-center py-1">
                  <div className="col-3">
                    <img src={logo1} alt="" className="col-12 p-3" />
                  </div>
                  <div className="col-6">
                    <input
                      placeholder="0"
                      type="number"
                      id="formBasicEmail"
                      class="text-center px-0 form-control"
                      value=""
                    />
                  </div>
                  <div className="col-3">
                    <button
                      type="button"
                      class="px-2 btn btn-outline-secondary"
                    >
                      Max
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center py-1">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAxMiAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTEzNyAzNS45MDcyQzUuNzgyMjggMzYuMTc1OCA2LjIxNzcyIDM2LjE3NTggNi40ODYzIDM1LjkwNzJMMTAuODYzIDMxLjUzMDVDMTEuMTMxNiAzMS4yNjE5IDExLjEzMTYgMzAuODI2NSAxMC44NjMgMzAuNTU3OUMxMC41OTQ0IDMwLjI4OTMgMTAuMTU5IDMwLjI4OTMgOS44OTAzOSAzMC41NTc5TDYgMzQuNDQ4M0wyLjEwOTYxIDMwLjU1NzlDMS44NDEwMyAzMC4yODkzIDEuNDA1NTkgMzAuMjg5MyAxLjEzNzAxIDMwLjU1NzlDMC44Njg0MzUgMzAuODI2NSAwLjg2ODQzNSAzMS4yNjE5IDEuMTM3MDEgMzEuNTMwNUw1LjUxMzcgMzUuOTA3MlpNNS4zMTIyNyAwLjQyMDg5OEw1LjMxMjI3IDM1LjQyMDlMNi42ODc3MyAzNS40MjA5TDYuNjg3NzMgMC40MjA4OThMNS4zMTIyNyAwLjQyMDg5OFoiIGZpbGw9IiM2ODY4NjgiLz4KPC9zdmc+Cg=="
                  class="filter-white RoostrTypography__ArrowImage-sc-1wwb9ns-25 gheSAL"
                />
              </div>
              <div className="d-flex justify-content-center py-3">
                <div class="RoostrTypography__GreyTextBase-sc-1wwb9ns-23 RoostrTypography__GreyTextMedium-sc-1wwb9ns-24 dFxBmG cPdIKs">
                  YOUR EST. DAILY FEED
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="row m-0 row-column cmd justify-content-around align-items-center py-1">
                  <div className="col-3">
                    <img src={logo2} alt="" className="col-12 p-3" />
                  </div>
                  <div className="col-6">
                    <input
                      placeholder="0"
                      type="number"
                      id="formBasicEmail"
                      class="text-center px-0 form-control"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div className="button-btn-1 px-5 py-4">
                <button
                  disabled=""
                  type="button"
                  class="w-100 rounded-pill px-4 text-capitalize btn btn-primary btn-sm"
                >
                  Stake
                </button>
              </div>
            </div>
          </div>

          <div className="row m-0 justify-content-center">
            <div className="col-lg-11 justify-content-end row m-0">
            <div className="col-lg-3 col-12 mt-3 justify-content-end text-light classic">
              <div class="d-flex flex-row w-100 flex-wrap align-items-center justify-content-center justify-content-md-between my-md-3 px-lg-5 px-md-0 py-3 div-pto">
                <div class="RoostrTypography__RedTextBase-sc-1wwb9ns-13 RoostrTypography__RedTitleMedium-sc-1wwb9ns-21 cqJgGZ hFwwEt col-lg-5 col-md-5">
                  CLAIM FEED
                </div>
                <div className="d-flex flex-column col-lg-5 col-md-5  col-12">
                  <div className="flex flex-row pmik">
                    0.000000
                    <img src={logo2} alt="" className="ms-1" />
                  </div>
                  <div className="paragraph">TOTAL FEED HELD</div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-row justify-content-center py-3 RoostrTypography__RedTextBase-sc-1wwb9ns-13 RoostrTypography__RedTextXLarge-sc-1wwb9ns-15 cqJgGZ ztAgj d-none d-md-block text-center">
                  0.000000
                  <img
                    src={logo2}
                    class="RoostTypeography__FeedImage-sc-3st9az-57 RoostTypeography__FeedImageXLarge-sc-3st9az-63 etWoch cPUqCB"
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-para-center text-light py-3">
                  YOUR CLAIMABLE FEED
                </p>
              </div>
              <div class="d-flex flex-column px-3 px-md-5 gap-4 pb-5">
                <button
                  disabled=""
                  type="button"
                  class=" rounded-pill px-4 text-capitalize btn  btn-sm CLAIMABLE"
                >
                  claim
                </button>
                <button
                  disabled=""
                  type="button"
                  class="bg-transparent-btn rounded-pill px-4 text-capitalize btn btn-sm"
                >
                  claim and unstake all egg
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
