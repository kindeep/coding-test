export default async function getSharkImages(): Promise<{
  success: boolean;
  data: string[];
}> {
  const response = await fetch("/api/sharks");
  const { data } = await response.json();

  return {
    success: response.ok,
    data,
  };
}
