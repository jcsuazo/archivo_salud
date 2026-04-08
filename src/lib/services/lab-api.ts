import type { CreateJobResponse, JobStatus } from '$lib/types/lab';

const API_BASE = import.meta.env.VITE_LAB_API_URL || 'http://localhost:8000';

export class LabApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'LabApiError';
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE}/api/v1${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new LabApiError(res.status, body);
  }
  return res.json();
}

export async function createJob(
  filename: string,
  contentType: string,
  consent: boolean
): Promise<CreateJobResponse> {
  return request<CreateJobResponse>('/jobs', {
    method: 'POST',
    body: JSON.stringify({ filename, content_type: contentType, consent }),
  });
}

export async function uploadFile(uploadUrl: string, file: File): Promise<void> {
  await fetch(uploadUrl, {
    method: 'PUT',
    body: file,
    headers: { 'Content-Type': file.type },
  });
}

export async function notifyUploadComplete(jobId: string): Promise<void> {
  await request(`/jobs/${jobId}/upload-complete`, { method: 'PUT' });
}

export async function getJobStatus(jobId: string): Promise<JobStatus> {
  return request<JobStatus>(`/jobs/${jobId}`);
}

export function pollJobStatus(
  jobId: string,
  onUpdate: (status: JobStatus) => void,
  intervalMs: number = 3000
): () => void {
  let active = true;

  const poll = async () => {
    let interval = intervalMs;
    while (active) {
      try {
        const status = await getJobStatus(jobId);
        onUpdate(status);
        if (status.status === 'completed' || status.status === 'failed') {
          break;
        }
        if (status.progress > 40) {
          interval = 5000;
        }
      } catch (e) {
        console.error('Polling error:', e);
      }
      await new Promise((r) => setTimeout(r, interval));
    }
  };

  poll();
  return () => {
    active = false;
  };
}
