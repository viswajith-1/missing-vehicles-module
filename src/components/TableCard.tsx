import React from 'react'

const dummyTableData = [
  { "id": "MV-8924", "vehicleNumber": "KL 16 GH 3456", "vehicleName": "Maruti Swift", "vehicleType": "Hatchback", "reportedStation": "Kollam", "status": "FOUND" },
  { "id": "MV-8921", "vehicleNumber": "KL 01 AP 1234", "vehicleName": "Honda City i-VTEC", "vehicleType": "Sedan / LMV", "reportedStation": "Alappuzha", "status": "NOT YET FOUND" },
  { "id": "MV-8922", "vehicleNumber": "KL 07 CD 5678", "vehicleName": "Royal Enfield Classic", "vehicleType": "Two Wheeler", "reportedStation": "Ernakulam", "status": "NOT YET FOUND" },
  { "id": "MV-8923", "vehicleNumber": "KL 05 EF 9012", "vehicleName": "Tata Nexon", "vehicleType": "SUV", "reportedStation": "Kottayam", "status": "FOUND" },
  { "id": "MV-8924", "vehicleNumber": "KL 16 GH 3456", "vehicleName": "Maruti Swift", "vehicleType": "Hatchback", "reportedStation": "Kollam", "status": "FOUND" }
]

const TableCard = () => {
  return (
    <div className='table-card'>
      <div className='table-card-head'>
        <h6 className='table-card-title'>MISSING VEHICLE RECORDS</h6>
      </div>
      <div className='table-card-body'>
        <table className="vehicle-table">
          <thead>
            <tr className="table-heading">
              <th>ID</th>
              <th>VEHICLE NUMBER</th>
              <th>VEHICLE NAME</th>
              <th>VEHICLE TYPE</th>
              <th>REPORTED STATION</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {dummyTableData.map(item => (
              <tr>
                <td>{item.id}</td>
                <td className="vehicle-no">{item.vehicleNumber}</td>
                <td>{item.vehicleName}</td>
                <td>{item.vehicleType}</td>
                <td>{item.reportedStation}</td>
                <td>
                  {"FOUND"===item.status?<span className="status found">{item.status}</span>:<span className="status not-found">{item.status}</span>}
                </td>
                <td className="actions">
                  <button className="btn-found">Found</button>
                  <button className="btn-recover">Recover</button>
                </td>
              </tr>

            ))}

          </tbody>
        </table>
        <div className="table-pagination">
          <div className="record-info">
            Showing 1 to 2 of 5 records
          </div>

          <div className="pagination-controls">
            <button className="page-btn">Previous</button>
            <button className="page-number active">1</button>
            <button className="page-number">2</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableCard