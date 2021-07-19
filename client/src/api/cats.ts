export default async function getCatImages(): Promise<{
  success: boolean;
  data: string[];
}> {
  const response = await fetch("/api/cats");
  const { data } = await response.json();

  return {
    success: response.ok,
    data,
  };
}
