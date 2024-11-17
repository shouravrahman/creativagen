
import { auth } from "@/auth";
import { HistoryClient } from "@/components/history/History";
import { fetchHistory } from "@/services/history";


export default async function HistoryPage() {
   const session = await auth();

   if (!session?.user) {
      return <div>Please sign in to view history</div>;
   }

   const history = await fetchHistory();

   return <HistoryClient initialContent={history} />;
}
