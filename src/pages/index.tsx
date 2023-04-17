import { type NextPage } from "next";
import Link from "next/link";
import { type KitabHadith } from "~/utils/types";
import { Default } from "~/components/Default";

const kitabHadith: KitabHadith[] = [
  {
    name: "Sahih al-Bukhari",
    author: "Imam al-Bukhari",
    authorRealName: "Abu Abdullah Muhammad bin Ismail al-Bukhari",
    url: "/bukhari",
    bookId: 1,
  },
  {
    name: "Sahih Muslim",
    author: "Imam Muslim",
    authorRealName: "Muslim bin al-Hajjaj al-Naysaburi",
    url: "/muslim",
    bookId: 2,
  },
  {
    name: "Sunan Tirmidzi",
    author: "Imam al-Tirmidzi",
    authorRealName:
      "Muhammad bin Isa bin Thaurah bin Musa bin ad-Dhahhak at-Tirmidhi",
    url: "/tirmidzi",
    bookId: 3,
  },
  {
    name: "Sunan Abi Dawud",
    author: "Imam Abi Dawud",
    authorRealName: "Abu Da'ud Sulayman ibn Ash`ath al-Azadi al-Sijistani",
    url: "/abudawud",
    bookId: 4,
  },
  {
    name: "Sunan an-Nasai",
    author: "Imam an-Nasai",
    authorRealName: "Ahmad bin Syu'aib bin Ali al-Nasā'ī",
    url: "/nasai",
    bookId: 5,
  },
  {
    name: "Sunan Ibn Majah",
    author: "Imam Ibn Majah",
    authorRealName:
      "Abu 'Abdullah Muhammad bin Yazid bin Abdullah bin Majah al-Rab'i al-Quzwaini ",
    url: "/ibnmajah",
    bookId: 6,
  },
];

const Home: NextPage = () => {
  return (
    <Default>
      <h1 className="m-4 text-2xl font-semibold text-slate-300/90">
        Pilih Kitab
      </h1>
      <div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {kitabHadith.map((kitab, idx) => {
            return (
              <li key={idx} className="rounded-lg p-4 text-slate-300 ring-1">
                <Link
                  className="flex items-center justify-center text-center"
                  href={kitab.url}
                >
                  {kitab.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Default>
  );
};

export default Home;
