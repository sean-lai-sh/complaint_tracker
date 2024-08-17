// pages/complaints.tsx

import { GetServerSideProps } from 'next';
import { fetchComplaints, processComplaints } from '../lib/api';
import { ComplaintResponse } from '../lib/types';

interface ComplaintsPageProps {
  complaints: string[];
}

const ComplaintsPage = ({ complaints }: ComplaintsPageProps) => {
  return (
    <div>
      <h1>Complaints</h1>
      {complaints.map((complaint, index) => (
        <pre key={index}>{complaint}</pre>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const complaintResponses: ComplaintResponse[] = await fetchComplaints();
    const complaints = processComplaints(complaintResponses);

    return {
      props: {
        complaints,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        complaints: [],
      },
    };
  }
};

export default ComplaintsPage;
