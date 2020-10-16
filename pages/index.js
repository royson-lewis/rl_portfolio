/** @format */

import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <main>
        <h1>Royson Lewis Portfolio</h1>
        <h2>Royson Lewis Portfolio</h2>
        <h3>Royson Lewis Portfolio</h3>
        <h4>Royson Lewis Portfolio</h4>
        <h5>Royson Lewis Portfolio</h5>
        <h6>Royson Lewis Portfolio</h6>
        <p>Paragraph text</p>
        <a href='#'>A Link to a page</a>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <button>Submit</button>
          <button disabled='disabled'>Submit</button>
          <br></br>
          <br></br>
          <button>
            <div className='spinnerHolderSmall'>
              <div className='spinner'></div>
            </div>
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <input></input>
        <input disabled='disabled'></input>
        <br></br>
        <textarea className='inputSuccess'></textarea>
        <ul>
          <li>UnOrdered List</li>
        </ul>
        <ol>
          <li>Ordered List</li>
        </ol>
        {/* <div className='progress'>
          <div className='bar'></div>
        </div>
        <div className='spinnerHolderFull'>
          <div className='spinner'></div>
        </div> */}
      </main>
    </>
  );
}
