import supabase from "./supabase";

export async function getClothes() {
  const { data, error } = await supabase.from("clothes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Clothes could not be loaded");
  }

  return data;
}

export async function getClothesType(type) {
  const { data, error } = await supabase
    .from("clothes")
    .select("*")
    .eq("type", type);

  if (error) {
    console.error(error);
    throw new Error("Clothes could not be loaded");
  }

  return data;
}
