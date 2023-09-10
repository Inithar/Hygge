export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      addresses: {
        Row: {
          city: string;
          country: string;
          created_at: string;
          flatNumber: string | null;
          houseNumber: string;
          id: number;
          postcode: string;
          street: string;
          user_id: string;
        };
        Insert: {
          city: string;
          country: string;
          created_at?: string;
          flatNumber?: string | null;
          houseNumber: string;
          id?: number;
          postcode: string;
          street: string;
          user_id: string;
        };
        Update: {
          city?: string;
          country?: string;
          created_at?: string;
          flatNumber?: string | null;
          houseNumber?: string;
          id?: number;
          postcode?: string;
          street?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "addresses_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      brands: {
        Row: {
          created_at: string;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      categories: {
        Row: {
          active: boolean | null;
          color: string;
          created_at: string;
          icon: string;
          id: number;
          name: string;
        };
        Insert: {
          active?: boolean | null;
          color: string;
          created_at?: string;
          icon: string;
          id?: number;
          name: string;
        };
        Update: {
          active?: boolean | null;
          color?: string;
          created_at?: string;
          icon?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      products: {
        Row: {
          brand: number;
          category: number;
          created_at: string;
          display: boolean | null;
          id: number;
          images: string[];
          name: string;
          new: boolean;
          price: number;
          sale: number | null;
        };
        Insert: {
          brand?: number;
          category: number;
          created_at?: string;
          display?: boolean | null;
          id?: number;
          images: string[];
          name: string;
          new?: boolean;
          price: number;
          sale?: number | null;
        };
        Update: {
          brand?: number;
          category?: number;
          created_at?: string;
          display?: boolean | null;
          id?: number;
          images?: string[];
          name?: string;
          new?: boolean;
          price?: number;
          sale?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "products_brand_fkey";
            columns: ["brand"];
            referencedRelation: "brands";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_category_fkey";
            columns: ["category"];
            referencedRelation: "categories";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      verify_user_password: {
        Args: {
          password: string;
        };
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
