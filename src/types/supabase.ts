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
      categories: {
        Row: {
          active: boolean | null
          created_at: string | null
          icon: string | null
          id: number
          name: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          icon?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          icon?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
