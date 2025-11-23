

const API_BASE_URL = import.meta.env.VITE_API_URL;

export type HealthResponse = {
  ok: boolean;
  message: string;
};

export async function checkHealth(): Promise<HealthResponse> {
  if (!API_BASE_URL) {
    throw new Error("VITE_API_URL is not defined");
  }

  const res = await fetch(`${API_BASE_URL}/api/health`);

  if (!res.ok) {
    throw new Error("Backend is unreachable");
  }

  return res.json();
}
