import data from "../../data/cars.json";

export async function get({ params }) {
    let car = data["cars"].filter(e => e["slug"] === params.slug)[0];

    if (car) {
        return { body: { car }, maxAge: 1000 };
    } else {
        return { status: 404 }
    }
}
