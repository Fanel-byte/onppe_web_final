import React,{useEffect,useState} from 'react';
import ReactPaginate from 'react-paginate';
import {Icon} from '@iconify/react';
import {getSignalements} from './TabDB';
import deleteOutlineIcon from '@iconify-icons/material-symbols/delete-outline';
import editOutlineSharp from '@iconify-icons/material-symbols/edit-outline-sharp';

function Table({
    fstate,
    ftype,
    fadress,
    fsource,
    fdatefrom,
    fdateto,
    nameSearch
}) {  
    const [signalements, setSignalements] = useState([]);
    useEffect(() => {
        getSignalements()
          .then((data) => {
            setSignalements(data);
          })
          .catch((error) => {
            console.error('Failed to fetch signalements:', error);
          });
      }, []);
  
    const handleRowClick = (id, event) => {
        const isCheckboxClicked = event.target.type === 'checkbox';
        const isDeleteIconClicked = event.target.closest('.text-red-500');
        const isEditIconClicked = event.target.closest('.text-green-500');
      
        if (!isCheckboxClicked && !isDeleteIconClicked && !isEditIconClicked) {
          console.log(`Row clicked with ID: ${id}`);
          // Perform any desired actions when a row is clicked
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
            const lowerCaseName = signal.nomenfant+signal.prenomenfant+signal.nomcitoyen+signal.prenomcitoyen;
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
    const filteredSignals = signalements.filter((signal) => ((fstate !== 'الكل'
        ? signal.statut === fstate
        : true) && (ftype !== 'الكل'
        ? signal.motif === ftype
        : true) && (fadress !== 'الكل'
        ? signal.enfantadresse === fadress
        : true) && (fsource !== 'الكل'
        ? signal.source === fsource
        : true) && (filterByDate
        ? filterByDate(signal)
        : true) && filterByName(signal)));

    const currentPageData = filteredSignals.slice(offset, offset + itemsPerPage);

    // Calcul du nombre total de pages
    const pageCount = Math.ceil(filteredSignals.length / itemsPerPage);

    const [isPopupVisible,
        setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="shadow overflow-hidden border-b sm:rounded-lg">

                <table className="min-w-full divide-y text-right overflow-hidden">
                    <thead className="bg-green-500 bg-opacity-20">
                        <tr className=" font-semibold">
                            
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
الطفل                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-left text-xs uppercase tracking-wider text-right">
المبلغ                            </th>
                     

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y-0">
                        {currentPageData.map((signal) => (
                            <tr
                                key={signal.signalementId}
                                className="cursor-pointer transition duration-300 hover:shadow-md"
                                onClick={(event) => handleRowClick(signal.signalementId, event)}>
                              
                                <td className="px-1 py-1 whitespace-nowrap text-right text-sm font-medium">
                                    {signal.statut !== 'معالج' && (
                                        <button type="button" className="text-green-500 hover:text-green-600">
                                            <Icon icon={editOutlineSharp}/>
                                        </button>
                                    )}
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    {signal.statut === 'معالج' && (
                                        <span
                                            className="px-2 inline-flex text-xs leading-5 font-semibold text-[#59C55E]">
                                            {signal.statut}
                                        </span>
                                    )}
                                    {signal.statut === 'قيد المعالجة' && (
                                        <span
                                            className="px-2 inline-flex text-xs leading-5 font-semibold text-[#F28123]">
                                            {signal.statut}
                                        </span>
                                    )}
                                    {signal.statut === 'غير معالج' && (
                                        <span
                                            className="px-2 inline-flex text-xs leading-5 font-semibold text-[#F50032]">
                                            {signal.statut}
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
                                        {signal.enfantadresse}
                                    </div>
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{signal.motif}</div>
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {signal.ageenfant}
                                    </div>
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{signal.date}</div>
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {signal.nomenfant+" "+signal.prenomenfant}
                                    </div>
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {signal.nomcitoyen+" "+signal.prenomcitoyen}
                                    </div>
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
                {isPopupVisible && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white text-right p-8 rounded shadow">
                            <h3 className="text-lg font-bold mb-4">تأكيد</h3>
                            <p>هل أنت متأكد من مسح الاخطار
                            </p>
                            <div className="flex justify-end mt-4">
                                <button
                                    className="bg-green-500 text-white py-2 px-4 rounded mr-2"
                                    onClick={togglePopup}>
                                    إلغاء
                                </button>
                                <button
                                    className="bg-red-500 text-white py-2 px-4 rounded"
                                    onClick={togglePopup}>
                                    مسح الاخطار
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
               );
            }
        export default Table;