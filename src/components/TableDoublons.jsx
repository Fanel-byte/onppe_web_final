import React, {useState, useEffect} from 'react';
import {getSignalements} from './Table/TabDB';
import {Icon} from '@iconify/react';
import axios from 'axios';

function TableDoublons({idsignal}) {
    const [thissignal,
        setThisSignal] = useState([]);
        const [signalements,setSignalements] = useState([])
        useEffect(() => {
            getSignalements()
              .then((data) => {
                setSignalements(data);
              })
              .catch((error) => {
                console.error('Failed to fetch signalements:', error);
              });
          }, []);
    useEffect(() => {
       //console.log('idsignal:', idsignal);
        axios
            .get(`http://localhost:4000/signalement/getSignalementById/${idsignal}`)
            .then((response) => {
                setThisSignal(response.data);

            })
            .catch((error) => {
                console.error('Error retrieving signal:', error);
            });
    }, [idsignal]); // Empty dependency array to run the effect only once when the component mounts

  //  console.log(thissignal);

    const filterByName = (signal) => {
        if (thissignal.nomenfant) {
            const lowerCaseName = signal.nomenfant;
            const lowerCaseSearch = thissignal
                .nomenfant
                .toLowerCase();
            return lowerCaseName.includes(lowerCaseSearch);
        }
        return true;
    };

    const filterBySurname = (signal) => {
        if (signal.prenomenfant) {
            const lowerCaseName = signal.prenomenfant;
            const lowerCaseSearch = signal
                .prenomenfant
                .toLowerCase();
            return lowerCaseName.includes(lowerCaseSearch);
        }
        return true;
    };

    const [searchTerm,
        setSearchTerm] = useState('');

    const search = (signal) => {
        if (searchTerm) {
            const lowerCaseSearch = searchTerm.toLowerCase();

            return (signal.designationar.toLowerCase().includes(lowerCaseSearch) || signal.adresse.toLowerCase().includes(lowerCaseSearch) || (signal.nomenfant + signal.prenomenfant).toLowerCase().includes(lowerCaseSearch));
        }

        return true;
    };

 const filteredSignals = signalements.filter((signal) =>   signal.designationar === thissignal.designationar && (filterByName(signal) || filterBySurname(signal)) && search(signal));

    const handleLink = (signalId) => {
        // Handle the link action here
        console.log('Link signal with ID:', signalId);
    };

    return (
        <div className="container mx-auto">
            <div className="w-full">
                <input
                    type="text"
                    placeholder="بحث"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md text-right"/>

                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 rounded-md">
                        <thead className="bg-green-500 bg-opacity-20">
                            <tr className="font-semibold">
                                <th scope="col" className="relative px-6 py-2">
                                    <span className="sr-only">ربط</span>
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
                                    الاسم واللقب
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y-0">
                            {filteredSignals.map((item, index) => (
                                <tr key={index} className="cursor-pointer transition duration-300">
                                    <td className="px-1 py-1 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            <button
                                                type="button"
                                                className="text-gray-600 hover:text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md px-2 py-1 flex items-center"
                                                onClick={() => handleLink(item.id)}>
                                               
                                                <span className="ml-1">ربط</span>
                                            </button>

                                        </div>
                                    </td>
                                    <td className="px-6 py-1 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{item.adresse}</div>
                                    </td>
                                    <td className="px-6 py-1 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{item.designationar}</div>
                                    </td>
                                    <td className="px-6 py-1 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{item.ageenfant}</div>
                                    </td>
                                    <td className="px-6 py-1 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{item.nomenfant + ' ' + item.prenomenfant}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TableDoublons;