import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';

const Table = ({ columns, data }) => {
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
    state: { pageIndex, pageSize },
    setPageSize,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
    useSortBy,
    usePagination
  );

  return (
    <>
      <table className="table table-striped" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ cursor: column.canSort ? 'pointer' : 'default' }}
                >
                  {column.render('Header')}
                  {/* Sorting Icons */}
                  {column.canSort ? (
                    <span style={{ marginLeft: '6px' }}>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i className="bi bi-caret-down-fill"></i>
                        ) : (
                          <i className="bi bi-caret-up-fill"></i>
                        )
                      ) : (
                        <i className="bi bi-chevron-expand"></i>
                      )}
                    </span>
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td key={cell.id} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <button
            className="btn btn-outline-primary btn-sm me-1"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </button>
          <button
            className="btn btn-outline-primary btn-sm me-1"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {'<'}
          </button>
          <button
            className="btn btn-outline-primary btn-sm me-1"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {'>'}
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>
        </div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <select
          className="form-select form-select-sm w-auto"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Table;
