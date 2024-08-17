// types.ts
// Define types for the JSON data to prevent runtime errors
export interface Complaint {
    product: string;
    complaint_what_happened: string;
    date_sent_to_company: string;
    issue: string;
    sub_product: string;
    zip_code: string;
    tags: string | null;
    complaint_id: string;
    timely: string;
    consumer_consent_provided: string;
    company_response: string;
    submitted_via: string;
    company: string;
    date_received: string;
    state: string;
    consumer_disputed: string | null;
    company_public_response: string | null;
    sub_issue: string;
  }
  
export interface ComplaintResponse {
    _index: string;
    _type: string;
    _id: string;
    _score: number | null;
    _source: Complaint;
    sort: number[];
}
  