import {Plant} from "@/utils/models/plant/plant.validator";
import {fetchPlantsByPlantName} from "@/utils/models/plant/plant.model";


const plantsByPlantName : Plant[] = await fetchPlantsByPlantName()

export async function SearchResultsForm() {

}