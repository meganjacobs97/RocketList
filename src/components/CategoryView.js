import React, { Component } from "react";
// import { connect } from 'react-redux'

export class CategoryView extends Component {
  render() {
    return (
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <div className="grid invisible lg:visible">
            <div className="visible container rounded border-2 border-RocketRed">
              <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                <span className="text-grey-darkest font-thin text-xl">
                  Subcategories here
                </span>
                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
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
              </div>
              <h1>Subcategories</h1>
              <h1>Subcategories</h1>
              <h1>Subcategories</h1>
              <h1>Subcategories</h1>
              <h1>Subcategories</h1>
            </div>
            <br></br>
            <div className="container rounded border-2 border-RocketRed">
              <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                <span className="text-grey-darkest font-thin text-xl">
                  Top Categories
                </span>
                <svg
                  aria-hidden="true"
                  className="invisible"
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
                ></svg>
              </div>
              <h1>Anime/Manga</h1>
              <h1>Sports</h1>
              <h1>Lifestyle</h1>
              <h1>Technology/Electronics</h1>
              <h1>Misc</h1>
            </div>
            <br></br>
            <div className="container rounded border-2 border-RocketJames">
            <h1 className="text-center">All categories</h1>
            {/* make this into a list */}
            <div className="ml-4 mb-1">
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
            </div>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <h1 className="text-center">placeholder for posts in this category</h1>
        </div>
        <div className="col-span-2">
          <div className="grid invisible lg:visible">
            <div className="container rounded border-2 border-RocketJessie">
            <h1 className="text-center">Top Point Holders</h1>
            {/* make this into a list */}
            <div className="ml-4 mb-1">
              <p>Rory</p>
              <p>Marlon</p>
              <p>Paul</p>
              <p>Dion</p>
              <p>Louis</p>
            </div>
            </div>
            <br></br>
            <div className="container rounded border-2 border-RocketRed">
            <h1 className="text-center">Top Posters</h1>
            {/* make this into a list */}
            <div className="ml-4 mb-1">
              <p>Rory</p>
              <p>Marlon</p>
              <p>Paul</p>
              <p>Dion</p>
              <p>Louis</p>
            </div>
          </div>
            <br></br>
            <div className="container rounded border-2 border-RocketRed">
            <h1 className="text-center">Mods</h1>
            {/* make this into a list */}
            <div className="ml-4 mb-1">
              <p>Rory</p>
              <p>Marlon</p>
              <p>Paul</p>
              <p>Dion</p>
              <p>Louis</p>
            </div>
          </div>
          </div>
        </div>
      </div>
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