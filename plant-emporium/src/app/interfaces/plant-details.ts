import { Size } from "../enums/size";

// export interface PlantDetails {
//     id: number,
//     name: string,
//     hometown: string,
//     color: string,
//     size: Size
// }

export interface PlantDetails {
    id: number,
    common_name: string,
    scientific_name: string[],
    other_name: string[],
    cycle: string,
    watering: string,
    sunlight: string[],
    default_image: {
        Image_id: number,
        license: string,
        license_name: string,
        license_url: string,
        original_url: string,
        regular_url: string,
        medium_url: string,
        small_url: string,
        thumbnail: string
    }
}