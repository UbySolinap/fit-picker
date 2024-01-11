import supabase from "./supabase";

export async function getTops() {
    const  { data, error } = await supabase
    .from('clothes')
    .select('*').eq('type', 'Tops')

    if(error) {
        console.error(error)
        throw new Error('Clothes could not be loaded')
    }

    return data
}