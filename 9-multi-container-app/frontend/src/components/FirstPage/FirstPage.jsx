import { useState,useEffect } from 'react'
import axios from 'axios'

import "./FirstPage.css";

function FirstPage(props) {
    const [list, setList] = useState([]);
  const submit = () => {};
  const deleteItem = (id) => {
  }
  useEffect(() => {
    // ********* list call
  }, [])
  return (
    <>
      <main className="main__container">
        <div>
          <h2> Save Your Notes</h2>
        </div>
        <div className="input__div">
          <div>
            <label htmlFor="">Notes: </label>
            <input type="text" />
          </div>
          <div
            className="input__btn"
            style={{ display: "flex", alignItems: "center" }}
          >
            <button type="button" onClick={() => submit()}>
              Submit
            </button>
          </div>
        </div>
        <div className="table__div">
            {list.map((row, index) => (
                <div className='row__div'>
                    <div className='row__data--seno'>{index + 1}</div>
                    <div className='row__data--div'>{row?.note}</div>
                    <div className='row__action--div'>
                        <button onClick={() => deleteItem(row?._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
      </main>
    </>
  );
}

export default FirstPage;
