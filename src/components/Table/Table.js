import React, {useState} from 'react';
import {signalement} from "./TabDB";
import ReactPaginate from 'react-paginate';
import {Icon} from '@iconify/react';
import deleteOutlineIcon from '@iconify-icons/material-symbols/delete-outline';
import editOutlineSharp from '@iconify-icons/material-symbols/edit-outline-sharp';
import { useNavigate } from 'react-router-dom';

function Table({
    fstate,
    ftype,
    fadress,
    fsource,
    fdatefrom,
    fdateto,
    nameSearch
}) {
    const navigate = useNavigate();

    const [selectedRows,
        setSelectedRows] = useState([]);
    const toggleRowSelection = (id) => {
        setSelectedRows((prevSelectedRows) => {
            if (prevSelectedRows.includes(id)) {
                // Remove the ID from selected rows if it's already selected
                return prevSelectedRows.filter((rowId) => rowId !== id);
            } else {
                // Add the ID to selected rows if it's not already selected
                return [
                    ...prevSelectedRows,
                    id
                ];
            }
        });
    };

    const toggleSelectAllRows = () => {
        setSelectedRows((prevSelectedRows) => {
            if (prevSelectedRows.length === filteredSignals.length) {
                // If all rows are already selected, deselect all rows
                return [];
            } else {
                // If some rows are not selected, select all rows
                return filteredSignals.map((signal) => signal.id);
            }
        });
    };
    const handleRowClick = (id, event) => {
        // const pageid = signal.id;
      const isCheckboxClicked = event.target.type === 'checkbox';
      if (!isCheckboxClicked) {
        console.log(`Row clicked with ID: ${id}`);
        navigate(`/details/${id}`);
    }
    };
    const parseDateString = (dateString) => {
        const [day,
            month,
            year] = dateString.split('/');
        return new Date(`${year}-${month}-${day}`);
    };

    const filterByDate = (signal) => {
        const signalDate = parseDateString(signal.date);
        if (fdatefrom && fdateto) {
            return (signalDate >= fdatefrom.getTime() && signalDate <= fdateto.getTime() + 86400000);
        } else if (fdatefrom) {
            return (signalDate >= fdatefrom.getTime())
        } else if (fdateto) {
            return (signalDate <= fdateto.getTime() + 86400000)
        }
        return true;
    };

    const filterByName = (signal) => {
        if (nameSearch) {
            const lowerCaseName = signal
                .name
                .toLowerCase();
            const lowerCaseSearch = nameSearch.toLowerCase();
            return lowerCaseName.includes(lowerCaseSearch);
        }
        return true;
    };

    const [currentPage,
        setCurrentPage] = useState(0);
    const itemsPerPage = 9; // Nombre d'éléments à afficher par page

    // Fonction de gestion du changement de page
    const handlePageChange = ({selected}) => {
        setCurrentPage(selected);
    };

    // Obtenir les signalements de la page actuelle
    const offset = currentPage * itemsPerPage;
    const filteredSignals = signalement.filter((signal) => ((fstate !== 'الكل'
        ? signal.state === fstate
        : true) && (ftype !== 'الكل'
        ? signal.type === ftype
        : true) && (fadress !== 'الكل'
        ? signal.adress === fadress
        : true) && (fsource !== 'الكل'
        ? signal.source === fsource
        : true) && (filterByDate
        ? filterByDate(signal)
        : true) && filterByName(signal)));

    const currentPageData = filteredSignals.slice(offset, offset + itemsPerPage);

    // Calcul du nombre total de pages
    const pageCount = Math.ceil(filteredSignals.length / itemsPerPage);

    return (
        <div className="relative ">
            <div className="shadow overflow-hidden border-b sm:rounded-lg">

                <table className="min-w-full divide-y text-right">
                    <thead className="bg-green-500 bg-opacity-20">
                        <tr className=" font-semibold">
                            <th scope="col" className="relative px-6 py-2">
                                <span className="sr-only">حذف</span>
                            </th>
                            <th scope="col" className="relative px-6 py-2">
                                <span className="sr-only">معالجة</span>
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-left text-xs uppercase tracking-wider text-right">
                                حالة الاخطار
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-left text-xs uppercase tracking-wider text-right">
                                مصدر الاخطار
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-left text-xs uppercase tracking-wider text-right">
                                مكان الاخطار
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-left text-xs uppercase tracking-wider text-right">
                                نوع الاخطار
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-left text-xs uppercase tracking-wider text-right">
                                العمر
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-left text-xs uppercase tracking-wider text-right">
                                تاريخ الاخطار
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-left text-xs uppercase tracking-wider text-right">
                                الاسم واللقب
                            </th>
                            <th scope="col" className="relative px-6 py-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-green-500 rounded border-gray-300 focus:ring-green-500"
                                    checked={selectedRows.length === filteredSignals.length}
                                    onChange={toggleSelectAllRows}/>
                            </th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y-0">
                        {currentPageData.map((signal) => (
                            <tr key={signal.id}
                            className={`cursor-pointer transition duration-300 ${
                              selectedRows.includes(signal.id) ? 'bg-gray-200 shadow-md' : 'hover:shadow-md'
                            }`}
                            onClick={(event) => handleRowClick(signal.id, event)}>
                                <td className="px-1 py-1 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        <button type="button" className="text-red-500 hover:text-red-600">
                                            <Icon icon={deleteOutlineIcon}/>
                                        </button>
                                    </div>
                                </td>
                                <td className="px-1 py-1 whitespace-nowrap text-right text-sm font-medium">
                                    {signal.state !== 'معالج' && (
                                        <button type="button" className="text-green-500 hover:text-green-600">
                                            <Icon icon={editOutlineSharp}/>
                                        </button>
                                    )}
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    {signal.state === 'معالج' && (
                                        <span
                                            className="px-2 inline-flex text-xs leading-5 font-semibold text-[#59C55E]">
                                            {signal.state}
                                        </span>
                                    )}
                                    {signal.state === 'قيد المعالجة' && (
                                        <span
                                            className="px-2 inline-flex text-xs leading-5 font-semibold text-[#F28123]">
                                            {signal.state}
                                        </span>
                                    )}
                                    {signal.state === 'غير معالج' && (
                                        <span
                                            className="px-2 inline-flex text-xs leading-5 font-semibold text-[#F50032]">
                                            {signal.state}
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {signal.source}
                                    </div>
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {signal.adress}
                                    </div>
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{signal.type}</div>
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {signal.age}
                                    </div>
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{signal.date}</div>
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {signal.name}
                                    </div>
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap text-right text-sm font-medium">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-green-500 rounded border-gray-300 focus:ring-green-500"
                                        checked={selectedRows.includes(signal.id)}
                                        onChange={() => toggleRowSelection(signal.id)}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Composant de pagination */}
            <div className="absolute bottom-0 left-0 mb-4 ml-6">

                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName="pagination fixed left-0 bottom-0 flex items-center justify-center mb-4 ml-6"
                    previousLinkClassName="px-3 py-1 mr-2 rounded-md bg-white text-gray-600 font-semibold hover:bg-gray-300 shadow-md"
                    nextLinkClassName="px-3 py-1 rounded-md bg-white text-gray-600 font-bold hover:bg-gray-300 shadow-md"
                    previousLabel="<"
                    nextLabel=">"
                    breakLinkClassName="px-3 py-1 mr-2 rounded-md bg-white text-gray-600
                    hover:bg-gray-300 shadow-md" pageLinkClassName="px-3 py-1 mr-2 rounded-md
                    bg-white text-gray-600 hover:bg-gray-300 shadow-md"
                    activeClassName="active-button font-bold" activeLinkClassName="ring-2
                    ring-green-500" />

                </div>
            </div>
          );
        }
    export default Table;