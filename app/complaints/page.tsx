// app/complaints/page.tsx

import { fetchComplaints, processComplaints } from '../../lib/api';
import { ComplaintResponse } from '../../lib/types';

const ComplaintsPage = async () => {
  // Fetch the complaints
  const complaintResponses: ComplaintResponse[] = await fetchComplaints();
  const complaints = processComplaints(complaintResponses);

  return (
    <div>
      <h1>Complaints</h1>
      {complaints.map((complaint, index) => (
        <pre key={index}>{complaint} Test</pre>
      ))}
    </div>
  );
};

export default ComplaintsPage;
