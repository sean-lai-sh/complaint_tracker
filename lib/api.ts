// api.ts

import { ComplaintResponse } from './types';

export async function fetchComplaints(): Promise<ComplaintResponse[]> {
  const response = await fetch('/api/complaints'); // Assuming you have an API route set up
  if (!response.ok) {
    throw new Error('Failed to fetch complaints'); // Basic error handling if we cannot get the data
  }
  const data: ComplaintResponse[] = await response.json(); // Async to prevent blocking of other code execution
  return data;
}

// Link a complaint to a predefined type to prevent run time errors due to TS requirements
export function processComplaints(complaints: ComplaintResponse[]): string[] {
  return complaints.map(complaint => {
    return `
      Complaint ID: ${complaint._source.complaint_id}
      Product: ${complaint._source.product}
      Issue: ${complaint._source.issue}
      Company: ${complaint._source.company}
      Date Sent to Company: ${complaint._source.date_sent_to_company}
      Complaint Details: ${complaint._source.complaint_what_happened}
      Response: ${complaint._source.company_response}
    `;
  });
}
