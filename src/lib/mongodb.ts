import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

// 개발 모드에서는 코드가 바뀔 때마다 모듈이 다시 실행되므로,
// 연결이 계속 새로 생기지 않도록 전역에 한 번만 만들어 둔다.
const globalForMongo = globalThis as unknown as { _mongoClientPromise?: Promise<MongoClient> };

export function getMongoClient(): Promise<MongoClient> {
  if (!uri) throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다 (.env.local 확인).");
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect().catch((err) => {
      // 실패한 연결은 캐시하지 않아 다음 요청에서 재시도할 수 있게 한다
      globalForMongo._mongoClientPromise = undefined;
      throw err;
    });
  }
  return globalForMongo._mongoClientPromise;
}

type ClickDoc = { _id: string; count: number };

export async function getClicksCollection() {
  const client = await getMongoClient();
  return client.db().collection<ClickDoc>("clicks");
}
