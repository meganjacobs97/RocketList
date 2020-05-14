import React, { Component } from "react";
import Subcategory from "../components/Subcategory";
import Col from "../components/Col";
import VGrid from "../components/VGrid";
import TopCat from "../components/TopCat";
import AllCat from "../components/AllCat";
import Posts from "../components/Posts";
import TPoints from "../components/TPoints";
import TPoster from "../components/TPoster";
import Mods from "../components/Mods";

// import { connect } from 'react-redux'

const testPostArr = [
  {
    post: {
      title: "I love pokemon",
      body: "my favorite is chandelure",
      date_created: "13-may-2020",
      replies: [],
      subcategory: {
        name: "pokemon go",
        description: "all about pokemon go",
        category: {
          name: "pokemon",
          description: "all things pokemon related",
        },
      },
      author: {
        username: "testUserDion",
      },
    },
  },
  {
    post: {
      title: "I love pokemon",
      body: "my favorite is magikarp",
      date_created: "13-may-2020",
      replies: [],
      subcategory: {
        name: "pokemon go",
        description: "all about pokemon go",
        category: {
          name: "pokemon",
          description: "all things pokemon related",
        },
      },
      author: {
        username: "louis",
      },
    },
  },
];

export class CategoryView extends Component {
  state = {
    parentCategory: "Pokemon",
    currCategory: "Pokemon Mobile",
    subCategory: ""
  };

  render() {
    return (
      <VGrid size="12">
        <Col lgsize="2" visibility="hidden lg:block">
          <div className="grid invisible lg:visible">
            <Subcategory parent_category={this.state.parentCategory} name={this.state.currCategory} />
            <br></br>
            <TopCat name={"Rory"} />
            <br></br>
            <AllCat />
          </div>
        </Col>
        <Col lgsize="6" mobsize="10" visibility="col-start-2 lg:col-start-4">
          <Posts posts={testPostArr} />
        </Col>
        <Col lgsize="2" mobsize="10" visibility="lg:col-start-11">
          <div className="grid invisible lg:visible">
            <TPoints name={"Paul"} />
            <br></br>
            <TPoster name={"Dion"} />
          </div>
          <br></br>
          <Mods name={"Louis"} />
        </Col>
      </VGrid>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)
export default CategoryView;

// check class repo, week 10, folder 19, activity 15 for class based components

/*
  <body>
    <main class="w-3/5 p-8 mx-auto">
      <h1 class="mb-4">tailwind collapsible</h1>
      <section class="shadow">
        <article class="border-b">
          <div class="border-l-2 border-transparent">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span class="text-grey-darkest font-thin text-xl">
                Massa vitae tortor condimentum lacinia quis vel eros donec
              </span>
              <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  class=""
                  data-reactid="266"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </header>
          </div>
        </article>
        <article class="border-b">
          <div class="border-l-2 bg-grey-lightest border-indigo">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span class="text-indigo font-thin text-xl">
                Lorem ipsum dolor sit amet
              </span>
              <div class="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo">
                <svg
                  aria-hidden="true"
                  data-reactid="281"
                  fill="none"
                  height="24"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </div>
            </header>
            <div>
              <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                <ul class="pl-4">
                  <li class="pb-2">consectetur adipiscing elit</li>
                  <li class="pb-2">
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </li>
                  <li class="pb-2">
                    Viverra orci sagittis eu volutpat odio facilisis mauris
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <article class="border-b">
          <div class="border-l-2 border-transparent">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span class="text-grey-darkest font-thin text-xl">
                Lorem dolor sed viverra ipsum
              </span>
              <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  class=""
                  data-reactid="266"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </header>
          </div>
        </article>
        <article class="border-b">
          <div class="border-l-2 border-transparent">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span class="text-grey-darkest font-thin text-xl">
                Egestas sed tempus urna
              </span>
              <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  class=""
                  data-reactid="266"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </header>
          </div>
        </article>
      </section>
    </main>
  </body>;
*/
