export const fetchData = async (payload:any) => {
	return fetch('http://localhost:8080/quotes/',{
		method: 'POST',
		body: JSON.stringify(payload)
	});
}