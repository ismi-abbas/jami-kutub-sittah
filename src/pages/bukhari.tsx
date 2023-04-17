import { api } from "~/utils/api";
import { type Hadith } from "~/utils/types";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import Link from "next/link";
import { Default } from "~/components/Default";
import { Spinner } from "@chakra-ui/react";
import Error from "~/components/Error";
import { Amiri } from "next/font/google";

const amiriFont = Amiri({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "arabic"],
});

const Bukhari: React.FC = () => {
  const hadithData = api.bukhari.getAll.useQuery();

  return (
    <Default book="bukhari">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center text-center">
          <h1 className="m-4 flex flex-row items-center gap-2 text-center text-2xl font-semibold text-slate-300/90">
            <Link href="/">
              <span className="hover:text-slate-50">
                <BsFillArrowLeftSquareFill />
              </span>
            </Link>{" "}
            Sahih al-Bukhari
          </h1>
        </div>
        <div className="px-10 md:px-16 lg:px-24">
          {hadithData.isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.85s"
              emptyColor="gray.100"
              color="blue.700"
              size="xl"
            />
          ) : hadithData.error ? (
            <Error />
          ) : (
            <div className="grid grid-cols-1 gap-4 text-white">
              {hadithData.data?.map((hadith: Hadith, idx: number) => {
                return (
                  <div
                    key={idx}
                    className="mt-4 flex overflow-auto rounded-md border border-slate-700 px-6 text-slate-200 hover:text-slate-50 rtl:justify-start"
                  >
                    <div className="mt-4 flex flex-col">
                      <h1>HR al-Bukhārī no: {hadith.number}</h1>
                      <p
                        className={`flex py-2 text-end text-xl ${amiriFont.className} leading-10`}
                      >
                        {hadith.arab}
                      </p>
                      <div className="flex justify-center text-justify">
                        <p className="py-2">
                          Terjemahan:{" "}
                          {hadith.id ? hadith.id : "Tiada terjemahan"}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-4 text-2xl ">
        <BsFillArrowLeftSquareFill
          className="text-slate-400 hover:cursor-pointer hover:text-slate-50"
          onClick={() => console.log("Test")}
        />
        <BsFillArrowRightSquareFill className="text-slate-400 hover:cursor-pointer hover:text-slate-50" />
      </div>
    </Default>
  );
};

export default Bukhari;
