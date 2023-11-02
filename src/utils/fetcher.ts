async function fetcher(url: string): Promise<any> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('An error occurred while fetching the data.');
    }
    return response.json();
  }
  
  export default fetcher;
  