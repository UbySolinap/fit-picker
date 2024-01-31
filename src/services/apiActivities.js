import supabase from "./supabase";

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
