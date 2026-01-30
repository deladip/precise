import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";
import type { InsertContactInquiry, ContactInquiry } from "@shared/schema";

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is required");
}

const pool = new Pool({
  connectionString,
});

export const db = drizzle(pool, { schema });

export interface IStorage {
  insertContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
}

class Storage implements IStorage {
  async insertContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [result] = await db
      .insert(schema.contactInquiries)
      .values(inquiry)
      .returning();
    return result;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return await db.select().from(schema.contactInquiries).orderBy(schema.contactInquiries.createdAt);
  }
}

export const storage = new Storage();
