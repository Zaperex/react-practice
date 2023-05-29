import { Link } from "react-router-dom";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";

const apiURL = "https://cloudsking.com/react_api.php";

interface Response {
  message: string;
  status_code: number;
}

function MessagePage() {
  const [nameField, setNameField] = useState("");
  const [phoneField, setPhoneField] = useState("");
  const [messageField, setMessageField] = useState("");
  const [post, setPost] = useState<Response | null | undefined>(null);

  // Using this to bypass the CORS, need to manually enable the site first
  const url = "https://cors-anywhere.herokuapp.com/" + apiURL;

  async function formSubmission() {
    const options = {
      method: "POST",
      url: url,
      params: {
        name: nameField,
        phone_number: phoneField,
        message: messageField,
      },
    };

    try {
      const response: AxiosResponse<Response> = await axios.request(options);
      // Save the response message and its status code
      setPost(response.data);
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setPost(undefined);
    }
  }

  return (
    <>
      <h1>Frank's personal website</h1>
      <h2>Hello! Welcome to Frank's Home, please feel free to explore!</h2>
      <br />
      <h3>Message Me</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formSubmission();
          setPhoneField("");
          setNameField("");
          setMessageField("");
        }}
      >
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Insert your name"
            value={nameField}
            onChange={(e) => setNameField(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Phone Number: </label>
          <input
            type="text"
            placeholder="Insert your phone number"
            value={phoneField}
            onChange={(e) => setPhoneField(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Message Content: </label>
          <input
            type="text"
            placeholder="Insert your message"
            value={messageField}
            onChange={(e) => setMessageField(e.target.value)}
          ></input>
        </div>

        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>

      {post === undefined && (
        <div className="alert error" role="alert">
          Unexpected Error has occurred
          <button
            type="button"
            className="closebtn"
            onClick={() => setPost(null)}
          >
            &times;
          </button>
        </div>
      )}
      {post !== null && post !== undefined && (
        <div className="alert" role="alert">
          {post.message}
          <button
            type="button"
            className="closebtn"
            onClick={() => setPost(null)}
          >
            &times;
          </button>
        </div>
      )}

      <br />
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
      </Link>
    </>
  );
}

export default MessagePage;
