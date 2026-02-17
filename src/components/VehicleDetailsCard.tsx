
const data = {
    registrationNumber: "KL 02 A 9122",
    state: "Kerala",
    rtoOffice: "KL-02 (Thiruvananthapuram)",
    vehicleType: "Motor Car (LMV)",
    vehicleClass: "Private Vehicle",
    manufacturer: "Maruti Suzuki",
    model: "Swift VXI",
    fuelType: "Petrol",
    color: "White",
    transmission: "Manual",
    engineNumber: "K12MN458721",
    chassisNumber: "MA3EJKD1S00A91222",
    ownerName: "Arun Kumar",
    registrationDate: "14 March 2022",
    insuranceStatus: "Valid",
    fitnessValidTill: "13 March 2037",
    pollutionCertificate: "Valid",
};

const VehicleDetailsCard = () => {
    const fields = [
        ["Registration Number", data.registrationNumber],
        ["State", data.state],
        ["RTO Office", data.rtoOffice],
        ["Vehicle Type", data.vehicleType],
        ["Vehicle Class", data.vehicleClass],
        ["Manufacturer", data.manufacturer],
        ["Model", data.model],
        ["Fuel Type", data.fuelType],
        ["Color", data.color],
        ["Transmission", data.transmission],
        ["Engine Number", data.engineNumber],
        ["Chassis Number", data.chassisNumber],
        ["Owner Name", data.ownerName],
        ["Registration Date", data.registrationDate],
        ["Insurance Status", data.insuranceStatus],
        ["Fitness Valid Till", data.fitnessValidTill],
        ["Pollution Certificate", data.pollutionCertificate],
    ];

    return (
        <div className='vechile-details-card'>
            <div className='search-card-head'>
                <h6 className='table-card-title'>VEHICLE DETAILS</h6>
            </div>

            <div className="vehicle-details">
                <ul>
                    {fields.map(([label, value]) => (
                        <li key={label}>
                            <span className="label">{label} : </span>
                            <span className="value">{value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VehicleDetailsCard