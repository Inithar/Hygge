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
          flat_number: string | null
          house_number: string
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
          flat_number?: string | null
          house_number: string
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
          flat_number?: string | null
          house_number?: string
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
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      categories: {
        Row: {
          active: boolean | null
          color: Database["public"]["Enums"]["color"]
          created_at: string
          icon: string
          id: number
          name: string
        }
        Insert: {
          active?: boolean | null
          color: Database["public"]["Enums"]["color"]
          created_at?: string
          icon: string
          id?: number
          name: string
        }
        Update: {
          active?: boolean | null
          color?: Database["public"]["Enums"]["color"]
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
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      favorite_products: {
        Row: {
          customer: string
          product: number
        }
        Insert: {
          customer: string
          product: number
        }
        Update: {
          customer?: string
          product?: number
        }
        Relationships: [
          {
            foreignKeyName: "favorite_products_customer_fkey"
            columns: ["customer"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorite_products_product_fkey"
            columns: ["product"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      features: {
        Row: {
          created_at: string
          description: string
          icon: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          description: string
          icon: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          description?: string
          icon?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      newsletter: {
        Row: {
          created_at: string
          email: string
        }
        Insert: {
          created_at?: string
          email: string
        }
        Update: {
          created_at?: string
          email?: string
        }
        Relationships: []
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
            isOneToOne: false
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
          customer: string
          email: string
          id: number
          name: string
          phone: string
          status: Database["public"]["Enums"]["order_status"]
          surname: string
        }
        Insert: {
          address: number
          amount: number
          created_at?: string
          customer: string
          email: string
          id?: number
          name: string
          phone: string
          status?: Database["public"]["Enums"]["order_status"]
          surname: string
        }
        Update: {
          address?: number
          amount?: number
          created_at?: string
          customer?: string
          email?: string
          id?: number
          name?: string
          phone?: string
          status?: Database["public"]["Enums"]["order_status"]
          surname?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_address_fkey"
            columns: ["address"]
            isOneToOne: false
            referencedRelation: "orders_addresses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_customer_fkey"
            columns: ["customer"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          }
        ]
      }
      orders_addresses: {
        Row: {
          city: string
          country: string
          created_at: string
          flat_number: string | null
          house_number: string
          id: number
          postcode: string
          street: string
        }
        Insert: {
          city: string
          country: string
          created_at?: string
          flat_number?: string | null
          house_number: string
          id?: number
          postcode: string
          street: string
        }
        Update: {
          city?: string
          country?: string
          created_at?: string
          flat_number?: string | null
          house_number?: string
          id?: number
          postcode?: string
          street?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          category: number
          created_at: string
          display: boolean | null
          id: number
          images: string[]
          name: string
          price: number
          sale: number | null
        }
        Insert: {
          category: number
          created_at?: string
          display?: boolean | null
          id?: number
          images: string[]
          name: string
          price: number
          sale?: number | null
        }
        Update: {
          category?: number
          created_at?: string
          display?: boolean | null
          id?: number
          images?: string[]
          name?: string
          price?: number
          sale?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          }
        ]
      }
      products_features: {
        Row: {
          feature: number
          product: number
        }
        Insert: {
          feature: number
          product: number
        }
        Update: {
          feature?: number
          product?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_features_feature_fkey"
            columns: ["feature"]
            isOneToOne: false
            referencedRelation: "features"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_features_product_fkey"
            columns: ["product"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products_reviews: {
        Row: {
          content: string
          created_at: string
          id: number
          name: string
          product: number
          profile_image: string
          surname: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: number
          name: string
          product: number
          profile_image: string
          surname: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: number
          name?: string
          product?: number
          profile_image?: string
          surname?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_reviews_product_fkey"
            columns: ["product"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      related_products: {
        Row: {
          product: number
          related_product: number
        }
        Insert: {
          product: number
          related_product?: number
        }
        Update: {
          product?: number
          related_product?: number
        }
        Relationships: [
          {
            foreignKeyName: "related_products_product_fkey"
            columns: ["product"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "related_products_related_product_fkey"
            columns: ["related_product"]
            isOneToOne: false
            referencedRelation: "products"
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
      color: "green" | "blue" | "yellow" | "pink" | "red"
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
