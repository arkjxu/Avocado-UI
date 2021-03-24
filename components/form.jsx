/*
* file: form.jsx
* Description:
*   -> A pop up fullscreen form for data input
*/

import { CurrentDateString } from "../utils";

const Form = ({onSubmit, onClose}) => {
  const onSubmitValidate = (e) => {
    e.preventDefault();
    const type = e.target["balance-type"].value;
    const name = e.target["balance-name"].value;
    const balance = parseFloat(e.target["balance"].value);
    const created = CurrentDateString();
    if (onSubmit) onSubmit({id: "", type, name, balance, created});
  }
  return (
    <form className="entry-form" onSubmit={onSubmitValidate}>
      <div className="entry-form-content">
        <div className="entry-form-title entry-group">
          <p>Add a balance</p>
        </div>
        <div className="entry-groups">
          <div className="entry-group">
            <span>Type</span>
            <div className="balance-type-options">
              <div className="balance-type-option">
                <input type="radio" name="balance-type" id="balance-type-asset" value="Asset" defaultChecked/>
                <label htmlFor="balance-type-asset">Asset</label>
              </div>
              <div className="balance-type-option">
                <input type="radio" name="balance-type" id="balance-type-liability" value="Liability"/>
                <label htmlFor="balance-type-liability">Liability</label>
              </div>
            </div>
          </div>
          <div className="entry-group">
            <span>Name</span>
            <input type="text" name="balance-name" id="balance-name" required/>
          </div>
          <div className="entry-group">
            <span>Balance</span>
            <input type="text" name="balance" id="balance" required/>
          </div>
        </div>
        <div className="entry-group entry-btns">
          <button className="entry-close-txt" onClick={onClose}>Cancel</button>
          <input className="entry-submitbtn" type="submit" value="Save"/>
        </div>
      </div>
      <style jsx>
      {`
        .entry-form, .entry-btns {
          display: flex;
        }
        .entry-form, .entry-submitbtn {
          color: #fff;
        }
        .entry-form {
          position: fixed;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 999;
        }
        .entry-form-title {
          background-color: #00cba9;
        }
        .entry-group {
          padding: 15px 20px;
        }
        .entry-form-title p {
          margin: 0;
        }
        .entry-btns {
          justify-content: flex-end;
          background-color: #F9F9F9;
        }
        .balance-type-option, .balance-type-options {
          display: inline-block;
        }
        .balance-type-option, .entry-group span {
          font-weight: 300;
        }
        .balance-type-option {
          margin-right: 25px;
          font-size: 0.8rem;
        }
        .balance-type-option label {
          padding: 0 5px;
        }
        .balance-type-option, .entry-group span {
          color: #000;
        }
        .entry-form-content, .entry-group input[type="text"] {
          background-color: #fff;
        }
        .entry-form-content {
          animation: FadeIn 350ms ease forwards;
          transition: all 350ms ease;
          border-radius: 5px;
          overflow: hidden;
        }
        .entry-group span {
          font-size: 0.857rem;
          display: inline-block;
          width: 100px;
        }
        .entry-group input[type="text"] {
          border: none;
          box-shadow: 0 0 0.5px 0.5px #00cba9;
          padding: 5px;
          font-size: 16px;
        }
        .entry-close-txt {
          background-color: transparent;
          color: #00cba9;
        }
        .entry-submitbtn {
          background-color: #00cba9;
        }
        .entry-submitbtn, .entry-close-txt {
          text-transform: uppercase;
          border: none;
          padding: 5px 10px;
          margin: 0 5px;
        }
        .entry-submitbtn:hover, .entry-close-txt:hover {
          cursor: pointer;
        }
        @keyframes FadeIn {
          0% {
            transform: translateY(-250px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}
      </style>
    </form>
  );
}

export default Form;