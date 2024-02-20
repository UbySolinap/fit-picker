import supabase from "./supabase";

export async function getClothes() {
  const { data, error } = await supabase.from("clothes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Clothes could not be loaded");
  }

  return data;
}

export async function getClothesType(type, filter) {
  let query = supabase.from("clothes").select("*").eq("type", type);

  // Filter
  if (filter !== null) query.overlaps("subtype", [filter]);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Clothes could not be loaded");
  }
  return data;
}

export async function addToClothes(newItem, imageName, imagePath) {
  const { data, error } = await supabase
    .from("clothes")
    .insert([{ ...newItem, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error("Item could not be added");
  }

  // Upload image
  const { error: storageError } = await supabase.storage
    .from("garment-images")
    .upload(imageName, newItem.image);

  // Delete garment image if error occurs
  if (storageError) {
    await supabase.from("clothes").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Item image could not be uploaded. Item was not added.");
  }

  return data;
}

export async function deleteItem(id) {
  const { error } = await supabase.from("clothes").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Item could not be deleted.");
  }
}

export async function updateItemSubType(id, newSubtypes) {
  const { data, error } = await supabase
    .from("clothes")
    .update({ subtype: newSubtypes })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Item could not be Updated.");
  }

  return data;
}

export async function updateItemWornCount(id, newTimesWorn) {
  const { data, error } = await supabase
    .from("clothes")
    .update({ timesWorn: newTimesWorn })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Item could not be Updated.");
  }
  return data;
}

export async function getClothesTypeByOrder(type) {
  const { data, error } = await supabase
    .from("clothes")
    .select("*")
    .eq("type", type)
    .order("timesWorn", { ascending: false })
    .limit(10);

  if (error) {
    console.error(error);
    throw new Error("Clothes could not be loaded.");
  }
  return data;
}
