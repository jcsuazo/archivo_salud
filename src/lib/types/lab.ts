export interface ReferenceRange {
  low: number | null;
  high: number | null;
  text: string;
}

export interface LabTest {
  canonical_code: string;
  canonical_name: string;
  source_name: string;
  value: number;
  unit: string;
  reference_range: ReferenceRange;
  flag: 'normal' | 'low' | 'high';
  critical: boolean;
  source_text: string;
}

export interface Finding {
  test_code: string;
  description: string;
  severity: 'info' | 'warning' | 'critical';
}

export interface Hypothesis {
  title: string;
  description: string;
  evidence: string[];
  confidence_score: number;
  disclaimer: string;
}

export interface Patient {
  name: string | null;
  age: number | null;
  sex: string | null;
  document_id: string | null;
}

export interface ReportMeta {
  lab_name: string | null;
  report_date: string | null;
  received_date: string | null;
  report_id: string | null;
}

export interface LabReport {
  patient: Patient | null;
  report: ReportMeta;
  tests: LabTest[];
  findings: Finding[];
  hypotheses: Hypothesis[];
  summary: string;
}

export type JobStatusType = 'pending' | 'uploading' | 'processing' | 'completed' | 'failed';

export interface JobStatus {
  job_id: string;
  status: JobStatusType;
  progress: number;
  status_detail: string | null;
  result: LabReport | null;
  error: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateJobRequest {
  filename: string;
  content_type: string;
  consent: boolean;
}

export interface CreateJobResponse {
  job_id: string;
  upload_url: string;
}
