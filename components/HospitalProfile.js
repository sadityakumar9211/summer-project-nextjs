import Link from "next/link"
import truncatStr from "../utils/truncateString"
import timestampToDate from "../utils/timestampToDate"
import { useState } from "react"
import PatientMedicalRecordSystemAbi from "../constants/PatientMedicalRecordSystem.json"
import AddPatientModal from "./addPatientModal"

export default function HospitalProfile({
    name,
    hospitalAddress,
    email,
    phoneNumber,
}) {
    const [showModal, setShowModal] = useState(false)

    const handleButtonClick = () => {
        // show the modal
        setShowModal(true)
    }

    console.log(showModal)
    return (
        <div>
            <div>
                <div className="md:w-fit md:mx-auto w-full mx-auto bg-sky-200 bg-opacity-80 mt-10 p-5 rounded-lg hover:bg-opacity-100">
                    <div className="card p-4 hover">
                        <div className="mb-1">
                            <span>
                                <span className="font-sans md:text-xl font-medium hover:underline">
                                    Name
                                </span>
                                :{" "}
                                <span className="font-serif md:text-xl font-normal">
                                    {name}
                                </span>
                            </span>
                        </div>
                        <div className="mb-1">
                            <span className="font-sans md:text-xl font-medium hover:underline">
                                Hospital Account Address
                            </span>
                            :{" "}
                            <a
                                className="badge ml-3 md:p-2 px-4"
                                title="view on etherscan"
                                target="_blank"
                                href={
                                    "https://rinkeby.etherscan.io/address/" +
                                    hospitalAddress
                                }
                            >
                                {truncatStr(hospitalAddress, 25)}
                            </a>
                        </div>

                        <div>
                            <span className="font-sans md:text-xl font-medium hover:underline">
                                E-mail
                            </span>
                            :{" "}
                            <span className="badge badge-accent">{email}</span>
                        </div>
                        <div>
                            <span className="font-sans md:text-xl font-medium hover:underline">
                                Phone Number
                            </span>
                            :{" "}
                            <span className="badge badge-warning">
                                {phoneNumber}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
