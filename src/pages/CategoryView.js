import React, { useState, useEffect } from "react";
// import Subcategory from "../components/Subcategory";
import Col from "../components/Col";
import VGrid from "../components/VGrid";
// import TopCat from "../components/TopCat";
import AllCat from "../components/AllCat";
import Posts from "../components/Posts";
// import TPoints from "../components/TPoints";
// import TPoster from "../components/TPoster";
// import Mods from "../components/Mods";
import OrderedList from "../components/OrderedList";
import UnorderedList from "../components/UnorderedList";
import queryForSubCatsByParentId from "../utils/API";
import LoginBox from "../components/LoginBox";
import InputPost from "../components/InputPost";

// Query graphql
import gql from "graphql-tag";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
const GET_USERS = gql`
  query {
    users {
      _id
      username
      email
    }
  }
`;
const GET_SUBCATS = gql`
  query {
    subcategories {
      _id
      name
      description
      category {
        name
        _id
      }
    }
  }
`;
const GET_ALLCATS = gql`
  query {
    categories {
      name
      _id
    }
  }
`;
const GET_SUBCATS_BY_CATID = (parentId) => {
  console.log(
    useQuery(gql`
  query {
    category(id: "${parentId}") {
      name
      _id
      subcategories {
        name
        _id
      }
    }
  }
`)
  );
  return useQuery(gql`
    {
      category(id: "${parentId}") {
        name
        _id
        subcategories {
          name
          _id
        }
      }
    }
  `);
};

const GET_SUBCATS_BY_VIDEOGAME = gql`
  query {
    category(id: "5ebe3b5dad332d50981177ef") {
      name
      _id
      subcategories {
        name
        _id
      }
    }
  }
`;

const GET_SUBCATS_BY_DIY = gql`
  query {
    category(id: "5ebe3b67ad332d50981177f0") {
      name
      _id
      subcategories {
        name
        _id
      }
    }
  }
`;

const GET_SUBCATS_BY_PKMN = gql`
  query {
    category(id: "5ebe3b77ad332d50981177f1") {
      name
      _id
      subcategories {
        name
        _id
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  {
    posts {
      _id
      title
      body
      date_created
      category {
        name
      }
      subcategory {
        name
      }
      author {
        username
      }
    }
  }
`;

// Lazy query to update subcategories
// example
// function DelayedQuery() {
//   const [dog, setDog] = useState(null);
//   const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);

//   if (loading) return <p>Loading ...</p>;

//   if (data && data.dog) {
//     setDog(data.dog);
//   }

//   return (
//     <div>
//       {dog && <img src={dog.displayImage} />}
//       <button onClick={() => getDog({ variables: { breed: 'bulldog' } })}>
//         Click me!
//       </button>
//     </div>
//   );
// }

// Dion
// function delayedDIY() {
//   // const [dog, setDog] = useState(null);
//   const [getDIYSubCats, { loading, data }] = useLazyQuery(GET_SUBCATS_BY_DIY);

//   // if (loading) return <p>Loading ...</p>;

//   if (data && data.category) {
//     setSubCategories(data.category.subcategories.map(subcategory => subcategory.name))
//   }

//   return (
//     <div>
//       {dog && <img src={dog.displayImage} />}
//       <button onClick={() => getDIYSubCats({ variables: { breed: 'bulldog' } })}>
//         Click me!
//       </button>
//     </div>
//   );
// }

// import { connect } from 'react-redux'

const useSearch = (categoryId) => {
  console.log("i used a search lol");
};

