import supabase from "./supabase";

// NOTE: Custom service to get data from specific table in BE by supabase client.

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins") // NOTE: From what table to read
    .select("*"); // NOTE: What the columns (* stands for ALL) to get.

  if (error) {
    console.log("Cabins can not be loaded.", error);
    throw new Error(error);
  }

  return data;
}
