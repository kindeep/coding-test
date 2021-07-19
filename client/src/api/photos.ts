export interface APIResponse {
  success: boolean;
  data: string[];
}

export async function getCatImages(): Promise<APIResponse> {
  const response = await fetch("/api/photos/cats");
  const { data } = await response.json();

  return {
    success: response.ok && data.success,
    data,
  };
}

export async function getSharkImages(): Promise<APIResponse> {
  const response = await fetch("/api/photos/sharks");
  const { data } = await response.json();

  return {
    success: response.ok && data.success,
    data,
  };
}

export async function getAllImages(): Promise<APIResponse> {
  const response = await fetch("/api/photos/");
  const { data } = await response.json();

  return {
    success: response.ok && data.success,
    data,
  };
}
