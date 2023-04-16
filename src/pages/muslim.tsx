import { api } from "~/utils/api";
import { type Hadith } from "~/utils/types";

const muslim = () => {
  const hadithData = api.muslim.getAll.useQuery();

  return (
    <div>
      {hadithData.isLoading ? (
        <div>Loading...</div>
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900">
          <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              al-Jāmi&apos; Al-Kutub Al-Sittah
            </h1>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center text-center">
                <h1 className="m-4  text-2xl font-semibold text-slate-300/90">
                  Sahih Muslim
                </h1>
              </div>
              {/* Hadith Section */}
              <div className="grid grid-cols-1 gap-4 text-white md:grid-cols-2">
                {hadithData.data?.map((hadith: Hadith, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className="mt-4 flex h-[500px] overflow-auto rounded-md border border-slate-700 px-6 text-slate-200 hover:text-slate-50 rtl:justify-start"
                    >
                      <div className="mt-4 flex flex-col">
                        <h1>HR al-Bukhāri no: {hadith.number}</h1>
                        <p className="flex items-start py-2 text-justify">
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
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default muslim;
