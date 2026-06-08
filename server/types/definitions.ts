import { Database } from "./database.types";

/** Entidades TypeScript  */
export type Product = Database['public']['Tables']['products']['Row'];
export type Categorie = Database['public']['Tables']['categories']['Row'];
export type Rate = Database['public']['Tables']['rates']['Row'];
export type Image = Database['public']['Tables']['product_images']['Row'];
export type Order = Database['public']['Tables']['orders']['Row'];