
import React from "react";

function SignaleurEnfant({ InfoComparisonCounts }) {
  // Calculate the total number of signaleurs for each type
return(
<div className="statsEnfant mt-5 mb-5 text-sm">

<table className="table age1 text-center border border-green-400 w-1/3 rounded-md mx-auto text-center">
    <thead>
        <tr style={{ height: '65px' }}>
        <th className="bg-green-200 text-black border-b border-green-400 text-base" >
                عدد الاخطارات
            </th>
            <th className="bg-green-200 text-black border-b border-green-400 text-base">
                اخطارات تم تقديمها من الاطفال                          </th>
            
        </tr>
    </thead>
    <tbody>
    <tr>
  <td style={{ height: '100px' }}>{InfoComparisonCounts.sameInfoCount}</td>
  <td style={{ height: '100px' }}>الطفل يخطر عن نفسه</td>
</tr>
<tr>
  <td style={{ height: '100px' }}>{InfoComparisonCounts.differentInfoCount}</td>
  <td style={{ height: '100px' }}>الطفل يخطر عن غيره</td>
</tr>

    </tbody>
</table>
</div>
);
}
export default SignaleurEnfant;