import Head from "next/head";

interface Props {
  children: React.ReactNode;
  book?: string;
}

const getBookName = (book: string | undefined) => {
  switch (book) {
    case "bukhari":
      return "Sahih al-Bukhari";
    case "muslim":
      return "Sahih Muslim";
    case "nasai":
      return "Sunan an-Nasai";
    case "ibnmajah":
      return "Sunan Ibn Majah";
    case "abudawud":
      return "Sunan Abi Dawud";
    default:
      return "al-Jāmi' Al-Kutub Al-Sittah";
  }
};

export const Default: React.FC<Props> = ({ children, book }) => {
  return (
    <>
      <Head>
        <title>baca-hadith.com | {getBookName(book)}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bottom-0 flex min-h-screen flex-col items-center justify-center bg-slate-900">
        <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            al-Jāmi&apos; Al-Kutub Al-Sittah
          </h1>
          {children}
        </div>
      </main>
      <footer className="min-w-screeen sticky flex w-full items-center justify-center bg-white py-3">
        <ul className="flex flex-row items-center justify-center gap-2">
          <li>Laporkan isu</li> | <li>Contact</li> | <li>Privacy</li>
        </ul>
      </footer>
    </>
  );
};
