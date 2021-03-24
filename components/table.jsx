/*
* file: Table.jsx
* Description:
*   -> A React table to display balances using pagination
*/

import PropTypes from 'prop-types';
import { useTable, usePagination } from "react-table";
import { toast } from "react-toastify";

const Table = ({ columns, data, onActionDelete }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize = 10 },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );
  return (
    <>
      <div className="pagination">
        <div className="page-btns">
          <span className="page-btn-text">Page:</span>
          <span className={[!canPreviousPage ? "page-disabled" : "", "page-btn", "page-btn-text"].join(" ")} onClick={canPreviousPage ? previousPage : null}>Back</span>
          <span className={[!canNextPage ? "page-disabled" : "", "page-btn", "page-btn-text"].join(" ")} onClick={canNextPage ? nextPage : null}>Next</span>
        </div>
        <div>
          <span>Current Page: {pageIndex + 1}/{pageCount > 0 ? pageCount : 1}</span>
        </div>
      </div>
      <table {...getTableProps()} className="table">
        <thead className="table-headers">
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((col) => (
                <th {...col.getHeaderProps()}>
                  <div className="table-header-text">{col.render("Header")}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="table-rows">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="table-row">
                {row.cells.map(cell => {
                  const isType = cell.column.id === "type";
                  const isAsset = cell.row.original.type === "Asset";
                  if (cell.column.id === "action") {
                    return <td {...cell.getCellProps()} onClick={onActionDelete.bind(null, cell.row.id)}><span className="table-remove">delete</span></td>
                  }
                  return <td {...cell.getCellProps()} 
                    className={[
                      cell.column.id !== "name" ? "dim" : "", 
                      isType && isAsset ? "table-row-asset" : "", 
                      isType && !isAsset ? "table-row-liability" : "", 
                      "table-cell-data"].join(" ")}>{cell.render("Cell")}</td>
              })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <style>
      {`
        .table {
          width: 100%;
          text-align: left;
          border-collapse: seperate;
          border-spacing: 0 0.2em;
          background-color: #F5F9FC;
          flex: 1;
        }
        .table-cell-data {
          word-break: break-all;
        }
        .pagination {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          font-weight: 300;
          font-size: 13px;
          margin: 10px 0;
        }
        .page-btn-text {
          margin-right: 5px;
        }
        .table-headers {
          font-size: 0.775rem;
          background-color: white;
        }
        .table-header-text {
          padding-top: 10px;
          padding-bottom: 10px;
          border-top: 1px solid #EFEFEF;
          border-bottom: 1px solid #EFEFEF;
        }
        .table-headers th, .table-rows {
          font-weight: 300;
        }
        .table-row td, .table-header-text {
          padding-left: 15px;
          padding-right: 15px;
        }
        .table-headers th {
          padding: 0;
        }
        .table-rows {
        }
        .table-row td {
          margin: 10px 0;
          padding-top: 20px;
          padding-bottom: 20px;
          background-color: white;
          transition: all 250ms ease-out;
        }
        .page-btn:hover {
          cursor: pointer;
        }
        .page-disabled {
          opacity: 0.4;
        }
        .table-remove {
          color: #FE7D7D;
        }
        .table-remove:hover {
          cursor: pointer;
        }
        .dim {
          color: #8D8D8D;
        }
        .table-row:hover td {
          color: #0092FF;
        }
        .table-row-asset {
          color: #00cba9;
        }
        .table-row-liability {
          color: #FE7D7D;
        }
      `}
      </style>
    </>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string,
    accessor: PropTypes.string,
  })),
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    balance: PropTypes.number,
    created: PropTypes.string,
  })),
  onActionDelete: PropTypes.func,
}

export default Table;
