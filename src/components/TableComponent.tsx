import React from "react";
import { TableProps } from "../models/models";
import { formatDate } from "../utils/FormatDate";
import { useAppSelector } from "../utils/redux";

const TableComponent: React.FC<TableProps> = ({ data }) => {

    const {descending} = useAppSelector(state => state.sort)

    const sortedData = data && [...data].sort((a, b) => {
        const [dateA, dateB] = [Date.parse(a.date_utc), Date.parse(b.date_utc)];
        return descending ? dateA - dateB : dateB - dateA;
    })

    return (
            <table className=" w-auto table-fixed mx-10 my-4 border border-black">
                <thead className="bg-gray-300">
                    <tr>
                        <th className=" w-8 font-bold p-2 text-center border border-black">Mission name</th>
                        <th className="font-bold p-2 text-center border border-black w-12">
                            Date of launch
                        </th>
                        <th className="font-bold p-2 text-center border border-black w-2/3">Information</th>
                        <th className="font-bold p-2 text-center border border-black w-1/5">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData?.map((item) => (
                        <tr key={item.flight_number}>
                            <td className="p-2 border border-black text-center">{item.name}</td>
                            <td className="p-2 border border-black text-center">{formatDate(item.date_utc)}</td>
                            <td className="p-2 border border-black">{item.details}</td>
                            <td className="p-2 border border-black">
                                <img src={item.rocket.flickr_images[0]} alt="Mission" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
};

export default TableComponent;