function CategoryView(props) {
  // const { parentCategory, parentCategoryId, currCategory, subCategories } = props.subcategory;
  // const hamburger = props.chicken;
  // Sets state for rendered components (subcategories, topCategories, allCategories, topPoints, topPosters, and categoryMods)
  const [subCategories, setSubCategories] = useState({
    parentCategory: "",
    parentCategoryId: "",
    currCategory: "",
    subCategories: [],
  });
  const [topCategories, setTopCategories] = useState({
    topCategories: [],
    title: "",
  });
  const [allCategories, setAllCategories] = useState({
    allCategories: [],
    title: "",
  });
  const [topPoints, setTopPoints] = useState({
    topPoints: [],
  });
  const [topPosters, setTopPosters] = useState({
    topPosters: [],
  });
  const [categoryMods, setCategoryMods] = useState({
    mods: [],
  });
  const [posts, setPosts] = useState({
    postsDisplay: [],
  });

  // Queries database to get users (placeholder, will get mods)
  // const { loading: userLoading, error: userError, data: userData } = useQuery(
  //   GET_USERS
  // );
  // Queries database to get all subcategories
  const {
    loading: subCatLoading,
    error: subCatError,
    data: subCatData,
  } = useQuery(GET_SUBCATS);

  // Queries database to get all subcategories in video games
  const {
    loading: videoGameLoading,
    error: videoGameError,
    data: videoGameData,
  } = useQuery(GET_SUBCATS_BY_VIDEOGAME);

  // Queries database to get all subcategories in pokemon
  const {
    loading: pokemonLoading,
    error: pokemonError,
    data: pokemonData,
  } = useQuery(GET_SUBCATS_BY_PKMN);

  // Queries database to get all subcategories for a given ID!
  // let queryId = "5ebe3b5dad332d50981177ef";
  // const {
  //   loading: subCatIdLoading,
  //   error: subCatIdError,
  //   data: subCatIdData,
  // } = useQuery(GET_SUBCATS_BY_CATID(queryId || "5ebe3b67ad332d50981177f0"));

  // Queries database to get all categories
  const {
    loading: allCatLoading,
    error: allCatError,
    data: allCatData,
  } = useQuery(GET_ALLCATS);
  // Queries database to get top categories (placeholder)
  const {
    loading: topCatLoading,
    error: topCatError,
    data: topCatData,
  } = useQuery(GET_ALLCATS);
  // Queries database to get top points holders (placeholder)
  const {
    loading: topPointsLoading,
    error: topPointsError,
    data: topPointsData,
  } = useQuery(GET_USERS);
  // Queries database to get top posters (placeholder)
  const {
    loading: topPostersLoading,
    error: topPostersError,
    data: topPostersData,
  } = useQuery(GET_USERS);
  // Queries database to get mods (placeholder)
  const { loading: modLoading, error: modError, data: modData } = useQuery(
    GET_USERS
  );
  // Queries database to get all posts
  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery(GET_ALL_POSTS);

  const handleUserClick = (userId) => {
    console.log(userId);
  };

  // on page load, updates state objects
  useEffect(() => {
    // if(userLoading) console.log("help")
    // if(userError) console.log("I need somebody")
    // if(userLoading) return "Loading...";
    // if(userError) return `Error! $s{error.message}`;
    // if (subCatData) {
    //   console.log("hey")
    //   console.log(subCatData)
    // setSubCategories({
    //   ...subCategories,
    //   parentCategory: subCatData.category.name,
    //   currCategory: subCatData.category.name,
    //   subCategories: subCatData.subcategories.map(
    //     (subcategory) => subcategory.name
    //   ),
    // });
    // }
    // if (videoGameData) {
    //   setSubCategories({
    //     ...subCategories,
    //     parentCategory: videoGameData.category.name,
    //     currCategory: videoGameData.category.name,
    //     subCategories: videoGameData.category.subcategories.map(
    //       (subcategory) => ({ name: subcategory.name, id: subcategory._id })
    //     ),
    //   });
    // }
    // if (pokemonData) {
    //   setSubCategories({
    //     ...subCategories,
    //     parentCategory: pokemonData.category.name,
    //     currCategory: pokemonData.category.name,
    //     subCategories: pokemonData.category.subcategories.map(
    //       (subcategory) => ({ name: subcategory.name, id: subcategory._id })
    //     ),
    //   });
    // }
    // if (subCatIdData.length) {
    //   console.log(subCatIdData);
    // setSubCategories({
    //   ...subCategories,
    //   parentCategory: subCatIdData.category.name,
    //   currCategory: subCatIdData.category.name,
    //   subCategories: subCatIdData.category.subcategories.map(
    //     (subcategory) => ({
    //       name: subcategory.name,
    //       id: subcategory._id,
    //     })
    //   ),
    // });
    // }
    if (topCatLoading) {
      setTopCategories({
        ...topCategories,
        title: "Loading...",
      });
    }
    if (topCatData) {
      setTopCategories({
        ...topCategories,
        title: "Top Categories",
        topCategories: topCatData.categories.map((category) => ({
          name: category.name,
          id: category._id,
        })),
      });
    }
    if (allCatLoading) {
      setAllCategories({
        ...allCategories,
        title: "Loading...",
        allCategories: ["Loading categories..."],
      });
    }
    if (allCatData) {
      setAllCategories({
        ...allCategories,
        title: "All Categories",
        allCategories: allCatData.categories.map((category) => ({
          name: category.name,
          id: category._id,
        })),
      });
    }
    if (topPointsData) {
      setTopPoints({
        ...topPoints,
        topPoints: topPointsData.users.map((user) => ({
          name: user.username,
          id: user._id,
        })),
      });
    }
    if (topPostersData) {
      setTopPosters({
        ...topPosters,
        topPosters: topPostersData.users.map((user) => ({
          name: user.username,
          id: user._id,
        })),
      });
    }
    if (modData) {
      setCategoryMods({
        ...categoryMods,
        mods: modData.users.map((user) => ({
          name: user.username,
          id: user._id,
        })),
      });
    }
    if (postsData) {
      // console.log(postsData.posts);
      setPosts({
        ...posts,
        postsDisplay: postsData.posts.map((post) => ({
          id: post._id,
          author: post.author.username,
          title: post.title,
          date_created: post.date_created,
          body: post.body,
          parentCategory: post.category.name,
          subCategory: post.subcategory.name,
        })),
      });
    }
  }, [
    // subCatData,
    // subCatIdData,
    // videoGameData,
    // pokemonData,
    topCatData,
    allCatData,
    topPointsData,
    topPostersData,
    modData,
    postsData,
  ]);

  const selectCat = (id) => {
    // GET_SUBCATS_BY_CATID(id)
    // useSearch();
    // console.log(queryId)
    // queryId = id;
    // console.log(queryId)
    console.log(id);
  };

  // useEffect(() => {
  // if (subCategories.parentCategoryId === "5ebe3b5dad332d50981177ef") {
  //   setSubCategories({
  //     ...subCategories,
  //     parentCategory: "Video Games",
  //     currCategory: "Video Games",
  //     subCategories: ["WoW", "Minecraft", "Misc"],
  //   });
  // } else if (subCategories.parentCategoryId === "5ebe3b67ad332d50981177f0") {
  //   setSubCategories({
  //     ...subCategories,
  //     parentCategory: "DIY",
  //     currCategory: "DIY",
  //     subCategories: ["Misc"],
  //   });
  // } else if (subCategories.parentCategoryId === "5ebe3b67ad332d50981177f0") {
  //   setSubCategories({
  //     ...subCategories,
  //     parentCategory: "Pokemon",
  //     currCategory: "Pokemon",
  //     subCategories: ["Pokmeon Go"],
  //   });
  // }
  // setSubCategories({
  //   ...subCategories,
  //   parentCategory: subCatResData.category.name,
  //   currCategory: subCatResData.category.name,
  //   subCategories: subCatResData.subcategories.map((subcategory) => ({
  //     name: subcategory.name,
  //     id: subcategory._id,
  //   })),
  // });
  // console.log(parentCatId)
  // const queryForSubCatsByParent = `gql
  //   {
  //     category(id: "${parentCatId}") {
  //       name
  //       _id
  //       subcategories {
  //         name
  //         _id
  //       }
  //     }
  //   }
  // `;
  // useQuery(queryForSubCatsByParent);
  // console.log(queryForSubCatsByParent)
  // const {
  //     loading: subCatIdLoading,
  //     error: subCatIdError,
  //     data: subCatIdData,
  //   }
  //   = GET_SUBCATS_BY_CATID(parentCatId);
  // if (subCatIdData) {
  // console.log(subCatIdData)
  // console.log("No data")
  // setSubCategories({
  //   ...subCategories,
  //   parentCategory: subCatIdData.category.name,
  //   currCategory: subCatIdData.category.name,
  //   subCategories: subCatIdData.category.subcategories.map(
  //     (subcategory) => ({
  //       name: subcategory.name,
  //       id: subcategory._id
  //     })
  //   ),
  // });
  // }
  // const [subCategories, setSubCategories] = useState({
  //   parentCategory: "",
  //   currCategory: "",
  //   subCategories: [],
  // });
  //   console.log("subCats changed");
  // });

  useEffect(() => {}, [subCategories]);

  const handleCategoryClick = (parentId) => {
    console.log(parentId);
    // if (parentId === "5ebe3b5dad332d50981177ef") {
    //   setSubCategories({
    //     ...subCategories,
    //     parentCategory: "Video Games",
    //     parentCategoryId: `${parentId}`,
    //     currCategory: "Video Games",
    //     subCategories: ["WoW", "Minecraft", "Misc"],
    //   });
    // }
    // const {
    //   loading: subCatIdLoading,
    //   error: subCatIdError,
    //   data: subCatIdData,
    // } = GET_SUBCATS_BY_CATID(id);
    // console.log(GET_SUBCATS_BY_CATID(id))
    // console.log(subCatIdData);
    // setSubCategories({
    //   ...subCategories,
    //   parentCategoryId: parentId,
    // });
    // console.log("subcats changed from subcatstates");

    // useQuery(queryForSubCatsByParent)
    // console.log(queryForSubCatsByParent)
    // };
    console.log("used an effect");
    // Users().then();
  };

  // Lazy query for DIY
  // const [dog, setDog] = useState(null);
  const [getDIYSubCats, { loading: diySubCatLoading, data: diySubCatData }] = useLazyQuery(GET_SUBCATS_BY_DIY);

  // if (loading) return <p>Loading ...</p>;

  if (diySubCatData && diySubCatData.category) {
    console.log("I got clicked and have DIY data");
    console.log(diySubCatData.category.subcategories);
    // setSubCategories({
    //   subcategories: diySubCatData.category.subcategories.map((subcategory) => ({
    //     ...subCategories,
    //     name: subcategory.name,
    //     id: subcategory._id,
    //   })),
    // });
  }

  // Lazy query for Pokemon
  // const [dog, setDog] = useState(null);
  const [getPkmnSubCats, { loading: pkmnLoading, data: pkmnData }] = useLazyQuery(GET_SUBCATS_BY_PKMN);

  // if (loading) return <p>Loading ...</p>;

  if (pkmnData && pkmnData.category) {
    console.log("I got clicked and have pokemon data");
    console.log(pkmnData.category.subcategories);
    // setSubCategories({
    //   subcategories: diySubCatData.category.subcategories.map((subcategory) => ({
    //     ...subCategories,
    //     name: subcategory.name,
    //     id: subcategory._id,
    //   })),
    // });
  }

  // Lazy query for video games
  // const [dog, setDog] = useState(null);
  const [getVideoGameSubCats, { loading: vidGamLazyLoading, data: vidGamLazyData }] = useLazyQuery(GET_SUBCATS_BY_VIDEOGAME);

  // if (loading) return <p>Loading ...</p>;

  if (vidGamLazyData && vidGamLazyData.category) {
    console.log("I got clicked and have video game data");
    console.log(vidGamLazyData.category.subcategories);
    // setSubCategories({
    //   subcategories: diySubCatData.category.subcategories.map((subcategory) => ({
    //     ...subCategories,
    //     name: subcategory.name,
    //     id: subcategory._id,
    //   })),
    // });
  }

  // return (
  //   <div>
  //     {dog && <img src={dog.displayImage} />}
  //     <button onClick={() => getDIYSubCats({ variables: { breed: 'bulldog' } })}>
  //       Click me!
  //     </button>
  //   </div>
  // );

  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="grid invisible lg:visible">
          <UnorderedList
            selectItem={handleCategoryClick}
            category={`Subcategories in ${subCategories.parentCategory}`}
            list={subCategories.subCategories}
          />
          <br></br>
          <OrderedList
            selectItem={handleCategoryClick}
            category={topCategories.title}
            list={topCategories.topCategories}
          />
          <br></br>
          <AllCat
            selectCat={handleCategoryClick}
            category={allCategories.title}
            list={allCategories.allCategories}
          />
        </div>
      </Col>
      <Col lgsize="6" mobsize="10" visibility="col-start-2 lg:col-start-4">
        <div className="border-2 border-RocketBlack container rounded px-2">
          <h1>Current category: {subCategories.currCategory}</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => getDIYSubCats()}>I console log DIY queries</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => getPkmnSubCats()}>I console log Pokemon queries</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => getVideoGameSubCats()}>I console log video game queries</button>
          {posts.postsDisplay.map((post) => (
            <Posts
              title={post.title}
              body={post.body}
              date_created={post.date_created}
              subcategory={post.subCategory}
              category={post.parentCategory}
              author={post.author}
              postId={post.id}
            />
          ))}
        </div>
      </Col>
      <Col lgsize="2" mobsize="10" visibility="lg:col-start-11">
        <div className="grid invisible lg:visible">
          {props.isLoggedIn ? <InputPost /> : <LoginBox />}
          {/* {props.isLoggedIn ? <InputPost /> : ""} */}
          <br></br>
          <OrderedList
            selectItem={handleUserClick}
            category="Top Points Holders"
            list={topPoints.topPoints}
          />
          <br></br>
          <OrderedList
            selectItem={handleUserClick}
            category="Top Posters"
            list={topPosters.topPosters}
          />
        </div>
        <br></br>
        <UnorderedList
          selectItem={handleUserClick}
          category="Mods"
          list={categoryMods.mods}
        />
      </Col>
    </VGrid>
  );
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
