import cars from "../../data/cars.json";

export async function get({ url }) {
    const { pathname, searchParams } = new URL(url);
  
    // Split by / and remove first empty element
    var paths = pathname.split('/').slice(2);

    // const json_url = "https://api.npoint.io/7ea34fb1a89ca45200e8";

    // var resp = await fetch(json_url);
    // var data = await resp.json();
    var data = cars;

    paths.forEach(e => data = data[e]);

    for (const [key, value] of searchParams) {
        // @ts-ignore
        data = data.filter(e => e[key] === value)[0];
    }

    return {
        status: 200,
        body: JSON.stringify(data)
    };
}