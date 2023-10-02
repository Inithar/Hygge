export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      addresses: {
        Row: {
          city: string
          country: string
          created_at: string
          flatNumber: string | null
          houseNumber: string
          id: number
          postcode: string
          street: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          city: string
          country: string
          created_at?: string
          flatNumber?: string | null
          houseNumber: string
          id?: number
          postcode: string
          street: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          city?: string
          country?: string
          created_at?: string
          flatNumber?: string | null
          houseNumber?: string
          id?: number
          postcode?: string
          street?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "addresses_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      brands: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          active: boolean | null
          color: string
          created_at: string
          icon: string
          id: number
          name: string
        }
        Insert: {
          active?: boolean | null
          color: string
          created_at?: string
          icon: string
          id?: number
          name: string
        }
        Update: {
          active?: boolean | null
          color?: string
          created_at?: string
          icon?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          created_at: string
          email: string
          id: string
          stripe_customer_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id: string
          stripe_customer_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          stripe_customer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      orderedProducts: {
        Row: {
          created_at: string
          id: number
          image: string
          name: string
          order: number
          price: number
          quantity: number
        }
        Insert: {
          created_at?: string
          id?: number
          image: string
          name: string
          order: number
          price: number
          quantity: number
        }
        Update: {
          created_at?: string
          id?: number
          image?: string
          name?: string
          order?: number
          price?: number
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "orderedProducts_order_fkey"
            columns: ["order"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          }
        ]
      }
      orders: {
        Row: {
          address: number
          amount: number
          created_at: string
          email: string
          id: number
          name: string
          phone: string
          status: Database["public"]["Enums"]["order_status"] | null
          surname: string
        }
        Insert: {
          address: number
          amount: number
          created_at?: string
          email: string
          id?: number
          name: string
          phone: string
          status?: Database["public"]["Enums"]["order_status"] | null
          surname: string
        }
        Update: {
          address?: number
          amount?: number
          created_at?: string
          email?: string
          id?: number
          name?: string
          phone?: string
          status?: Database["public"]["Enums"]["order_status"] | null
          surname?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_address_fkey"
            columns: ["address"]
            referencedRelation: "addresses"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          brand: number
          category: number
          created_at: string
          display: boolean | null
          id: number
          images: string[]
          name: string
          new: boolean
          price: number
          sale: number | null
        }
        Insert: {
          brand?: number
          category: number
          created_at?: string
          display?: boolean | null
          id?: number
          images: string[]
          name: string
          new?: boolean
          price: number
          sale?: number | null
        }
        Update: {
          brand?: number
          category?: number
          created_at?: string
          display?: boolean | null
          id?: number
          images?: string[]
          name?: string
          new?: boolean
          price?: number
          sale?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_brand_fkey"
            columns: ["brand"]
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_category_fkey"
            columns: ["category"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      verify_user_password: {
        Args: {
          password: string
        }
        Returns: boolean
      }
    }
    Enums: {
      order_status:
        | "pending payment"
        | "processing"
        | "completed"
        | "cancelled"
        | "refunded"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
