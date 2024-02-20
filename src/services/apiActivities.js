import supabase, { supabaseUrl } from "./supabase";

export async function getActivities(filter) {
  let query = supabase
    .from("activities")
    .select("*")
    .order("date", { ascending: false });

  // Filter
  if (filter !== null) query.eq("status", filter);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Activities fail to load.");
  }

  return data;
}

export async function addActivity(activity) {
  const { data, error } = await supabase
    .from("activities")
    .insert([{ ...activity }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Activity could not be Added.");
  }

  return data;
}

export async function deleteActivity(id) {
  const { error } = await supabase.from("activities").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Activity could not be deleted.");
  }
}

export async function updateFit(id, fitImage) {
  console.log(fitImage);
  // Generate a random image name
  const imageName = `${Math.random()}-${fitImage.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/garment-images/${imageName}`;

  const { data, error } = await supabase
    .from("activities")
    .update({ fitImage: imagePath })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Fit could not be updated.");
  }

  // Upload image
  const { error: storageError } = await supabase.storage
    .from("garment-images")
    .upload(imageName, fitImage);

  // Delete garment image if error occurs
  if (storageError) {
    console.error(storageError);
    throw new Error("Item image could not be uploaded. Item was not added.");
  }

  return data;
}

export async function clearActivity() {
  const { error } = await supabase.from("activities").delete().neq("id", 0);

  if (error) {
    console.error(error);
    throw new Error("Activity history could not be cleared.");
  }
}
