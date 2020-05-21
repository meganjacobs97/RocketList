import React, { useState, useEffect } from "react";
//import context 
import gql from "graphql-tag";
import { useMutation} from "@apollo/react-hooks";



function LoginBox(props) {
  //username and password states 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");


  const handleUsernameChange = event => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  //handles creating account 
  const CREATE_ACCOUNT = gql`
  mutation createUser(
    $username: String
    $password: String
  ) {
    createUser(
      userInput: {
        username: $username
        password: $password
      }
    ) {
      username
      _id
    }
  }`;  

  const [createUser, { data, loading, error }] = useMutation(CREATE_ACCOUNT);

  useEffect(() => {
    if (error) console.log(error); 

    if(!loading && data) {
      console.log(data); 
      props.setIsLoggedIn(true)
      localStorage.setItem("userId",JSON.stringify(data.createUser.id)) 
      console.log(data.createUser); 
      localStorage.setItem("username",JSON.stringify(data.createUser.username))
      setUsername("")
      setPassword(""); 
    }
  }, [data,loading,error])
 
  const createacc = (requestBody) => {
    createUser({
      variables: {
        username: username,
        password: password
      }
    })
  }


  //handles login 
  const LOGIN = gql`
  mutation signin(
    $username: String!
    $password: String!
  ) {
    login(
        username: $username
        password: $password
    ) {
      _id
      username
    }
  }`; 

  const [signin, {data: SignIndata,loading: SignInloading,error: SignInerror}] = useMutation(LOGIN); 

  useEffect(() => {
    if(SignInerror) console.log(SignInerror); 
    if(!SignInloading && SignIndata) {
      console.log(SignIndata); 
      props.setIsLoggedIn(true)
      localStorage.setItem("userId",JSON.stringify(SignIndata.login._id)) 
      localStorage.setItem("username",JSON.stringify(SignIndata.login.username))
      setUsername("")
      setPassword(""); 
    }
  }, [SignIndata,SignInloading,SignInerror])

  const login = () => {
    signin({
      variables: {
        username: username,
        password: password
      }
    })
  }
  
  
  
  
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-RocketRed">
    <form onSubmit={(e) => {
      e.preventDefault(); 
      
      if(username === "" || password === "") {
        return; 
      }
      login(); 
      
    }}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          name="password"
          type="password"
          placeholder="******************"
          value={password}
          onChange={handlePasswordChange}
        />
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          name="login"
        >
          Sign In
        </button>
      </div>
      </form>
      <form onSubmit={(e) => {
         e.preventDefault();
          if(username === "" || password === "") {
            return; 
          }
          createacc();   
      }}>
      <div className="flex items-center justify-between my-px" name="signup">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          name="signup" 
        >
          Sign Up
        </button>
      </div>
      </form>
        
        {/* <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a> */}
      </div>

   
  );

  
}



export default LoginBox;
