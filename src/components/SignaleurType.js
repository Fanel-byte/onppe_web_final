import React from "react";

function SignaleurType({ statistique }) {
  // Calculate the total number of signaleurs for each type


  const totalEnfants = statistique.reduce((acc, val) => {
    if (val.descriptifar === "طفل") {
      return val.signaleurcount;
    }
    return acc;
  }, 0);

  const totalRepresentant = statistique.reduce((acc, val) => {
    if (val.descriptifar === 'ممثل شرعي') {
        return val.signaleurcountcount;
    }
    return acc;
  }, 0);
  const totalPhysique = statistique.reduce((acc, val) => {
    if (val.descriptifar === 'شخص طبيعي') {
        return val.signaleurcountcount;
    }
    return acc;
  }, 0);

  const totalMorale = statistique.reduce((acc, val) => {
    if (val.descriptifar ==='شخص معنوي') {
        return val.signaleurcountcount;
    }
    return acc;
  }, 0);


  return (
    <div className="">
   
      <div className=" mt-5 text-sm">
        <div className="mb-5">
          <table className="table age1 text-center border border-green-400 w-1/3 rounded-m mx-auto ">
            <thead>
              <tr>
             
                <th className="bg-green-200 text-black border-b border-green-400 text-base">
                  عدد الاخطارات
                </th>
                <th className="bg-green-200 text-black border-b border-green-400 text-base" >
                  النوع
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{totalEnfants}</td>
                <td>طفل</td>
              </tr>
              <tr>
                <td>{totalRepresentant}</td>
                <td>ممثل شرعي</td>
              </tr>
              <tr>
                <td>{totalPhysique}</td>
                <td>شخص طبيعي</td>

              </tr>
              <tr>
                <td>{totalMorale}</td>
                <td>شخص معنوي</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SignaleurType;