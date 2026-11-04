"use server"
export async function fetchData(){
    const apiKey = process.env.HARVARD_ART_API_KEY;
    if (!apiKey) { //checking feature, was using it for debugging because I kept getting fetching error
        console.error("API Key is missing!");
    }
    try{
        const response = await fetch(
            `https://api.harvardartmuseums.org/object?&size=25&apikey=${apiKey}`, //url
        );
        if (response.status === 429){ //research this specific http status code on google for api handling (specifically http 429 is the too many request status code)
            throw new Error("Exceeded the API key limit.");
        }
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json(); //compile the data into a json package
        return data.records; //return the data/json and not the actual key
    } catch (error){
        console.error(error);
    }
}