/*
* file: Tab.jsx
* Description:
*   -> Authorized tabs for navigation, but there's only one page
*/

import Link from "next/link";
import { useRouter } from "next/router";

const Tabs = (props) => {
  const router = useRouter();
  return (
    <>
      <div className="tabs">
        <Link href="/summary">
          <a className={["tab", router.pathname === "/summary" ? "tab-active" : ""].join(' ')}>
            <i className={["iconfont", "icon"].join(" ")}>&#xe821;</i>
            <span>Summary</span>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .tabs {
          display: flex;
          flex-flow: row nowrap;
          padding: 10px 0;
          justify-content: center;
          align-items: center;
          border-top: 1px solid #00cba9;
          border-bottom: 1px solid #00cba9;
        }
        .tab {
          margin: 0 15px;
        }
        .tab-active {
          color: #00cba9;
        }
        .icon {
          margin-right: 5px;
        }
        @media (max-width: 650px) {
          .tab {
            margin: 0;
            width: 100%;
            text-align: center;
            padding: 10px 0;
          }
          .tabs {
            padding: 0;
          }
          .tab span {
            display: none;
          }
          .tab-active {
            color: #fff;
            background-color: #00cba9;
          }
        }
      `}</style>
    </>
  )
}

export default Tabs;