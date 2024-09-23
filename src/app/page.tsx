import { SignIn } from "@/components/sign-in";
import { database } from "@/db/database";

export default async function HomePage() {
  const bids = await database.query.bids.findMany();

  return (
    <main className="space-y-8">
      <h1 className="text-4xl font-bold">Items For Sale</h1>
      <SignIn />
      {/* <form
        action={async () => {
          "use server";
          await database.insert(bidsSchema).values({});
          revalidatePath("/");
        }}
      >
        <Input name="bid" placeholder="Bid" />
        <Button type="submit">Place Bid</Button>
      </form> */}

      {bids.map((bid) => (
        <div key={bid.id}>{bid.id}</div>
      ))}
    </main>
  );
}
