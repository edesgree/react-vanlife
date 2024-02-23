export default async function getVans() {
    try {
        const response = await fetch(`/api/vans`);
        const data = await response.json();
        console.log('try');
        return data.vans;

    } catch (err) {
        console.error("Error fetching data from API:", err);
        return [];
    }
}