/*
* file: Bar.jsx
* Description:
*   -> Ranking Bar/Card to display total and top 3 balances
*/

import PropTypes from "prop-types";
import { sortByBalance } from "../utils";

const Bar = ({title, total, data, current, color}) => {
  const topData = [...data];
  topData.sort(sortByBalance);
  const percentage =  (current / total) * 100;
  return (
    <>
      <div className="bar">
        <h5>{title}</h5>
        <div>
          <div className="bar-current">$ {current}</div>
          <div className="bar-progress-bar">
            <div className="bar-progress"></div>
          </div>
        </div>
        <div className="bar-ranking">
          <div><p>Top {title.toLowerCase()}</p></div>
          <table>
            <tbody>
              {topData.slice(0,3).map((d,i) => (
                <tr key={["bar", title, i].join("-")}>
                  <td><span className="bar-rank-row">{i + 1}</span></td>
                  <td><span className="bar-rank-row">{d.name}</span></td>
                  <td><span className="bar-rank-row">$ {d.balance}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <style jsx>{`
        .bar {
          display: flex;
          flex-flow: column;
          justify-content: center;
          box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.028),
                      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
                      0 100px 80px rgba(0, 0, 0, 0.07);
          margin-top: 20px;
          background-color: #2b2e4a;
          border-radius: 8px;
          color: white;
          padding: 20px;
        }
        .bar h5 {
          margin: 0;
          opacity: 0.7;
          font-weight: 300;
        }
        .bar-ranking {
          opacity: 0.7;
        }
        .bar-current {
          margin: 10px 0;
        }
        .bar-rank-row {
          margin: 0 20px;
        }
        .bar-progress-bar {
          flex: 1;
          background-color: #E8E8E8;
          border-radius: 8px;
          overflow: hidden;
          height: 10px;
          margin: 10px 0;
        }
        .bar-progress {
          width: ${percentage}%;
          height: 100%;
          background-color: ${color ? color : "#000"};
        }
      `}</style>
    </>
  )
}

Bar.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    balance: PropTypes.number,
    created: PropTypes.string,
  })),
  current: PropTypes.number,
  color: PropTypes.string,
}

export default Bar;