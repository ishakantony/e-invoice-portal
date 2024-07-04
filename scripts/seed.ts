import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { migrate } from 'drizzle-orm/neon-http/migrator'
import { config } from 'dotenv'
import { problems, transformationStrategies } from '@/db/schema'

config({ path: '.env.local' })

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql)

const main = async () => {
  try {
    // Seed problems
    const problemsData = await db.select().from(problems)

    if (problemsData.length === 0) {
      console.log('Seeding problems')
      await db.insert(problems).values([
        {
          code: 'IRBM-ERR-001',
          name: "Invalid Buyer's TIN",
        },
        {
          code: 'IRBM-ERR-002',
          name: "Invalid Buyer's ID VALUE",
        },
        {
          code: 'IRBM-ERR-003',
          name: 'Duplicated Invoice Number',
        },
      ])
    } else {
      console.log('Skip seeding problems, table is not empty')
    }

    // Seed transformation strategy
    const transformationStrategiesData = await db
      .select()
      .from(transformationStrategies)

    if (transformationStrategiesData.length === 0) {
      console.log('Seeding transformationStrategies')
      await db.insert(transformationStrategies).values([
        {
          code: 'AMA-JSON-V1',
          name: 'Amadeus JSON V1',
        },
      ])
    } else {
      console.log('Skip seeding transformationStrategies, table is not empty')
    }

    console.log('Seeding completed')
  } catch (error) {
    console.error('Error during seeding:', error)
    process.exit(1)
  }
}

main()
