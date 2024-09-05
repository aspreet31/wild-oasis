import Reservation from "@/app/_components/Reservation";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Cabin from "@/app/_components/Cabin";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";

export async function generateMetadata({params}) {
  const {name} = await  getCabin(params.cabinId);
  return { title: `Cabin ${name}`}
}

export async function generateStaticParams(){
  const cabins = await getCabins();
  const ids = cabins.map((cabin)=>({
    cabinId: String(cabin.id)
  }))
  return ids;
}

export default async function Page({params}) {
    console.log(params)
    const cabin = await getCabin(params.cabinId);
    console.log(cabin)
  const {  name, maxCapacity, image } =
    cabin;
   if(!cabin) return null;
  return (
    <div className="max-w-6xl mx-auto mt-8">
     <Cabin cabin={cabin}/>
      <div>
        <h2 className="text-5xl font-semibold text-center mb-4">
          Reserve today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner/>}>
          <Reservation cabin={cabin}/>
        </Suspense>
      </div>
    </div>
  );
}
