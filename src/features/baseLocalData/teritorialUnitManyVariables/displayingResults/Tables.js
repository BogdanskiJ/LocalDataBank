import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useMemo } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTeritorialUnitFinalData, selectTeritorialUnitFinalValues } from '../teritorialUnitManyVariablesSlice';
import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';





function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Cupcake', 0, 0, 0, 0, 0, 0),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];

const EnhancedTableHead = ({ order, orderBy, onRequestSort }) => {


  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
  const teritorialUnitFinalValues = useSelector(selectTeritorialUnitFinalValues);

  const [data, setData] = useState(teritorialUnitFinalValues);
  const [order1, setOrder1] = useState(["year", "ASC"]);

  const [data1, setData1] = useState(teritorialUnitFinalData.results);
  // console.log("data w Table", data)
  // console.log("data1 w Table", data1)

  useEffect(() => {
    setData(teritorialUnitFinalValues)
  }, [teritorialUnitFinalValues]);

  useEffect(() => {
    setData1(teritorialUnitFinalData.results)
  }, [teritorialUnitFinalData]);


  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {data1.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.id}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


export const Tables = () => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);







  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
  const teritorialUnitFinalValues = useSelector(selectTeritorialUnitFinalValues);

  const [data, setData] = useState(teritorialUnitFinalValues);
  const [order1, setOrder1] = useState(["year", "ASC"]);

  const [data1, setData1] = useState(teritorialUnitFinalData.results);
  // console.log("data w Table", data)
  //console.log("data1 w Table", data1)

  useEffect(() => {
    setData(teritorialUnitFinalValues)
  }, [teritorialUnitFinalValues]);

  useEffect(() => {
    setData1(teritorialUnitFinalData.results)
  }, [teritorialUnitFinalData]);











  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          size={'small'}
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>

            <>
              {data1.map(values =>
                <TableRow
                  tabIndex={-1}
                  key={nanoid()}
                  sx={{ cursor: 'pointer' }}
                >
                  {
                    values.values.map(value =>
                      <TableCell>{value.val}</TableCell>
                    )
                  }
                </TableRow>
              )}
            </>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}