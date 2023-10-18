import { supabase } from "../lib/supabase";
import { PopulateProduct, PopulateProductFeatures, PopulateRelatedProducts } from "../types/collection";

export const getProduct = async (id: number) => {
  const { data: product, error } = await supabase
    .from("products")
    .select(`*, category("name", "color"), brand("name")`)
    .eq("id", id)
    .single<PopulateProduct>();

  if (error) {
    throw new Error("Product could not be loaded");
  }

  return product;
};

export const getProductFeatures = async (id: number) => {
  const { data: features, error } = await supabase
    .from("products_features")
    .select("*, feature(*)")
    .eq("product", id)
    .returns<PopulateProductFeatures[]>();

  if (error) {
    throw new Error("Product features could not be loaded");
  }

  return features;
};

export const getProductReviews = async (id: number) => {
  const { data: reviews, error } = await supabase.from("products_reviews").select("*").eq("product", id);

  if (error) {
    throw new Error("Product reviews could not be loaded");
  }

  return reviews;
};

export const getRelatedProducts = async (id: number) => {
  const { data: relatedProducts, error } = await supabase
    .from("related_products")
    .select(`*, related_product(*, category("name", "color"), brand("name"))`)
    .eq("product", id)
    .returns<PopulateRelatedProducts[]>();

  if (error) {
    throw new Error("Related products could not be loaded");
  }

  return relatedProducts;
};
