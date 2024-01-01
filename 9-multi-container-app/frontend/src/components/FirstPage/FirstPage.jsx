import { useState, useEffect } from "react";
import axios from "axios";

import "./FirstPage.css";
const END_POINT = `http://localhost:3001`

function FirstPage(props) {
  const [list, setList] = useState([]);
  const [input, setInput] = useState(null)
  const getList = async () => {
   const response = await axios.get(END_POINT + '/api/get-list')
   setList(response?.data?.response)
   console.log('response >>>>', response)
  };
  const submit = async () => {
    let payload = {
      note: input
    }
    const response = await axios.post(END_POINT + '/api/create', payload)
    console.log('submit response >>>>', response)
    getList()
  };
  const deleteItem = async (id) => {
    const response = await axios.delete(END_POINT + `/api/delete/${id}`)
    console.log('deleteItem response >>>>', response)
    getList()
  };

  useEffect(() => {
    getList()
  }, []);

  return (
    <>
      <main className="main__container">
        <div>
          <h2> Save Your Notes</h2>
        </div>
        <div className="input__div">
          <div>
            <label htmlFor="">Notes: </label>
            <input type="text" value={input} onChange={(event) => {
              console.log('event >>>>', event)
                setInput(event?.target?.value)
            }}/>
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
            <div className="row__div">
              <div className="row__data--seno">{index + 1}</div>
              <div className="row__data--div">{row?.note}</div>
              <div className="row__action--div">
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
